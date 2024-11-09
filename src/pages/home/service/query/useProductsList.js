import { useInfiniteQuery } from '@tanstack/react-query';
import { request } from '../../../../config/request';

export const useProductsList = () => {
  return (
    useInfiniteQuery({
      queryKey:['product-list'],
      initialPageParam:1,
      queryFn:({pageParam = 1})=> {
        
        return request.get('/phones',{params:{_page:pageParam,_limit:6}}).then((res)=> res.data)
      },
      getNextPageParam:(lastpage,allpage,lastPageParms)=> {
        let last = allpage.length + 1
        
        return  last < 6 ? last : undefined
      }
    })
  )
}
