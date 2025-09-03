#[cfg(test)]
mod test {
    use std::fs;
    use crate::image_process::image_process;

    #[test]
    pub fn test_crop() {
        let bytes = fs::read("./packages/docs/src/bg.png").unwrap();

        let image = image_process::bytes_to_image(
            image_process::crop(bytes, 1000, 1000, 100, 100)
        );

        image.save("./output/corp_image.png").expect("Failed to save output.png");
    }
}
