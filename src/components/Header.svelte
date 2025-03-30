<script lang="ts">
  import SearchBar from './header/SearchBar.svelte';
  import InfoBar from './header/InfoBar.svelte';
  import Navbar from './header/Navbar.svelte';
  import Favorites from './header/favorite/Favorites.svelte';
  import Cart from './header/cart/Cart.svelte';
  import searchTerm from '../store/search-store';
  import category from '../store/category-store';

  export let innerWidth: number;

  let showFavorites: boolean = false;
  let showCart: boolean = false;
  let value: string = '';
  let categories: { id: number; name: string }[] = [
    { id: 1, name: 'Shoes' },
    { id: 2, name: 'Bags' },
    { id: 3, name: 'Women' },
    { id: 4, name: 'Men' },
    { id: 5, name: 'Sport' },
  ];
  let mainCategories = categories.filter((item) => item.id <= 2);

  $: $searchTerm = value;
  $: if (innerWidth > 768 && $searchTerm) {
    $searchTerm = '';
    value = '';
  }

  const changeCategory = ({ detail }: { detail: number }) => {
    let cat = categories.find((item) => item.id === detail);
    if(cat != undefined)
      $category = cat.name;
  };

  const toggleFavorites: () => void = () => {
    showFavorites = !showFavorites;
  };

  const toggleCart: () => void = () => {
    showCart = !showCart;
  };
</script>

<header>
  <InfoBar />
  <Navbar
    on:showFavorites={toggleFavorites}
    on:change={changeCategory}
    on:showCart={toggleCart}
    {mainCategories}
  />
  <SearchBar {changeCategory} {categories} bind:value />
</header>

<Favorites on:close={toggleFavorites} {showFavorites} />
<Cart on:close={toggleCart} {showCart} />
