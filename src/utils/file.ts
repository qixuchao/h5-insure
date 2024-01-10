// eslint-disable-next-line
import { compressImg } from '@/components/ProScribing/utils';
export const file2Base64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      compressImg(reader.result, 0.5, 'jpeg').then((result: string) => resolve(result));
    };
    reader.onerror = (err) => {
      reject(err);
    };
  });
};

export default {};
