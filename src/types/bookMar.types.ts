export interface IBookMark {
  id?: string
  title: string
  createdAt: Date
  updatedAt: Date
}

export type TypeBookMarkAction = Omit<IBookMark, 'createdAt' | 'updatedAt'>
