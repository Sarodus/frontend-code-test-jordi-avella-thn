<script>
    import BookForm from "../components/BookForm.svelte";
    import RoomItem from "../components/RoomItem.svelte";
    import Steps from "../components/Steps.svelte";

    const rooms = [
        {
            id: 1,
            title: "Mini Dreamy Room",
            description:
                "Generous and confortable these modern furnished rooms offer two queen-size beds and are on the furst floor.",
            size: 20,
            beds: 1,
            people: 2,
            price: 200,
            photo: "/assets/rooms/room_1.png",
        },
        {
            id: 2,
            title: "Sweet Bungalow",
            description:
                "The perfect blend of confort and culture, our superior room with a central garden view has stunning, and comes with something.",
            size: 50,
            beds: 1,
            people: 2,
            price: 350,
            photo: "/assets/rooms/room_2.png",
        },
        {
            id: 3,
            title: "Los Cocos Suite",
            description:
                "If you want a little extra for tour stay, you might like our superior rooms. A ocean view room has a private beach and something.",
            size: 125,
            beds: 3,
            people: 4,
            price: 450,
            photo: "/assets/rooms/room_3.png",
        },
    ];

    const steps = [
        { text: "Choose your room", allowed: true },
        { text: "Enchance your stay", allowed: true },
        { text: "Enter your information", allowed: false },
    ];
    let selectedStep = 0;
    function onStepSelected(e) {
        selectedStep = e.detail.index;
        console.log("Selected step:", e.detail.index, e.detail.step);
    }

    function onRoomSelect(room) {
        console.log("Selected room:", room);
    }
</script>

<BookForm />

<div class="p-10">
    <div class="lg:px-12 xl:px-20 lg:w-1/2">
        <h1 class="font-bold text-xl">Rooms & Rates</h1>
        <p class="py-2">Plan your perfect stay at our hotel</p>
        <div class="w-full">
            <Steps bind:selectedStep on:select={onStepSelected} {steps} />
        </div>
    </div>

    <div class="pt-16">
        {#each rooms as room}
            <RoomItem {...room} on:click={() => onRoomSelect(room)} />
        {/each}
    </div>
</div>
