import { useQuery } from '@tanstack/react-query'
import { KEYS } from '../keys'
import { bookMarkService } from '../services/bookMark.service'

export const useGetBookMarks = () => {
  return useQuery({
    queryKey: [KEYS.BOOK_MARK],
    queryFn: () => bookMarkService.getAll(),
  })
}
