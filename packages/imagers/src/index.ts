import __wbg_init, {
    crop,
    blur,
    invert,
    resize as _resize,
    rotate,
    flip_horizontal,
    flip_vertical,
    brighten,
    thumbnail
} from './libs/imagers';
import {FilterType} from "./filter-type";

function resize(bytes: Uint8Array, width: number, height: number, filter: FilterType) {
    return _resize(bytes, width, height, filter);
}

export {
    __wbg_init as init,
    crop,
    blur,
    invert,
    resize,
    rotate,
    flip_horizontal,
    flip_vertical,
    brighten,
    thumbnail
};