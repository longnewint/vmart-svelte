<script lang="ts">

  let languages: { id: number; text: string }[] = [
    { id: 1, text: 'en' },
    { id: 2, text: 'de' },
  ];
  let selected: string;

</script>

<select
  bind:value={selected}
  aria-label="Language select"
>
  {#each languages as { id, text } (id)}
    <option value={text}>
      {text}
    </option>
  {/each}
</select>

<style>
  select {
    background-color: #fff;
    border: 1px solid #d0d1d3;
  }
</style>
