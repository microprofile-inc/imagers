import __wbg_init, {
  crop,
  blur,
  fast_blur,
  invert,
  resize as _resize,
  huerotate,
  rotate90,
  rotate180,
  rotate270,
  flip_horizontal,
  flip_vertical,
  brighten,
  thumbnail,
  image_convert_format as _image_convert_format,
  grayscale
} from './libs/imagers';
import {FilterType, ImageFormat} from "./types";

function resize(bytes: Uint8Array, width: number, height: number, filter: FilterType) {
  return _resize(bytes, width, height, filter);
}

function image_convert_format(bytes: Uint8Array, format: ImageFormat) {
  return _image_convert_format(bytes, format);  
}

export {
  __wbg_init as init,
  crop,
  blur,
  fast_blur,
  invert,
  resize,
  huerotate,
  rotate90,
  rotate180,
  rotate270,
  flip_horizontal,
  flip_vertical,
  brighten,
  thumbnail,
  image_convert_format,
  grayscale
};