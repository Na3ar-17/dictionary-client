import { useQuery } from '@tanstack/react-query'
import { KEYS } from '../keys'
import { getFolders } from '../services/folder.cervice'

export const useFolders = () => {
  return useQuery({
    queryKey: [KEYS.FOLDER],
    queryFn: () => getFolders(),
  })
}
