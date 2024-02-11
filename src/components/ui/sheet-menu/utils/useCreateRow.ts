import { useMutation, useQueryClient } from '@tanstack/react-query'
import { KEYS } from '../../../../api/keys'
import { createRow } from '../../../../api/services/row.service'
import { IRowData } from '../../../../interfaces/row.interface'

export const useCreateRow = () => {
  const queryClient = useQueryClient()

  const { mutate: handleCreateRow } = useMutation({
    mutationKey: [KEYS.ROW_CREATE],
    mutationFn: (params: IRowData) => createRow(params),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [KEYS.ROW] })
    },
  })

  return { handleCreateRow }
}
