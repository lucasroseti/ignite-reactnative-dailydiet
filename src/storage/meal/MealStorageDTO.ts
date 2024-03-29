import * as Crypto from 'expo-crypto'

export type MealStorageDTO = {
  id: string
  name: string
  description: string
  date: string
  time: string
  isDiet: boolean
}

export const MealDataDTO = {
  id: Crypto.randomUUID(),
  name: '',
  description: '',
  date: '',
  time: '',
  isDiet: false
}