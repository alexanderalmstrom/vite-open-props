import { defineAsyncComponent } from 'vue';

export const currentBrand = import.meta.env.VITE_BRAND;

export function loadIcon(name) {
  return defineAsyncComponent(async () => {
    try {
      return await import(`../icons/${currentBrand}/${name}.svg`);
    } catch(error) {
      return await import(`../icons/shared/${name}.svg`);
    }
  });
}