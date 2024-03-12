import { useQuery } from '@tanstack/react-query'
import { KEYS } from '../../../../api/keys'
import { getOneStatistics } from '../../../../api/services/statistics.service'

export const useGetOneStatistics = (folderId: string) => {
  return useQuery({
    queryKey: [KEYS.STATISTICS],
    queryFn: () => getOneStatistics(folderId),
  })
}
