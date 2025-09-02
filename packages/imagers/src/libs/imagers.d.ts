/* tslint:disable */
/* eslint-disable */
export function crop(bytes: Uint8Array, x: number, y: number, width: number, height: number): Uint8Array;
export function resize(bytes: Uint8Array, width: number, height: number, filter: number): Uint8Array;
export function blur(bytes: Uint8Array, sigma: number): Uint8Array;
export function rotate(bytes: Uint8Array, angle: number): Uint8Array;
export function flip_vertical(bytes: Uint8Array): Uint8Array;
export function flip_horizontal(bytes: Uint8Array): Uint8Array;
export function brighten(bytes: Uint8Array, value: number): Uint8Array;
export function invert(bytes: Uint8Array): Uint8Array;
export function thumbnail(bytes: Uint8Array, width: number, height: number): Uint8Array;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly crop: (a: number, b: number, c: number, d: number, e: number, f: number) => [number, number];
  readonly resize: (a: number, b: number, c: number, d: number, e: number) => [number, number];
  readonly blur: (a: number, b: number, c: number) => [number, number];
  readonly rotate: (a: number, b: number, c: number) => [number, number];
  readonly flip_vertical: (a: number, b: number) => [number, number];
  readonly flip_horizontal: (a: number, b: number) => [number, number];
  readonly brighten: (a: number, b: number, c: number) => [number, number];
  readonly invert: (a: number, b: number) => [number, number];
  readonly thumbnail: (a: number, b: number, c: number, d: number) => [number, number];
  readonly __wbindgen_export_0: WebAssembly.Table;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
