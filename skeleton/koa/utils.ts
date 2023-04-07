const fs = require('fs-extra');

const filename = '../../skeleton/content.json';

async function saveSkeletonContent2(name, content, pathname) {
  await fs.ensureFile(filename);
  let file;
  try {
    file = await fs.readJson(filename);
  } catch (e) {
    file = {};
  }
  console.log(file, ' console.log(file);');
  let temp = content
    .replace(/<!--v-if-->/gim, '')
    .replace(/data-skeleton-.*?=.*?\s/gim, '') // 清空骨架屏标签
    .replace(/data-v-.*?=""/gim, ''); // 清空scopeid

  temp = `<div class="${name.toLowerCase()}">${temp}</div>`; // 样式类包裹，不再依赖scopeid对应的样式

  file[name] = {
    content: temp,
    pathname,
  };

  await fs.writeJson(filename, file);
}

module.exports = {
  saveSkeletonContent: saveSkeletonContent2,
};
