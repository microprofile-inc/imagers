/* tslint:disable */
/* eslint-disable */
export const memory: WebAssembly.Memory;
export const image_to_png: (a: number, b: number) => [number, number];
export const image_to_jpeg: (a: number, b: number) => [number, number];
export const image_to_webp: (a: number, b: number) => [number, number];
export const crop: (a: number, b: number, c: number, d: number, e: number, f: number) => [number, number];
export const resize: (a: number, b: number, c: number, d: number, e: number) => [number, number];
export const blur: (a: number, b: number, c: number) => [number, number];
export const rotate: (a: number, b: number, c: number) => [number, number];
export const flip_vertical: (a: number, b: number) => [number, number];
export const flip_horizontal: (a: number, b: number) => [number, number];
export const brighten: (a: number, b: number, c: number) => [number, number];
export const invert: (a: number, b: number) => [number, number];
export const thumbnail: (a: number, b: number, c: number, d: number) => [number, number];
export const __wbindgen_export_0: WebAssembly.Table;
export const __wbindgen_malloc: (a: number, b: number) => number;
export const __wbindgen_free: (a: number, b: number, c: number) => void;
export const __wbindgen_start: () => void;
