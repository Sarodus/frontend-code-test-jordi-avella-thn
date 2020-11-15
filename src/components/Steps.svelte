<script>
    import { createEventDispatcher } from "svelte";

    export let steps = [
        { text: "Example 1", allowed: true },
        { text: "Example 2", allowed: true },
        { text: "Example 3", allowed: false },
    ];
    export let selectedStep = 0;

    const firstLastOffset = 15;
    const circleWidth = 25;

    $: numSteps = steps.length;
    $: stepSizePercent = (100 - firstLastOffset * 2) / (numSteps - 1);

    const dispatch = createEventDispatcher();
    function onSelect(index) {
        const step = steps[index];
        if (step.allowed) {
            dispatch("select", { index, step: steps[index] });
        }
    }
</script>

<style lang="postcss">
    svg {
        stroke: theme("colors.gray.700");
        text-anchor: middle;
    }
    circle {
        fill: white;
    }
    text {
        stroke: theme("colors.gray.500");
    }
    .dot {
        fill: theme("colors.primary");
    }
    .active,
    .active * {
        stroke: theme("colors.primary");
    }
    .step:hover.allowed * {
        stroke: theme("colors.primary");
        @apply cursor-pointer;
    }
    .step:not(.allowed) * {
        @apply cursor-not-allowed;
    }
</style>

<div class="w-full">
    <svg width="100%" height="70">
        <circle cx="1%" cy={circleWidth} r="3" class="dot" />
        <line
            class="active"
            x1="1%"
            y1={circleWidth}
            x2={`${firstLastOffset}%`}
            y2={circleWidth} />
        {#each steps as step, i}
            <line
                class:active={selectedStep >= i + 1}
                x1={`${stepSizePercent * i + firstLastOffset}%`}
                y1={circleWidth}
                x2={`${Math.min(stepSizePercent * (i + 1) + firstLastOffset, 99)}%`}
                y2={circleWidth} />
        {/each}
        {#each steps as step, i}
            <g
                class="step"
                class:allowed={step.allowed}
                class:active={selectedStep >= i}
                on:click={() => onSelect(i)}>
                <circle
                    cx={`${stepSizePercent * i + firstLastOffset}%`}
                    cy={circleWidth}
                    r={selectedStep === i ? circleWidth - 1 : circleWidth - 5} />
                <text x={`${stepSizePercent * i + firstLastOffset}%`} y="30">
                    {i + 1}
                </text>
                <text x={`${stepSizePercent * i + firstLastOffset}%`} y="65">
                    {step.text}
                </text>
            </g>
        {/each}
        <circle cx="99%" cy={circleWidth} r="3" class="dot" />
    </svg>
</div>
