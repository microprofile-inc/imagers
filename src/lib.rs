use wasm_bindgen::prelude::wasm_bindgen;
use std::io::{Cursor};
use image::{ImageReader, ImageFormat};

use image::imageops::FilterType;

#[wasm_bindgen]
pub fn crop(bytes: Vec<u8>, x: u32, y: u32, width: u32, height: u32) -> Vec<u8> {
    let img = ImageReader::new(Cursor::new(bytes))
        .with_guessed_format().unwrap()
        .decode().unwrap();

    // 裁剪
    let cropped = img.crop_imm(x, y, width, height);

    // 编码为 PNG
    let mut buf = Vec::new();
    cropped.write_to(&mut Cursor::new(&mut buf), ImageFormat::Png).unwrap();
    buf
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
    let mut buf = Vec::new();
    resized.write_to(&mut Cursor::new(&mut buf), ImageFormat::Png).unwrap();
    buf
}

#[test]
pub fn test() {
    let op = ImageReader::open("./packages/docs/src/bg.png");

    let img =op.unwrap().decode();
    let mut dm = image::DynamicImage::from(img.unwrap());
    let crop = dm.crop(1000, 1000, 100, 100);

    crop.save("./output.png").expect("Failed to save output.png");
}
