import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'
import { KEYS } from '../keys'
import { rowService } from '../services/row.service'
import { TypeCreateRow, TypeEditRow } from '../../types/row.types'

export const useGetRows = (folderId: string) => {
  return useQuery({
    queryKey: [KEYS.ROW],
    queryFn: () => rowService.getAll(folderId),
  })
}

export const useCreateRow = (folderId: string, bookMarkId: string) => {
  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationKey: [KEYS.ROW_CREATE],
    mutationFn: () => rowService.create(folderId, bookMarkId),
    onSuccess: () => {
      queryClient.invalidateQueries()
    },
  })

  return { mutate }
}

export const useDeleteRow = (
  folderId: string,
  rowId: string,
  bookMarkId: string
) => {
  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationKey: [KEYS.ROW_DELETE],
    mutationFn: () => rowService.delete(folderId, rowId, bookMarkId),
    onSuccess: () => {
      queryClient.invalidateQueries()
    },
  })

  return { mutate }
}

export const useUpdateRow = () => {
  const queryClient = useQueryClient()

  const { mutate } = useMutation({
    mutationKey: [KEYS.ROW_UPDATE],
    mutationFn: (dto: TypeEditRow) => rowService.update(dto),
    onSuccess: () => {
      queryClient.invalidateQueries()
    },
  })

  return { mutate }
}
