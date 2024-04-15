import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { KEYS } from '../keys'
import { statisticsService } from '../services/statistics.service'
import { toast } from 'sonner'

export const useEndSession = () => {
  const queryClient = useQueryClient()
  const { mutate: endSession } = useMutation({
    mutationKey: [KEYS.SESSION_END],
    mutationFn: (fodlerId: string) => statisticsService.endSession(fodlerId),
    onSuccess: () => {
      queryClient.invalidateQueries()
      toast.success('Successfuly ended session')
    },
  })

  return { endSession }
}

export const useGetStatistics = (fodlerId: string) => {
  return useQuery({
    queryKey: [KEYS.STATISTICS],
    queryFn: () => statisticsService.getOne(fodlerId),
  })
}
