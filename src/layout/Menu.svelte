<script>
    let isOpen = false;
    function toggleMenu() {
        isOpen = !isOpen;
    }
</script>

<div class="flex md:hidden justify-between p-2">
    <img src="/assets/los-cocos-iso-footer.png" alt="los-cocos-logo" />
    <button on:click={toggleMenu}>MENU</button>
</div>

<div
    class:flex={isOpen}
    class:hidden={!isOpen}
    class="font-dosis md:flex flex-col mt-16 md:mt-0 md:flex-row w-full md:h-16 items-center md:justify-evenly
        sm:max-w-screen-lg m-auto fixed md:relative bg-white">
    <a href="/" class="px-4 py-2 hover:underline">Home</a>
    <a href="/" class="px-4 py-2 hover:underline">Rooms</a>
    <a href="/" class="px-4 py-2 hover:underline">Restaurant</a>
    <a href="/" class="px-4 py-2 hidden md:flex md:items-center">
        <img
            height="48"
            width="45"
            src="/assets/los-cocos-iso-footer.png"
            alt="los-cocos-logo" />
        <div class="flex flex-col leading-4">
            <span class="text-primary font-bold text-xl">Los Cocos</span>
            <span class="text-gray-600 text-sm">Bungalows</span>
        </div>
    </a>
    <a href="/" class="px-4 py-2 hover:underline">Weedings</a>
    <a href="/" class="px-4 py-2 hover:underline">Membership</a>
    <a href="/" class="px-4 py-2 hover:underline">Contact</a>
</div>
