<script>
    import { formatPrice } from "../utils.js";
    export let room = undefined;
    export let book = undefined;
    export let onSave = () => {};
</script>

<div class="flex flex-col p-4 border font-sans">
    <h2 class="font-medium text-xl">Reservation Summary</h2>
    {#if room && book}
        <h2 class="mt-4 font-medium text-xl">{room.name}</h2>

        <div class="flex py-3">
            <div>
                <div class="font-medium">Check in</div>
                <div>From 15.00h</div>
            </div>
            <div class="ml-8">
                <div class="font-medium">Check out</div>
                <div>Before 12.00h</div>
            </div>
        </div>

        <div class="py-3">
            <div class="font-medium">Reservation date</div>
            <div>From {book.checkin} to {book.checkout}</div>
        </div>

        <div class="flex py-3">
            <div>
                <div class="font-medium">People</div>
                <div>
                    {book.adults}
                    Adults{#if book.children}, {book.children} Children{/if}
                </div>
            </div>
        </div>

        <div class="border border-b-0 border-gray-500" />

        <div class="py-3 pb-6 flex justify-between text-xl font-medium">
            <div>Total</div>
            <div>€{formatPrice(room.price)}</div>
        </div>

        <button
            on:click={onSave}
            class="p-2 bg-primary text-white rounded font-medium">Save</button>
    {:else}
        <div>Please, select a room</div>
    {/if}
</div>
