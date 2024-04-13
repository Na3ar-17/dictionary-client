import dayjs from 'dayjs'

export const dateFormatter = (date: string): string => {
  return dayjs(date).format('DD.MM.YYYY HH:mm')
}
