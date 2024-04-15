import axios from '../axios'
import { IFolder, TypeEditFolder } from '../../types/folder.types'
import { dateFormatter } from '../utils'

class FolderService {
  private URL = 'folder'

  async getAll(bookMarkId: string): Promise<IFolder[]> {
    const { data } = await axios.get<IFolder[]>(this.URL + `/${bookMarkId}`)

    const formatedData = await data.map((el) => ({
      ...el,
      createdAt: dateFormatter(el.createdAt),
    }))

    return formatedData
  }

  async delete(id: string, bookMarkId: string) {
    await axios.delete(`${this.URL}/delete/${id}/${bookMarkId}`)
  }

  async update(dto: TypeEditFolder, fodlerId: string): Promise<IFolder> {
    const { data } = await axios.put<IFolder>(
      `${this.URL}/update/${fodlerId}`,
      dto
    )
    return data
  }
  async create(bookMarkId: string): Promise<IFolder> {
    const { data } = await axios.post(`${this.URL}/create/${bookMarkId}`)

    return data
  }

  async getOne(id: string, bookMarkId: string): Promise<IFolder> {
    const { data } = await axios.get<IFolder>(
      `${this.URL}/get-one/${id}/${bookMarkId}`
    )
    return data
  }
}

export const folderService = new FolderService()
