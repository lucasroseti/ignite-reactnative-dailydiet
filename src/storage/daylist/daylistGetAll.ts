import AsyncStorage from '@react-native-async-storage/async-storage'

import { DAY_LIST_COLLECTION } from '@storage/storageConfig'
import { DaylistStorageDTO } from './DaylistStorageDTO'

export async function daylistGetAll() {
  try {
    const storage = await AsyncStorage.getItem(DAY_LIST_COLLECTION)

    const daylist: DaylistStorageDTO[] = storage ? JSON.parse(storage) : []

    return daylist
  } catch (error) {
    throw error
  }
}