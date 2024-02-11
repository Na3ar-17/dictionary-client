import { useQuery } from '@tanstack/react-query'
import { KEYS } from '../../../../api/keys'
import { getOneRow } from '../../../../api/services/row.service'

export const useGetOneRow = (folderId: string, rowId: string) => {
  return useQuery({
    queryKey: [KEYS.ROW_GET_ONE],
    queryFn: () => getOneRow(folderId, rowId),
  })
}
