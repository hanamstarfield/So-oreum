import { useQuery } from "@tanstack/react-query"
import queryKey from "./queryKeys"
import mntnApi from "@/api/mntn";

const useGetMountainQuery = () => {
  console.log('useGetMountainQuery')
  console.log('queryKey.default.mountains', queryKey.default.mountains)
  return useQuery({
    queryKey: queryKey.default.mountains,
    queryFn: mntnApi.getMountains
  })
}

export default useGetMountainQuery;