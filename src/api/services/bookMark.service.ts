import { IBookMark, TypeBookMarkAction } from '../../types/bookMar.types'
import axios from '../axios'

class BookMarkService {
  private URL = 'book-mark'

  async getAll(): Promise<IBookMark[]> {
    const { data } = await axios.get(this.URL)
    return data
  }

  async create(dto: TypeBookMarkAction): Promise<IBookMark> {
    const { data } = await axios.post(this.URL + 'create', { params: dto })
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
