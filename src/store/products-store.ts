import { writable, type Writable } from 'svelte/store';
import type { Product } from '../types/product.type.ts';

const products: Writable<Product[]> = writable([]);

export default products;
