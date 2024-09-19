import { useQuery } from "@tanstack/react-query"
import queryKey from "./queryKeys"
import mntnApi from "@/api/mntn";

const useGetMountainQuery = () => {
  return useQuery({
    queryKey: queryKey.default.mountains,
    queryFn: mntnApi.getMountains
  })
}

export default useGetMountainQuery;