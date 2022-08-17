import { useRouter } from 'vue-router';
import { PAGE_ROUTE_ENUMS } from '@/common/constants';

const router = useRouter();

export default (pageCode: string, query: any) => {
  router.push({
    path: PAGE_ROUTE_ENUMS[pageCode],
    query,
  });
};
