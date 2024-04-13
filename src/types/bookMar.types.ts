export interface IBookMark {
  id?: string
  title: string
  createdAt: string
  updatedAt: Date
}

export type TypeBookMarkAction = Omit<IBookMark, 'createdAt' | 'updatedAt'>
