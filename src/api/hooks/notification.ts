import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { KEYS } from '../keys'
import { notificationService } from '../services/notification.service'
import { TypeCreateNotification } from '../../types/notification.types'

export const useGetNotifications = () => {
  return useQuery({
    queryKey: [KEYS.NOTIFICATION],
    queryFn: () => notificationService.getAll(),
  })
}

export const useCreateNotification = () => {
  const queryClient = useQueryClient()

  const { mutate: createNotification } = useMutation({
    mutationKey: [KEYS.NOTIFICATION_CREATE],
    mutationFn: (dto: TypeCreateNotification) =>
      notificationService.create(dto),
    onSuccess: () => {
      queryClient.invalidateQueries()
    },
  })

  return { createNotification }
}
export const useDeleteNotification = () => {
  const queryClient = useQueryClient()

  const { mutate: deleteNotification } = useMutation({
    mutationKey: [KEYS.NOTIFICATION_DELETE],
    mutationFn: (id: string) => notificationService.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries()
    },
  })

  return { deleteNotification }
}
