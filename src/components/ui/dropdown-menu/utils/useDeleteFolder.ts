import { useMutation, useQueryClient } from '@tanstack/react-query'
import { KEYS } from '../../../../api/keys'
import { deleteFolder } from '../../../../api/services/folder.cervice'

export const useDeleteFolder = (id: string) => {
  const queryClient = useQueryClient()

  const { mutate: handleDeleteFolder } = useMutation({
    mutationKey: [KEYS.FOLDER_DELETE],
    mutationFn: () => deleteFolder(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [KEYS.FOLDER] })
    },
  })

  return { handleDeleteFolder }
}
