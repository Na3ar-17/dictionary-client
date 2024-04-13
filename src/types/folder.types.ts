export interface IFolder {
  id: string
  title: string
  itemsCount: number
  bookMarkId: string
  createdAt: string
  updatedAt: Date
}

export type TypeEditFolder = Omit<
  IFolder,
  'itemsCount' | 'slug' | 'createdAt' | 'updatedAt' | 'id'
>
