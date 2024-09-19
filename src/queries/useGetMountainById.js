import { useQuery } from "@tanstack/react-query"
import queryKey from "./queryKeys"
import mntnApi from "@/api/mntn"

const useGetMountainById = (mntnId, options) => {
  return useQuery({
    queryKey: () => queryKey.default.mountain(mntnId),
    queryFn: () => mntnApi.getMountainById(mntnId),
    ...options,

  })
}

export default useGetMountainById;