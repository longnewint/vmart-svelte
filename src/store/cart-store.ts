import { getStoreArray, updateStore, removeStore } from '../utils/storage';
import { writable, type Writable } from 'svelte/store';
import type { Product } from '../types/product.type';

const cart: Writable<Product[]> = writable([]);

const customCartStore = {
  subscribe: cart.subscribe,
  set: (products: Product[]) => {
    cart.update((items: Product[]) => {
      const cartStorage = getStoreArray('cart');
      if (!cartStorage?.length) {
        return (items = []);
      }
      const initialCartItems = cartStorage.map((item) => {
        const index = products.findIndex(
          (product) => product.id === item.split(':')[0]
        );
        if (index !== -1) {
          return {
            ...products[index],
            amount: parseInt(item.split(':')[1]),
          };
        }
      });

      return (items = [...initialCartItems] as Product[]);
    });
  },
  add: (product: Product) => {
    cart.update((items: Product[]) => {
      const cartStorage = getStoreArray('cart');
      const existingCartItemIndex = items.findIndex(
        (item) => item.name === product.name
      );
      const existingCartItem = items[existingCartItemIndex];
      let updatedCart: Product[];
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + 1,
        };
        updatedCart = [...items];
        updatedCart[existingCartItemIndex] = updatedItem;
        const storage = cartStorage?.filter(
          (item) => !item.includes(product.id)
        );

        if(storage != undefined)
          updateStore('cart', storage, `${product.id}:${updatedItem.amount}`);
        return updatedCart;

      } else {
        if(cartStorage != undefined)
          updateStore('cart', cartStorage, `${product.id}:1`);

        return (items = [...items, product]);
      }
    });
  },
  remove: (product: Product) => {
    cart.update((items: Product[]) => {
      const cartStorage = getStoreArray('cart');
      const storage = cartStorage?.filter((item) => !item.includes(product.id));
      const existingCartItemIndex = items.findIndex(
        (item) => item.name === product.name
      );
      const existingCartItem = items[existingCartItemIndex];
      let updatedCart: Product[];
      if (existingCartItem.amount > 1) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount - 1,
        };
        updatedCart = [...items];
        updatedCart[existingCartItemIndex] = updatedItem;
        if(storage != undefined)
          updateStore('cart', storage, `${product.id}:${updatedItem.amount}`);
        return updatedCart;
      } else {
        if(storage != undefined)
          storage.length ? updateStore('cart', storage) : removeStore('cart');
        return items.filter((item) => item.name !== product.name);
      }
    });
  },
};

export default customCartStore;
