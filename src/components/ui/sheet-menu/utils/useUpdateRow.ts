import { useMutation, useQueryClient } from '@tanstack/react-query'
import { KEYS } from '../../../../api/keys'
import { updateRow } from '../../../../api/services/row.service'
import { IRowData } from '../../../../interfaces/row.interface'

export const useUpdateRow = () => {
  const queryClient = useQueryClient()

  const { mutate: handleUpdateRow } = useMutation({
    mutationKey: [KEYS.ROW_UPDATE],
    mutationFn: (params: IRowData) => updateRow(params),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [KEYS.ROW] })
    },
  })

  return { handleUpdateRow }
}
