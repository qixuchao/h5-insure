// eslint-disable-next-line
export const file2Base64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      resolve(`${reader.result}`);
    };
    reader.onerror = (err) => {
      reject(err);
    };
  });
};
