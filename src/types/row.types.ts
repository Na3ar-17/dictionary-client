export interface IRow {
  id: string
  word?: string
  translation?: string
  transcription?: string
  folderId: string
  bookMarkId: string
  createdAt?: Date
  updatedAt?: Date
}

export type TypeCreateRow = Omit<
  IRow,
  'id' | 'updatedAt' | 'createdAt' | 'word' | 'transcription' | 'translation'
>

export type TypeEditRow = {
  folderId: string
  rowId: string
  word?: string
  transcription?: string
  translation?: string
}
