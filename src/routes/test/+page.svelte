<script lang="ts">

  import { onMount } from "svelte";

  onMount(async () => {
    
    const resp = await fetch('http://localhost:8080/product/c/9?storeId=101');
    console.log(resp.json());
  });
</script>