import { IStatisticsResponse } from '../../interfaces/statistics.interface'
import axios from '../axios'

export const getOneStatistics = async (
  folderId: string
): Promise<IStatisticsResponse[]> => {
  const { data } = await axios.get(`statistics/get-one/${folderId}`)

  return data
}
