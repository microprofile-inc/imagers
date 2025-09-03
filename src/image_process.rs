pub mod image_process {
    use wasm_bindgen::prelude::wasm_bindgen;
    use std::io::{Cursor};
    use image::{ImageReader, ImageFormat, DynamicImage};
    use image::imageops::FilterType;

    pub fn bytes_to_image(bytes: Vec<u8>) -> DynamicImage {
        ImageReader::new(Cursor::new(bytes))
            .with_guessed_format().unwrap()
            .decode().unwrap()
    }

    fn image_format(image: DynamicImage, format: ImageFormat) -> Vec<u8> {
        let mut buf = Vec::new();
        image.write_to(&mut Cursor::new(&mut buf), format).unwrap();
        buf
    }

    #[wasm_bindgen]
    pub fn image_convert_format(bytes: Vec<u8>, format: u32) -> Vec<u8> {
        let image = bytes_to_image(bytes);
        let _format = match format {
            0 => ImageFormat::Png,
            1 => ImageFormat::Jpeg,
            2 => ImageFormat::WebP,
            _ => ImageFormat::Png
        };

        let mut buf = Vec::new();
        image.write_to(&mut Cursor::new(&mut buf), _format).unwrap();
        buf
    }

    #[wasm_bindgen]
    pub fn crop(bytes: Vec<u8>, x: u32, y: u32, width: u32, height: u32) -> Vec<u8> {
        let img = bytes_to_image(bytes);
        let cropped = img.crop_imm(x, y, width, height);
        image_format(cropped, ImageFormat::Png)
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
        image_format(resized, ImageFormat::Png)
    }

    #[wasm_bindgen]
    pub fn blur(bytes: Vec<u8>, sigma: f32) -> Vec<u8> {
        let image = bytes_to_image(bytes);
        image_format(image.blur(sigma), ImageFormat::Png)
    }

    #[wasm_bindgen]
    pub fn huerotate(bytes: Vec<u8>, value: i32) -> Vec<u8> {
        let image = bytes_to_image(bytes);
        image_format(image.huerotate(value), ImageFormat::Png)
    }

    #[wasm_bindgen]
    pub fn rotate90(bytes: Vec<u8>) -> Vec<u8> {
        let image = bytes_to_image(bytes);
        image_format(image.rotate90(), ImageFormat::Png)
    }

    #[wasm_bindgen]
    pub fn rotate180(bytes: Vec<u8>) -> Vec<u8> {
        let image = bytes_to_image(bytes);
        image_format(image.rotate180(), ImageFormat::Png)
    }

    #[wasm_bindgen]
    pub fn rotate270(bytes: Vec<u8>) -> Vec<u8> {
        let image = bytes_to_image(bytes);
        image_format(image.rotate270(), ImageFormat::Png)
    }

    #[wasm_bindgen]
    pub fn flip_vertical(bytes: Vec<u8>) -> Vec<u8> {
        let image = bytes_to_image(bytes);
        image_format(image.flipv(), ImageFormat::Png)
    }

    #[wasm_bindgen]
    pub fn flip_horizontal(bytes: Vec<u8>) -> Vec<u8> {
        let image = bytes_to_image(bytes);
        image_format(image.fliph(), ImageFormat::Png)
    }

    #[wasm_bindgen]
    pub fn brighten(bytes: Vec<u8>, value: i32) -> Vec<u8> {
        let image = bytes_to_image(bytes);
        image_format(image.brighten(value), ImageFormat::Png)
    }

    #[wasm_bindgen]
    pub fn invert(bytes: Vec<u8>) -> Vec<u8> {
        let mut image = bytes_to_image(bytes);
        image.invert();

        image_format(image, ImageFormat::Png)
    }

    #[wasm_bindgen]
    pub fn thumbnail(bytes: Vec<u8>, width: u32, height: u32) -> Vec<u8> {
        let image = bytes_to_image(bytes);

        image_format(image.thumbnail(width, height), ImageFormat::Png)
    }

    #[wasm_bindgen]
    pub fn grayscale(bytes: Vec<u8>) -> Vec<u8> {
        let image = bytes_to_image(bytes);

        image_format(image.grayscale(), ImageFormat::Png)
    }
}
