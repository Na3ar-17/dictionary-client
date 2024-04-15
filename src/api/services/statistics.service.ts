import axios from '../axios'
import { IStatistics } from '../../types/statistics.types'

class StatisticsService {
  private URL = 'statistics'

  async endSession(fodlerId: string): Promise<IStatistics> {
    const { data } = await axios.patch<IStatistics>(
      `${this.URL}/end-session/${fodlerId}`
    )
    return data
  }

  async getOne(fodlerId: string): Promise<IStatistics> {
    const { data } = await axios.get<IStatistics>(
      `${this.URL}/get-one/${fodlerId}`
    )
    return data
  }
}

export const statisticsService = new StatisticsService()
