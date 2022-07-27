import request from '@/api/request';

export const getOrderList = () => {
  return request.post('/api/app/order/v1/pageQuery', {
    condition: { orderTopStatus: '-1' },
  });
};

export const getOrderDetail = (id: string) => {
  return request.post('/api/app/order/v1/detail', { id });
};
