<script lang="ts">
  import Container from '../../../lib/base/Container.svelte';
  import Heading from '../../../lib/base/Heading.svelte';
  import Text from '../../../lib/base/Text.svelte';
</script>

<Container classname="hero">
  <div class="info">
    <Heading>DROP WINTER 2022</Heading>
    <Text size="lg" color="#fff">
      The 3 Pairs of Shoes You Need for this Winter
    </Text>
    <button
      ><Text size="lg bold" color="#fff">Shop now</Text>
      <img src="/images/arrow.png" alt="Arrow right" />
    </button>
  </div>
  <div class="image">
    <img src="/images/model.webp" alt="Model" />
  </div>
</Container>

<style>
  .info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .image {
    height: 352px;
  }

  button {
    all: unset;
    padding-top: 24px;
    display: flex;
    align-items: center;
    gap: 8px;
    height: 20px;
    padding-bottom: 4px;
    border-bottom: 1.6px solid transparent;
  }

  button > img {
    height: 20px;
    width: 20px;
    filter: invert(95%) sepia(0%) saturate(7500%) hue-rotate(26deg)
      brightness(107%) contrast(108%);
  }

  button:hover {
    border-color: #fff;
  }

  .image > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    .image {
      height: unset;
      max-height: 352px;
    }

    .info {
      align-items: center;
      text-align: center;
      padding: 0px 8px;
    }
  }
</style>
