import request from '@/api/request';

const prefix = '/activity';

export const checkPermission = () => {
  return request({
    url: `${prefix}/v1/assignedCustomer/checkPermission`,
    method: 'GET',
  });
};
export const queryClients = (data = {}) => {
  return request({
    url: `${prefix}/v1/assignedCustomer/queryClients`,
    method: 'POST',
    data,
  });
};
export const applyForClients = () => {
  return request({
    url: `${prefix}/v1/assignedCustomer/applyForClients`,
    method: 'GET',
  });
};
