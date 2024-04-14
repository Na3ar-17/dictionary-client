import {
  INotification,
  TypeCreateNotification,
} from '../../types/notification.types'
import axios from '../axios'

class NotificationService {
  private URL = 'notifications'

  async getAll(): Promise<INotification[]> {
    const { data } = await axios.get<INotification[]>(this.URL)
    return data
  }

  async create(dto: TypeCreateNotification): Promise<INotification> {
    const { data } = await axios.post<INotification>(`${this.URL}/create`, dto)

    return data
  }
  async delete(id: string) {
    const { data } = await axios.delete(`${this.URL}/delete/${id}`)
    return data
  }
}

export const notificationService = new NotificationService()
