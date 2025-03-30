<script lang="ts">
  import '@fortawesome/fontawesome-free/css/all.min.css';
  import Header from './components/Header.svelte';
  import Main from './components/Main.svelte';
  import Footer from './components/Footer.svelte';
  
  let innerWidth: number = 0;
</script>

<svelte:window bind:innerWidth />

<Header {innerWidth} />
<Main />
<Footer />
