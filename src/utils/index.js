import { defineAsyncComponent } from 'vue';

export const currentBrand = import.meta.env.VITE_BRAND;

export function loadSvgIcon(name) {
  return defineAsyncComponent(async () => {
    try {
      return await import(`../icons/${currentBrand}/${name}.svg`);
    } catch(error) {
      try {
        return await import(`../icons/shared/${name}.svg`);
      } catch(error) {
        throw new Error(`${name}.svg does not exist in src/icons/shared`);
      }
    }
  });
}