/* eslint-disable import/prefer-default-export */
/* eslint-disable no-useless-escape */
export const urlDelP = (url, name) => {
  // console.log(url, name);
  const urlArr = url.split('?');
  if (urlArr.length > 1 && urlArr[1].indexOf(name) > -1) {
    const query = urlArr[1];
    const obj = {};
    const arr = query.split('&');
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].split('=');
      // eslint-disable-next-line prefer-destructuring
      obj[arr[i][0]] = arr[i][1];
    }
    delete obj[name];
    let urlte;
    if (Object.keys(obj).length === 0) {
      // eslint-disable-next-line prefer-destructuring
      urlte = urlArr[0];
    } else {
      urlte = `${urlArr[0]}?${JSON.stringify(obj)
        .replace(/[\"\{\}]/g, '')
        .replace(/\:/g, '=')
        .replace(/\,/g, '&')}`;
    }
    return urlte;
  }
  return url;
};
