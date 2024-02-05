/**
 * 绘制文本，可自动换行
 * @param {*} ctx context
 * @param { String } color 文本颜色
 * @param { String } textAlign 文本水平居中方式
 * @param { Number } font 文字大小
 * @param { String } content 文本内容
 * @param { Number } drawX 开始绘制的x位置
 * @param { Number } drawY 开始绘制的y位置
 * @param { Number } lineHeight 行高
 * @param { Number } lineMaxWidth 行宽，超过此宽度会自动换行
 * @returns { Number } 最后一行文本y位置
 */
export const drawTextWrap = (ctx, color, textAlign, font, content, drawX, drawY, lineHeight, lineMaxWidth) => {
  let drawTxt = ''; // 当前绘制的内容
  let drawLine = 1; // 第几行开始绘制
  let drawIndex = 0; // 当前绘制内容的索引
  ctx.font = `${font}px 微软雅黑`;
  ctx.fillStyle = color;
  ctx.textAlign = textAlign;
  ctx.textBaseline = 'middle';
  // 预测量文本绘制的宽度是否已经超过设定的最大宽度
  if (ctx.measureText(content).width <= lineMaxWidth) {
    ctx.fillText(content, drawX, drawY);
  } else {
    for (let i = 0; i < content.length; i++) {
      drawTxt += content[i];
      if (ctx.measureText(drawTxt).width >= lineMaxWidth) {
        ctx.fillText(content.substring(drawIndex, i + 1), drawX, drawY);
        drawIndex = i + 1;
        drawLine += 1;
        drawY += lineHeight;
        drawTxt = '';
      } else if (i === content.length - 1) {
        ctx.fillText(content.substring(drawIndex), drawX, drawY);
      }
    }
  }
  return drawY;
};

// src - 图片路径，deg旋转角度
export const rotateBase64 = (src, edg) => {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    let imgW; // 图片宽度
    let imgH; // 图片高度
    let size; // canvas初始大小
    if (edg % 90 !== 0) {
      console.error('旋转角度必须是90的倍数!');
    }
    edg < 0 && (edg = (edg % 360) + 360);
    const quadrant = (edg / 90) % 4; // 旋转象限
    const cutCoor = { sx: 0, sy: 0, ex: 0, ey: 0 }; // 裁剪坐标
    const image = new Image();
    image.crossOrigin = 'anonymous';
    image.src = src;
    let newBase64 = '';
    image.onload = function () {
      imgW = image.width;
      imgH = image.height;
      size = imgW > imgH ? imgW : imgH;
      canvas.width = size * 2;
      canvas.height = size * 2;
      switch (quadrant) {
        case 0:
          cutCoor.sx = size;
          cutCoor.sy = size;
          cutCoor.ex = size + imgW;
          cutCoor.ey = size + imgH;
          break;
        case 1:
          cutCoor.sx = size - imgH;
          cutCoor.sy = size;
          cutCoor.ex = size;
          cutCoor.ey = size + imgW;
          break;
        case 2:
          cutCoor.sx = size - imgW;
          cutCoor.sy = size - imgH;
          cutCoor.ex = size;
          cutCoor.ey = size;
          break;
        default:
          cutCoor.sx = size;
          cutCoor.sy = size - imgW;
          cutCoor.ex = size + imgH;
          cutCoor.ey = size + imgW;
          break;
      }
      ctx.translate(size, size);
      ctx.rotate((edg * Math.PI) / 180);
      ctx.drawImage(image, 0, 0);
      const imgData = ctx.getImageData(cutCoor.sx, cutCoor.sy, cutCoor.ex, cutCoor.ey);
      if (quadrant % 2 === 0) {
        canvas.width = imgW;
        canvas.height = imgH;
      } else {
        canvas.width = imgH;
        canvas.height = imgW;
      }
      ctx.putImageData(imgData, 0, 0);
      // 获取旋转后的base64图片
      newBase64 = canvas.toDataURL('image/png');
      resolve(newBase64);
    };
  });
};

/**
 *
 * @param base64
 * @param multiple // 压缩比例
 * @param type // 图片类型
 * @returns
 */
export const compressImg = (base64, multiple, type = 'jpeg') => {
  const length = base64.length / 1024;
  // 压缩方法
  const newImage = new Image();
  let quality = 0.6; // 压缩系数0-1之间
  newImage.src = base64;
  newImage.setAttribute('crossOrigin', 'Anonymous'); // url为外域时需要
  let imgWidth;
  let imgHeight;
  let w;
  return new Promise((resolve, reject) => {
    newImage.onload = function () {
      // 这里面的 this 指向 newImage
      // 通过改变图片宽高来实现压缩
      w = newImage.width * multiple;
      imgWidth = newImage.width;
      imgHeight = newImage.height;
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (Math.max(imgWidth, imgHeight) > w) {
        if (imgWidth > imgHeight) {
          canvas.width = w;
          // 等比例缩小
          canvas.height = w * (imgHeight / imgWidth);
        } else {
          canvas.height = w;
          // 等比例缩小
          canvas.width = w * (imgWidth / imgHeight);
        }
      } else {
        canvas.width = imgWidth;
        canvas.height = imgHeight;
        // quality 设置转换为base64编码后图片的质量，取值范围为0-1  没什么压缩效果
        // 还是得通过设置 canvas 的宽高来压缩
        quality = 0.6;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(newImage, 0, 0, canvas.width, canvas.height);
      const smallBase64 = canvas.toDataURL(`image/${type}`, quality); // 压缩语句
      resolve(smallBase64);
      // 如想确保图片压缩到自己想要的尺寸,如要求在50-150kb之间，请加以下语句，quality初始值根据情况自定
      // while (smallBase64.length / 1024 > 150) {
      // quality -= 0.01;
      // smallBase64 = canvas.toDataURL("image/jpeg", quality);
      // }
      // 防止最后一次压缩低于最低尺寸，只要quality递减合理，无需考虑
      // while (smallBase64.length / 1024 < 50) {
      // quality += 0.001;
      // smallBase64 = canvas.toDataURL("image/jpeg", quality);
      // }
    };
  });
};

export default {};
