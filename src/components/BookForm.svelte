<script>
    import { onMount } from "svelte";
    import { bookDataStore } from "../store.js";

    onMount(() => {
        bookData = $bookDataStore;
    });

    let bookData = {};

    const adultOptions = [1, 2, 3, 4];
    const childrenOptions = [0, 1, 2, 3, 4];

    function modifyData() {
        $bookDataStore = bookData;
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
    <form
        class="md:h-24 w-full flex flex-col md:flex-row md:items-center md:justify-center bg-blue-500 bg-opacity-50">
        <input
            bind:value={bookData.checkin}
            class="p-3 m-2 md:w-auto rounded-sm"
            type="date"
            required />
        <input
            bind:value={bookData.checkout}
            class="p-3 m-2 md:w-auto rounded-sm"
            type="date"
            required />
        <select
            bind:value={bookData.adults}
            class="p-3 m-2 md:w-auto rounded-sm bg-white">
            {#each adultOptions as value}
                <option {value}>Adults: {value}</option>
            {/each}
        </select>
        <select
            bind:value={bookData.children}
            class="p-3 m-2 md:w-auto rounded-sm bg-white">
            {#each childrenOptions as value}
                <option {value}>Children: {value}</option>
            {/each}
        </select>
        <button
            type="submit"
            class="p-3 m-2 md:w-40 bg-primary text-white text-bold"
            on:click|preventDefault={modifyData}>
            Modify
        </button>
    </form>
</div>
