import { IRow } from '../../interfaces/row.interface'
import axios from '../axios'

export const getRows = async (folderId: string): Promise<IRow[]> => {
  const { data } = await axios.get(`/row/get-all/${folderId}`)
  return data
}
