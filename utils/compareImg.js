import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';


export const adjustCanvas = (image, width, height) => {
    if (image.width === width && image.height === height) {
        return image;
    }
    const imageAdjustedCanvas = new PNG({ width, height, inputHasAlpha: true });
    PNG.bitblt(image, imageAdjustedCanvas, 0, 0, image.width, image.height, 0, 0);
    return imageAdjustedCanvas;
};

// 比较两张 Base64 编码的图片并返回差异图片的 Base64 编码
export function compareBase64Images(expectedBase64, actualBase64) {
    try {
        // 解码 Base64 数据
        const expectedImageBuffer = Buffer.from(expectedBase64, 'base64');
        const actualImageBuffer = Buffer.from(actualBase64, 'base64');

        // 解码图片
        const expectedImage = PNG.sync.read(expectedImageBuffer);
        const actualImage = PNG.sync.read(actualImageBuffer);

        const diffImage = new PNG({
            width: Math.max(actualImage.width, expectedImage.width),
            height: Math.max(actualImage.height, expectedImage.height)
        });

        const imgActualFullCanvas = adjustCanvas(actualImage, diffImage.width, diffImage.height);
        const imgExpectedFullCanvas = adjustCanvas(expectedImage, diffImage.width, diffImage.height);

        const mismatchedPixels = pixelmatch(
            imgActualFullCanvas.data,
            imgExpectedFullCanvas.data,
            diffImage.data,
            diffImage.width,
            diffImage.height,
            {
                alpha: 1,
                threshold: 0 // pixelmatch threshold option
            }
        );
        const percentage = mismatchedPixels / (diffImage.width * diffImage.height);

        if (percentage > 0) {
            const diffImageBuffer = PNG.sync.write(diffImage);
            return diffImageBuffer.toString('base64');
        } else {
            return '';
        }
    } catch (error) {
        console.error('发生错误:', error);
        return '';
    }
}

