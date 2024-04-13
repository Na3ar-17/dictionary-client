import axios from '../axios'
import { IRow, TypeCreateRow, TypeEditRow } from '../../types/row.types'

class RowService {
  private URL = 'row'

  async getAll(folderId: string): Promise<IRow[]> {
    const { data } = await axios.get<IRow[]>(`${this.URL}/get-all/${folderId}`)
    return data
  }

  async create(folderId: string, bookMarkId: string): Promise<IRow> {
    const { data } = await axios.post<IRow>(`${this.URL}/create`, {
      folderId,
      bookMarkId,
    })
    return data
  }
  async delete(folderId: string, bookMarkId: string, rowId: string) {
    const { data } = await axios.delete(
      `${this.URL}/delete-one/${folderId}/${rowId}/${bookMarkId}`
    )
  }
  async update(dto: TypeEditRow): Promise<IRow> {
    const { data } = await axios.put<IRow>(`${this.URL}/update`, dto)

    return data
  }
}

export const rowService = new RowService()
