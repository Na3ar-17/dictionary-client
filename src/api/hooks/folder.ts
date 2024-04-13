import { useQuery } from '@tanstack/react-query'
import { KEYS } from '../keys'
import { folderService } from '../services/folder.service'

export const useGetFolders = (bookMarkId: string) => {
  return useQuery({
    queryKey: [KEYS.FOLDER + bookMarkId],
    queryFn: () => folderService.getAll(bookMarkId),
  })
}
