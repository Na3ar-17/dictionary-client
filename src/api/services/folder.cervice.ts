import { IFolder, IFolderData } from '../../interfaces/folder.iterface'
import axios from '../axios'

export const getFolders = async (): Promise<IFolder[]> => {
  const { data } = await axios.get('/folder/get-all')
  return data
}

export const getOneFolder = async (folderId: string): Promise<IFolder> => {
  const { data } = await axios.get(`/folder/get-one/${folderId}`)
  return data
}

export const createFolder = async (
  params: IFolderData[]
): Promise<IFolder[]> => {
  const { data } = await axios.post('/folder/create', params)
  return data
}

export const updateFolder = async (
  params: IFolderData[],
  id: string
): Promise<IFolder[]> => {
  const { data } = await axios.put(`/folder/update/${id}`, params)
  return data
}

export const deleteFolder = async (id: string): Promise<IFolder[]> => {
  const { data } = await axios.delete(`/folder/delete/${id}`)
  return data
}
