<script>
    import { formatPrice } from "../utils.js";
    export let id = NaN;
    export let name = "";
    export let description = "";
    export let size = "";
    export let beds = NaN;
    export let people = NaN;
    export let type = NaN;
    export let price = NaN;
    export let photo = "";

    export let selected = false;

    const iconTypes = {
        double: "/assets/double-bed.svg",
    };
    $: icon = iconTypes[type];
</script>

<div
    on:click
    class={`flex p-4 border border-gray-400 h-40 lg:h-56 cursor-pointer hover:border-gray-700 hover:bg-gray-200 ${selected ? 'border-gray-500 bg-gray-100' : ''}`}>
    <img class="h-full -ml-8" src={photo} alt={name} />
    <div class="flex flex-col px-4 lg:px-8 w-full">
        <h2 class="font-bold text-xl">{name}</h2>
        <p class="h-6 lg:h-12 overflow-hidden">{description}</p>
        <div class="lg:my-2 xl:my-6 overflow-hidden">Size: {size}m2</div>
        {#if icon}
            <img class="mr-auto mt-auto" src={icon} alt={`Icon type ${type}`} />
        {/if}
        <div class="flex mt-auto flex-end content-end">
            <div class="mr-6 xl:mr-16">Beds: {beds}</div>
            <div>People: {people}</div>
            <div class="ml-auto font-bold text-lg">€{formatPrice(price)}</div>
        </div>
    </div>
</div>
