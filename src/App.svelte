<script>
    import Layout from "./layout/Layout.svelte";
    import Rooms from "./pages/Rooms.svelte";
</script>

<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    body {
        color: #444;
    }
</style>

<Layout>
    <Rooms />
</Layout>
