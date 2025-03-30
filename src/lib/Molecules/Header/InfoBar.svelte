<script lang="ts">
  import Close from '../../base/buttons/Close.svelte';
  import Container from '../../base/Container.svelte';
  import Text from '../../base/Text.svelte';

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
