<script>
    export let steps = [
        { text: "Example 1", disabled: false },
        { text: "Example 2", disabled: false },
        { text: "Example 3", disabled: true },
    ];
    export let selectedStep = 0;

    const firstLastOffset = 15;
    const circleWidth = 25;

    $: numSteps = steps.length;
    $: stepSizePercent = (100 - firstLastOffset * 2) / (numSteps - 1);
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
        stroke: theme("colors.gray.400");
        @apply font-thin;
    }
    .dot {
        fille: theme("colors.primary");
    }
    .active,
    .active circle,
    .active text {
        stroke: theme("colors.primary");
    }
    .active text.description {
        stroke: theme("colors.gray.700");
    }
    .step:hover * {
        stroke: theme("colors.primary");
        @apply cursor-pointer;
    }
    .step.disabled:hover * {
        @apply cursor-not-allowed;
    }
</style>

<div class="w-full">
    <svg width="100%" height="75">
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
                class:disabled={!!step.disabled}
                class:active={selectedStep >= i}
                on:click={() => {
                    if (!step.disabled) selectedStep = i;
                }}>
                <circle
                    cx={`${stepSizePercent * i + firstLastOffset}%`}
                    cy={circleWidth}
                    r={selectedStep === i ? circleWidth - 1 : circleWidth - 5} />
                <text
                    class="number"
                    x={`${stepSizePercent * i + firstLastOffset}%`}
                    y="30">
                    {i + 1}
                </text>
                <text
                    class="description"
                    x={`${stepSizePercent * i + firstLastOffset}%`}
                    y="70">
                    {step.text}
                </text>
            </g>
        {/each}
        <circle cx="99%" cy={circleWidth} r="3" class="dot" />
    </svg>
</div>
