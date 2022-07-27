// eslint-disable-next-line
export const formatRule = (type: string, label: string) => {
  switch (type) {
    case 'phone':
      return {
        pattern: /^(?:(?:\+|00)86)?1\d{10}$/,
        message: '请输入正确的手机号',
      };
    default:
      return {};
  }
};
