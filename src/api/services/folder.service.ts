import axios from '../axios'
import { IFolder } from '../../types/folder.types'
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
}

export const folderService = new FolderService()
