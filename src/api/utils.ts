import dayjs from 'dayjs'

export const dateFormatter = (date: string): string => {
  const formated = dayjs(date).format('DD.MM.YYYY HH:mm').split(' ')

  const currentDate = dayjs(new Date().toISOString())
    .format('DD.MM.YYYY HH:mm')
    .split(' ')

  if (formated[0] === currentDate[0]) {
    return formated[1]
  }

  return formated.join(' ')
}
