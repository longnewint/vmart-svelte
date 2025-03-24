<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<script>
  import { onMount } from "svelte";

  onMount(async () => {

    const resp = await fetch('http://localhost:8080/product/c/10?storeId=101');
    console.log(resp.json());
  });

</script>