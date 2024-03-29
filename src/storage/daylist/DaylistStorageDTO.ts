import { MealStorageDTO } from "@storage/meal/MealStorageDTO"

export type DaylistStorageDTO = {
  id: string
  title: string
  data: MealStorageDTO[]
}
