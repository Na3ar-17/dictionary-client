import { IRow, IRowData } from '../../interfaces/row.interface'
import axios from '../axios'

export const getRows = async (folderId: string): Promise<IRow[]> => {
  const { data } = await axios.get(`/row/get-all/${folderId}`)
  return data
}

export const getOneRow = async (
  folderId: string,
  rowId: string
): Promise<IRow> => {
  const { data } = await axios.get(`/row/get-one/${folderId}/${rowId}`)
  return data
}

export const createRow = async (params: IRowData): Promise<IRow[]> => {
  const { data } = await axios.post('/row/create', params)
  return data
}

export const deleteRow = async (
  folderId: string,
  rowId: string
): Promise<IRow[]> => {
  const { data } = await axios.delete(`/row/delete/${folderId}/${rowId}`)
  return data
}

export const updateRow = async (params: IRowData): Promise<IRow[]> => {
  const { data } = await axios.put('/row/update', params)
  return data
}
