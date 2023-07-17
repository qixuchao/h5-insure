const calcCanvasContainer = (font, content, drawX, drawY, lineHeight) => {};

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

export default {};
