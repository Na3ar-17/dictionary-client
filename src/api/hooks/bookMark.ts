import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { KEYS } from '../keys'
import { bookMarkService } from '../services/bookMark.service'
import {
  TypeBookMarkCreate,
  TypeBookMarkUpdate,
} from '../../types/bookMar.types'
import { toast } from 'sonner'

export const useGetBookMarks = () => {
  return useQuery({
    queryKey: [KEYS.BOOK_MARK],
    queryFn: () => bookMarkService.getAll(),
  })
}

export const useCreateBookMark = () => {
  const queryClient = useQueryClient()

  const { mutate: createBookMark } = useMutation({
    mutationKey: [KEYS.BOOK_MARK_CREATE],
    mutationFn: () => bookMarkService.create(),
    onSuccess: () => {
      queryClient.invalidateQueries()
      toast.success('Successfuly created book mark')
    },
  })

  return { createBookMark }
}

export const useDeleteBookMark = (id: string) => {
  const queryClient = useQueryClient()

  const { mutate: deleteBookMark } = useMutation({
    mutationKey: [KEYS.BOOK_MARK_DELETE + id],
    mutationFn: () => bookMarkService.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries()
      toast.success('Successfuly deleted book mark')
    },
  })

  return { deleteBookMark }
}

export const useBookMarkUpdate = (id: string) => {
  const queryClient = useQueryClient()

  const { mutate: updateBookMark } = useMutation({
    mutationKey: [KEYS.BOOK_MARK_UPDATE],
    mutationFn: (dto: TypeBookMarkUpdate) => bookMarkService.update(dto, id),
    onSuccess: () => {
      queryClient.invalidateQueries()
      toast.success('Successfuly updated book mark')
    },
  })
  return { updateBookMark }
}
