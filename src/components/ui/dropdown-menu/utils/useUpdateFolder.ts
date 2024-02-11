import { useMutation, useQueryClient } from '@tanstack/react-query'
import { KEYS } from '../../../../api/keys'
import { updateFolder } from '../../../../api/services/folder.cervice'
import { IFolderData } from '../../../../interfaces/folder.iterface'

export const useUpdateFolder = (id: string) => {
  const queryClient = useQueryClient()

  const { mutate: handleUpdateFolder } = useMutation({
    mutationKey: [KEYS.FOLDER_UPDATE],
    mutationFn: (params: IFolderData[]) => updateFolder(params, id.toString()),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [KEYS.FOLDER] })
    },
  })

  return { handleUpdateFolder }
}
