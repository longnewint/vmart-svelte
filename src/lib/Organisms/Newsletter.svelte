<script lang="ts">
  import NewsletterForm from '../Molecules/Newsletter/NewsletterForm.svelte';
  import Toast from '../Molecules/Newsletter/Toast.svelte';
  import Container from '../Atoms/Container.svelte';
  import { validEmail } from '../../utils/validation';
  import Heading from '../Atoms/Heading.svelte';
  import Text from '../Atoms/Text.svelte';

  let interestedIn: string = 'wfashion';
  let showToast: boolean = false;
  let email: string = '';

  $: success = validEmail(email);

  const interestSelect = ({ detail }: { detail: string }) => {
    interestedIn = detail;
  };

  const addNewsletter: () => void = () => {
    showToast = true;
  };

  const close: () => void = () => {
    showToast = false;
    (email = ''), (interestedIn = 'wfashion');
  };
</script>

<Container classname={'newsletter'}>
  <div>
    <Heading tag="h2" color="#000">JOIN OUR NEWSLETTER!</Heading>
    <Text size="lg">Keep up to date</Text>
  </div>
  <NewsletterForm
    on:subscribe={addNewsletter}
    on:change={interestSelect}
    bind:value={email}
    {interestedIn}
  />
</Container>

{#if showToast}
  <Toast on:close={close} {success}>
    {success ? 'Email was added' : 'Invalid input'}
  </Toast>
{/if}

<style>
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 16px;
    gap: 16px;
  }

  @media (max-width: 768px) {
    div {
      align-items: center;
      padding: 32px 0px;
    }
  }
</style>
