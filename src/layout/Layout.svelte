<script>
    import Menu from './Menu.svelte'
    import Footer from './Footer.svelte';
</script>

<div class="flex flex-col">
    <Menu />
    <slot />
    <Footer />
</div>
