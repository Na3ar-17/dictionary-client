import { useMutation, useQueryClient } from '@tanstack/react-query'
import { KEYS } from '../../../../api/keys'
import { deleteRow } from '../../../../api/services/row.service'

export const useDeleteRow = () => {
  const queryClient = useQueryClient()

  const { mutate: handleDeleteRow } = useMutation({
    mutationKey: [KEYS.ROW_DELETE],
    mutationFn: ({ folderId, rowId }: { folderId: string; rowId: string }) =>
      deleteRow(folderId, rowId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [KEYS.ROW] })
    },
  })

  return { handleDeleteRow }
}
