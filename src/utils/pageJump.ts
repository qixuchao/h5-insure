import router from '@/router';
import { PAGE_ROUTE_ENUMS } from '@/common/constants';

export default (pageCode: string, query: any) => {
  console.log('🚀 ~ pageCode', PAGE_ROUTE_ENUMS[pageCode]);
  router.push({
    path: PAGE_ROUTE_ENUMS[pageCode],
    query,
  });
};
