<script lang="ts">
  import Container from "../base/Container.svelte";

  let pageLinks: string[] = [
    'About',
    'Imprint',
    'Terms & Conditions',
    'Data settings',
  ];

  let socialMediaLinks: string[] = [
    'facebook',
    'instagram',
    'youtube',
    'twitter',
  ];
</script>

<footer>
  <Container classname="footer">
    <nav class="page-links">
      <ul>
        {#each pageLinks as pageLink, index (index)}
          <li>
            {pageLink}
          </li>
        {/each}
      </ul>
    </nav>
    <nav class="social-media">
      Follow our social media
      <ul>
        <li><i class="fa-brands fa-facebook"></i></li>
        <li><i class="fa-brands fa-instagram"></i></li>
        <li><i class="fa-brands fa-youtube"></i></li>
        <li><i class="fa-brands fa-x"></i></li>
      </ul>
    </nav>
  </Container>
</footer>

<style>
  nav {
    width: 100%;
    padding: 8px 0px;
  }

  .page-links > ul {
    display: flex;
    gap: 8px;
    align-items: flex-start;
    flex-wrap: wrap;
    color: #fff;
    padding: 0px;
  }

  li {
    list-style: none;
    padding-right: 8px;
    border-right: 2px solid #fff;
  }

  li:last-child {
    border-right: none;
  }

  .social-media {
    all: unset;
    text-align: left;
    padding: 24px 0px;
  }

  .social-media > ul {
    display: flex;
    gap: 8px;
    padding: 0px;
  }

  .social-media li {
    padding: 8px;
  }

  .social-media i {
    height: 24px;
    width: 24px;
    display: flex;
  }

  @media (max-width: 768px) {
    .social-media {
      text-align: center;
    }
    div {
      display: block;
    }
  }
</style>
