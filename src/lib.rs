use wasm_bindgen::prelude::wasm_bindgen;
use std::io::{Cursor};
use image::{ImageReader, ImageFormat, DynamicImage};
use image::imageops::FilterType;

fn bytes_to_image(bytes: Vec<u8>) -> DynamicImage {
    ImageReader::new(Cursor::new(bytes))
        .with_guessed_format().unwrap()
        .decode().unwrap()
}

#[wasm_bindgen]
pub fn image_to_png(bytes: Vec<u8>) -> Vec<u8> {
    let image = bytes_to_image(bytes);

    let mut buf = Vec::new();
    image.write_to(&mut Cursor::new(&mut buf), ImageFormat::Png).unwrap();
    buf
}

#[wasm_bindgen]
pub fn image_to_jpeg(bytes: Vec<u8>) -> Vec<u8> {
    let image = bytes_to_image(bytes);

    let mut buf = Vec::new();
    image.write_to(&mut Cursor::new(&mut buf), ImageFormat::Jpeg).unwrap();
    buf
}

#[wasm_bindgen]
pub fn image_to_webp(bytes: Vec<u8>) -> Vec<u8> {
    let image = bytes_to_image(bytes);

    let mut buf = Vec::new();
    image.write_to(&mut Cursor::new(&mut buf), ImageFormat::WebP).unwrap();
    buf
}

#[wasm_bindgen]
pub fn crop(bytes: Vec<u8>, x: u32, y: u32, width: u32, height: u32) -> Vec<u8> {
    let img = bytes_to_image(bytes);
    let cropped = img.crop_imm(x, y, width, height);
    image_to_png(cropped.as_bytes().to_vec())
}

#[wasm_bindgen]
pub fn resize(bytes: Vec<u8>, width: u32, height: u32, filter: u32) -> Vec<u8> {
    let img = ImageReader::new(Cursor::new(bytes))
        .with_guessed_format().unwrap()
        .decode().unwrap();

    let filter_type = match filter {
        0 => FilterType::Nearest,
        1 => FilterType::Triangle,
        2 => FilterType::CatmullRom,
        3 => FilterType::Gaussian,
        4 => FilterType::Lanczos3,
        _ => FilterType::Nearest,
    };

    let resized = img.resize(width, height, filter_type);
    image_to_png(resized.as_bytes().to_vec())
}

#[wasm_bindgen]
pub fn blur(bytes: Vec<u8>, sigma: f32) -> Vec<u8> {
    let image = bytes_to_image(bytes);
    image_to_png(
        image.blur(sigma).as_bytes().to_vec()
    )
}

#[wasm_bindgen]
pub fn rotate(bytes: Vec<u8>, angle: i32) -> Vec<u8> {
    let image = bytes_to_image(bytes);
    image_to_png(
        image.huerotate(angle).as_bytes().to_vec()
    )
}

#[wasm_bindgen]
pub fn flip_vertical(bytes: Vec<u8>) -> Vec<u8> {
    let image = bytes_to_image(bytes);
    image_to_png(
        image.flipv().as_bytes().to_vec()
    )
}

#[wasm_bindgen]
pub fn flip_horizontal(bytes: Vec<u8>) -> Vec<u8> {
    let image = bytes_to_image(bytes);
    image_to_png(
        image.fliph().as_bytes().to_vec()
    )
}

#[wasm_bindgen]
pub fn brighten(bytes: Vec<u8>, value: i32) -> Vec<u8> {
    let image = bytes_to_image(bytes);
    image_to_png(
        image.brighten(value).as_bytes().to_vec()
    )
}

#[wasm_bindgen]
pub fn invert(bytes: Vec<u8>) -> Vec<u8> {
    let mut image = bytes_to_image(bytes);
    image.invert();

    image_to_png(
        image.as_bytes().to_vec()
    )
}


#[wasm_bindgen]
pub fn thumbnail(bytes: Vec<u8>, width: u32, height: u32) -> Vec<u8> {
    let image = bytes_to_image(bytes);

    image_to_png(
        image.thumbnail(width, height).as_bytes().to_vec()
    )
}
