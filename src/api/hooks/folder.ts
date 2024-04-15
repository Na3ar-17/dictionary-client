import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { KEYS } from '../keys'
import { folderService } from '../services/folder.service'
import { TypeEditFolder } from '../../types/folder.types'
import { toast } from 'sonner'

export const useGetFolders = (bookMarkId: string) => {
  return useQuery({
    queryKey: [KEYS.FOLDER + bookMarkId],
    queryFn: () => folderService.getAll(bookMarkId),
  })
}

export const useGetOneFolder = (id: string, bookMarkId: string) => {
  return useQuery({
    queryKey: [KEYS.FOLDER_GET_ONE],
    queryFn: () => folderService.getOne(id, bookMarkId),
  })
}

export const useDeleteFolder = (id: string, bookMarkId: string) => {
  const queryClient = useQueryClient()
  const { mutate: deleteFolder } = useMutation({
    mutationKey: [KEYS.FOLDER_DELETE],
    mutationFn: () => folderService.delete(id, bookMarkId),
    onSuccess: () => {
      queryClient.invalidateQueries()
      toast.success('Successfuly deleted folder')
    },
  })

  return { deleteFolder }
}

export const useUpdateFolder = (dto: TypeEditFolder, folderId: string) => {
  const queryClient = useQueryClient()

  const { mutate: updateFolder } = useMutation({
    mutationKey: [KEYS.FOLDER_UPDATE],
    mutationFn: () => folderService.update(dto, folderId),
    onSuccess: () => {
      queryClient.invalidateQueries()
      toast.success('Successfuly updated folder')
    },
  })

  return { updateFolder }
}

export const useCreateFolder = (bookMarkId: string) => {
  const queryClient = useQueryClient()

  const { mutate: createFolder } = useMutation({
    mutationKey: [KEYS.FOLDER_CREATE],
    mutationFn: () => folderService.create(bookMarkId),
    onSuccess: () => {
      queryClient.invalidateQueries()
      toast.success('Successfuly created folder')
    },
  })

  return { createFolder }
}
