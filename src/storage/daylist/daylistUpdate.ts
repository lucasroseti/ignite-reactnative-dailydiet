import AsyncStorage from '@react-native-async-storage/async-storage'

import { DAY_LIST_COLLECTION } from '@storage/storageConfig'
import { MealStorageDTO } from '@storage/meal/MealStorageDTO'
import { AppError } from '@utils/AppError'

import { daylistGetAll } from './daylistGetAll'
import { daylistGetById } from './daylistGetById'

export async function daylistUpdate(daylistId: string, editMeal: MealStorageDTO) {
  try {
    let newDaylistData = []

    const storedDaylists = await daylistGetAll()
    const storedDaylist = await daylistGetById(daylistId)

    if (storedDaylist === undefined) {
      throw new AppError('Unable to find daylist.')
    }

    const storedDaylistsWithoutSearched = storedDaylists.filter(daylist => daylist.id !== daylistId)

    const mealFiltered = storedDaylist.data.filter(meal => meal.id !== editMeal.id)

    if (mealFiltered.length > 0) {
      const filtered = { ...storedDaylist, data: [ ...mealFiltered, editMeal ] }
      newDaylistData = [...storedDaylistsWithoutSearched, filtered]
    } else {
      const filtered = { ...storedDaylist, data: [ editMeal ] }
      newDaylistData = [...storedDaylistsWithoutSearched, filtered]
    }

    const storage = JSON.stringify(newDaylistData)
    await AsyncStorage.setItem(DAY_LIST_COLLECTION, storage)
  } catch (error) {
    throw error
  }
}