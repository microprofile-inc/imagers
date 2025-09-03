import { default as ___wbg_init, crop, blur, invert, rotate, flip_horizontal, flip_vertical, brighten, thumbnail } from './libs/imagers';
import { FilterType, ImageFormat } from './types';
declare function resize(bytes: Uint8Array, width: number, height: number, filter: FilterType): Uint8Array<ArrayBufferLike>;
declare function image_convert_format(bytes: Uint8Array, format: ImageFormat): Uint8Array<ArrayBufferLike>;
export { __wbg_init as init, crop, blur, invert, resize, rotate, flip_horizontal, flip_vertical, brighten, thumbnail, image_convert_format };
