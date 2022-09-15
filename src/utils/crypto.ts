/*
 * @Description:
 * @Autor: kevin.liang
 * @Date: 2022-09-15 14:22:16
 * @LastEditors: kevin.liang
 * @LastEditTime: 2022-09-15 19:05:28
 */
// crypto.js 文件
import CryptoJS from 'crypto-js';
// 秘钥, 建议设置其他的字符, 这里只是为了演示，一般长度是16位
const key = CryptoJS.enc.Latin1.parse('02adc2368daf44c1864b721cc684fb7f');
// 偏移量, 建议设置其他的字符, 这里只是为了演示，一般长度是16位
const iv = CryptoJS.enc.Latin1.parse('37fa77f6a3b0462d');
export default {
  // 加密
  encrypt(source: any) {
    // const srcs = CryptoJS.enc.Utf8.parse(source);
    const content = JSON.stringify(source);
    const encrypted = CryptoJS.AES.encrypt(content, key, {
      iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    return encrypted.ciphertext.toString();
  },
  // 解密
  decrypt(encrypted: string) {
    const decrypted = CryptoJS.AES.decrypt(CryptoJS.format.Hex.parse(encrypted), key, {
      iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
  },
};
