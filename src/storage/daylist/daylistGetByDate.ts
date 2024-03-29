import { daylistGetAll } from './daylistGetAll'

export async function daylistGetByDate(date: string) {
  try {
    const storedDayLists = await daylistGetAll()

    const dayListByDate = storedDayLists.find(daylist => daylist.title === date)

    return dayListByDate
  } catch (error) {
    throw error
  }
}