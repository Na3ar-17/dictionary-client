export interface IBookMark {
  id?: string
  title: string
  createdAt: string
  updatedAt: Date
}

export type TypeBookMarkCreate = Omit<
  IBookMark,
  'createdAt' | 'updatedAt' | 'id'
>
export type TypeBookMarkUpdate = Omit<
  IBookMark,
  'createdAt' | 'updatedAt' | 'id'
>
