import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'


const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
    build: {
        outDir: 'dist',
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'imagers',
            // 将添加适当的扩展名后缀
            fileName: 'index',
        },
        rollupOptions: {
            // 确保外部化处理那些
            // 你不想打包进库的依赖
            output: {
                // 在 UMD 构建模式下为这些外部化的依赖
            },
        },
    },
    plugins: [dts()],
})