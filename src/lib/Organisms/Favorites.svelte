<script lang="ts">
  import Product from '../Molecules/Products/Product.svelte';
  import Close from '../Atoms/Buttons/Close.svelte';
  import Modal from '../Molecules/Modal.svelte';
  import favorites from '../../store/favorites-store';
  import { createEventDispatcher } from 'svelte';
  import Heading from '../Atoms/Heading.svelte';

  const dispatch = createEventDispatcher();
  export let showFavorites: boolean;
</script>

{#if showFavorites}
  <Modal
    time={300}
    on:click={() => dispatch('close')}
    on:keypress={() => dispatch('close')}
    classname="favorites"
  >
    <div class="favorites">
      <div class="close">
        <Close on:click={() => dispatch('close')} classname="dark" />
      </div>
      <Heading tag="h3" color="#000">Favorites</Heading>
      <ul>
        {#each $favorites as { id, name, price, description } (id)}
          <Product {description} {price} {name} {id} />
        {/each}
      </ul>
    </div></Modal
  >
{/if}

<style>
  .favorites {
    display: flex;
    flex-direction: column;
    padding: 16px;
  }

  ul {
    all: unset;
    padding-top: 8px;
  }

  .close {
    display: flex;
    justify-content: flex-end;
  }
</style>
