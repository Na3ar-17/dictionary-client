import { useMutation, useQueryClient } from '@tanstack/react-query'
import { KEYS } from '../../../../api/keys'
import { createFolder } from '../../../../api/services/folder.cervice'
import { IFolderData } from '../../../../interfaces/folder.iterface'

export const useCreateFolder = () => {
  const queruClient = useQueryClient()

  const { mutate: handleCreateFolder } = useMutation({
    mutationKey: [KEYS.FOLDER_CREATE],
    mutationFn: (params: IFolderData[]) => createFolder(params),
    onSuccess: () => {
      queruClient.invalidateQueries({ queryKey: [KEYS.FOLDER] })
    },
  })

  return { handleCreateFolder }
}
