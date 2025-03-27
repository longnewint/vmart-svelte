<script lang="ts">
  import Close from '../../Atoms/Buttons/Close.svelte';
  import Container from '../../Atoms/Container.svelte';
  import Text from '../../Atoms/Text.svelte';

  let showInfo: boolean = true;

  const closeInfo: () => void = () => {
    showInfo = !showInfo;
  };
</script>

{#if showInfo}
  <Container classname={'infobar'}>
    <Text color={'#fff'}>FREE SHIPPING AND RETURNS</Text>
    <Close on:click={closeInfo} />
  </Container>
{/if}
