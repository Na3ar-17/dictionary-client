export interface IStatistics {
  folderId: string
  sessions: number
  createdAt: Date
  updatedAt: Date
  presentOfCorrectUnswers: number
  lastSession: Date
  createdRows: number
  deletedRows: number
  rowsCount: number
  timeToNextSession: Date
  duration: number
}
