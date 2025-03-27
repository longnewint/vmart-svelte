<script lang="ts">
  import '@fortawesome/fontawesome-free/css/all.min.css';
  import Header from './lib/Organisms/Header.svelte';
  import Index from './lib/Template/Index.svelte';
    import Footer from './lib/Organisms/Footer.svelte';
  
  let innerWidth: number = 0;
</script>

<svelte:window bind:innerWidth />

<Header {innerWidth} />
<Index />
<Footer />
