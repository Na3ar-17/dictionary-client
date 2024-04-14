export interface INotification {
  id: string
  message: string
  location: string
  createdAt: string
  updatedAt: Date
}

export type TypeCreateNotification = Omit<
  INotification,
  'id' | 'createdAt' | 'updatedAt'
>
