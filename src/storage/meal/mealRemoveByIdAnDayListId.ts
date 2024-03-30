import AsyncStorage from "@react-native-async-storage/async-storage"

import { DAY_LIST_COLLECTION } from "@storage/storageConfig"
import { daylistGetById } from "@storage/daylist/daylistGetById"
import { daylistGetAll } from "@storage/daylist/daylistGetAll"
import { AppError } from "@utils/AppError"

export async function mealRemoveByIdAnDayListId(id: string, daylistId: string) {
  try {
    let newDaylistData = []

    const storedDaylists = await daylistGetAll()
    const storedDaylist = await daylistGetById(daylistId)

    if (storedDaylist === undefined) {
      throw new AppError('Unable to find daylist.')
    }

    const storedDaylistsWithoutSearched = storedDaylists.filter(daylist => daylist.id !== storedDaylist.id)

    const mealFiltered = storedDaylist.data.filter(meal => meal.id !== id)

    if (mealFiltered.length > 0) {
      const filtered = { ...storedDaylist, data: mealFiltered }
      newDaylistData = [...storedDaylistsWithoutSearched, filtered]
    } else {
      newDaylistData = [...storedDaylistsWithoutSearched]
    }

    const storage = JSON.stringify(newDaylistData)
    await AsyncStorage.setItem(DAY_LIST_COLLECTION, storage)
  } catch (error) {
    throw error
  }
}