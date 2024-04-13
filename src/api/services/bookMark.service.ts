import {
  IBookMark,
  TypeBookMarkCreate,
  TypeBookMarkUpdate,
} from '../../types/bookMar.types'
import axios from '../axios'
import { dateFormatter } from '../utils'

class BookMarkService {
  private URL = 'book-mark'

  async getAll(): Promise<IBookMark[]> {
    const { data } = await axios.get<IBookMark[]>(this.URL)

    const formattedData = data.map((bookmark) => ({
      ...bookmark,
      createdAt: dateFormatter(bookmark.createdAt),
    }))

    return formattedData
  }

  async create(): Promise<IBookMark> {
    const { data } = await axios.post(`${this.URL}/create`)
    return data
  }

  async update(dto: TypeBookMarkUpdate, id: string): Promise<IBookMark> {
    const { data } = await axios.put(`${this.URL}/update/${id}`, dto)
    return data
  }

  async delete(id: string) {
    const { data } = await axios.delete(`${this.URL}/delete/${id}`)
    return data
  }
}

export const bookMarkService = new BookMarkService()
