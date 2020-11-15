<script>
    import { onMount } from "svelte";
    import dayjs from "dayjs";

    onMount(() => {
        const today = dayjs();
        const tomorrow = today.add(1, "day");

        // Same format as browser's language
        formData.checkin = today.toJSON().slice(0, 10);
        formData.checkout = tomorrow.toJSON().slice(0, 10);
    });

    const adultOptions = [1, 2, 3, 4];
    const childrenOptions = [0, 1, 2, 3, 4];

    export let formData = {
        checkin: undefined,
        checkout: undefined,
        adults: 2,
        children: 0,
    }
</script>

<style>
    #book-form {
        background: url("/assets/los-cocos-room-header-2-x.png") no-repeat
            center;
        background-size: cover;
    }
</style>

<div id="book-form" class="w-full md:h-40 flex items-center justify-center">
    <div
        class="md:h-24 w-full flex flex-col md:flex-row md:items-center md:justify-center bg-blue-500 bg-opacity-50">
        <input
            value={formData.checkin}
            class="p-3 m-2 md:w-auto rounded-sm"
            type="date" />
        <input
            value={formData.checkout}
            class="p-3 m-2 md:w-auto rounded-sm"
            type="date" />
        <select
            value={formData.adults}
            class="p-3 m-2 md:w-auto rounded-sm bg-white">
            {#each adultOptions as value}
                <option {value}>Adults: {value}</option>
            {/each}
        </select>
        <select
            value={formData.children}
            class="p-3 m-2 md:w-auto rounded-sm bg-white">
            {#each childrenOptions as value}
                <option {value}>Adults: {value}</option>
            {/each}
        </select>
        <button class="p-3 m-2 md:w-40 bg-primary text-white text-bold">
            Modify
        </button>
    </div>
</div>
