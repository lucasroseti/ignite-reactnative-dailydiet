import * as Crypto from 'expo-crypto'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { DAY_LIST_COLLECTION } from '@storage/storageConfig'
import { MealStorageDTO } from '@storage/meal/MealStorageDTO'

import { daylistGetAll } from './daylistGetAll'
import { daylistGetByDate } from './daylistGetByDate'
import { DaylistStorageDTO } from './DaylistStorageDTO'

export async function daylistCreate(newMeal: MealStorageDTO) {
  try {
    let daylistNewFormat: DaylistStorageDTO = {
      id: Crypto.randomUUID(),
      title: '',
      data: []
    }

    const storedDaylists = await daylistGetAll()
    const daylistAlreadyExist = await daylistGetByDate(newMeal.date)

    if (daylistAlreadyExist) {
      daylistAlreadyExist.data.push(newMeal)
      daylistNewFormat = daylistAlreadyExist
    } else {
      daylistNewFormat.title = newMeal.date
      daylistNewFormat.data = [newMeal]
    }
    
    const storedDaylistsWithoutSearched = storedDaylists.filter(daylist => daylist.id !== daylistNewFormat.id)
    const storage = JSON.stringify([...storedDaylistsWithoutSearched, daylistNewFormat])
    
    await AsyncStorage.setItem(DAY_LIST_COLLECTION, storage)
  } catch (error) {
    throw error
  }
}