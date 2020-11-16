<script>
    import { onMount } from "svelte";
    import { requestRooms } from "../fakeapi";
    import { bookDataStore } from "../store.js";

    import BookForm from "../components/BookForm.svelte";
    import RoomItem from "../components/RoomItem.svelte";
    import Steps from "../components/Steps.svelte";
    import Summary from "../components/Summary.svelte";

    onMount(async () => {
        const res = await requestRooms();
        rooms = res.rooms;

        if ($bookDataStore.roomId) {
            selectedRoom = rooms.find(
                (room) => room.id === $bookDataStore.roomId
            );
        }
    });

    let rooms = [];

    const steps = [
        { text: "Choose your room" },
        { text: "Enchance your stay" },
        { text: "Enter your information", disabled: true },
    ];

    let selectedRoom = undefined;
    let selectedStep = 0;

    function onRoomSelect(room) {
        selectedRoom = room;
    }

    function onSaveSummary() {
        bookDataStore.saveLocal(selectedRoom.id);
    }
</script>

<BookForm />

<div class="flex flex-col md:flex-row py-16 px-4 lg:px-24">
    <div class="flex flex-col w-full md:w-2/3">
        <div class="h-56 lg:px-12 xl:px-32">
            <h1 class="font-dosis font-bold text-xl">Rooms & Rates</h1>
            <p class="py-2">Plan your perfect stay at our hotel</p>
            <div class="w-full xl:max-w-xl">
                <Steps bind:selectedStep {steps} />
            </div>
        </div>

        <div>
            {#each rooms as room}
                <RoomItem {...room} on:click={() => onRoomSelect(room)} />
            {/each}
        </div>
    </div>
    <div class="w-full md:w-1/3 flex flex-col justify-center align-middle">
        <div class="h-56 mx-auto mb-auto px-4">
            <div class="flex h-full">
                <img
                    class="mt-auto hidden md:flex"
                    src="/assets/los-cocos-img-bg.png"
                    alt="coconut summary decoration" />
            </div>
            <Summary
                room={selectedRoom}
                book={$bookDataStore}
                onSave={onSaveSummary} />
        </div>
    </div>
</div>
