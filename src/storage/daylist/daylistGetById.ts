import { daylistGetAll } from './daylistGetAll'

export async function daylistGetById(id: string) {
  try {
    const storedDayLists = await daylistGetAll()

    const dayList = storedDayLists.find(daylist => daylist.id === id)

    return dayList
  } catch (error) {
    throw error
  }
}