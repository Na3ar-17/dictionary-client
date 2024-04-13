import { IBookMark, TypeBookMarkAction } from '../../types/bookMar.types'
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

  async create(dto: TypeBookMarkAction): Promise<IBookMark> {
    const { data } = await axios.post(this.URL + 'create', dto)
    return data
  }

  async update(dto: TypeBookMarkAction): Promise<IBookMark> {
    const { data } = await axios.put(this.URL + `update/${dto.id}`, {
      params: dto,
    })
    return data
  }

  async delete(dto: TypeBookMarkAction) {
    const { data } = await axios.delete(this.URL + `delete/${dto.id}`)
    return data
  }
}

export const bookMarkService = new BookMarkService()
