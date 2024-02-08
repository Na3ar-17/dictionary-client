import { useQuery } from '@tanstack/react-query'
import { KEYS } from '../keys'
import { getRows } from '../services/row.service'

export const useRow = (folderId: string) => {
  return useQuery({
    queryKey: [KEYS.ROW],
    queryFn: () => getRows(folderId),
  })
}
