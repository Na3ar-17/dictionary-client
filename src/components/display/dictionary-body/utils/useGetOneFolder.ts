import { useQuery } from '@tanstack/react-query'
import { KEYS } from '../../../../api/keys'
import { getOneFolder } from '../../../../api/services/folder.cervice'

export const useGetOneFolder = (folderId: string) => {
  return useQuery({
    queryKey: [KEYS.FOLDER_GET_ONE],
    queryFn: () => getOneFolder(folderId),
  })
}
