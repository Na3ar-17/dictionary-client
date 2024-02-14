import { useQuery } from '@tanstack/react-query'
import { KEYS } from '../../../../api/keys'
import { getRandomRow } from '../../../../api/services/row.service'

export const useGetRandomRow = (folderId: string) => {
  return useQuery({
    queryKey: [KEYS.ROW_GET_RANDOM],
    queryFn: () => getRandomRow(folderId),
    retryOnMount: true,
  })
}
