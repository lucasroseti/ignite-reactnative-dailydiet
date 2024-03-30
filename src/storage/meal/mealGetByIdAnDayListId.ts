import { daylistGetById } from "@storage/daylist/daylistGetById"
import { AppError } from "@utils/AppError"

import { MealStorageDTO } from "./MealStorageDTO"

export async function mealGetByIdAnDayListId(id: string, daylistId: string) {
  try {
    const storedDayList = await daylistGetById(daylistId)

    if (storedDayList === undefined) {
      throw new AppError('Unable to find daylist.')
    }

    const mealSearched = storedDayList.data.find(meal => meal.id === id)

    if (mealSearched === undefined) {
      throw new AppError('Unable to find meal.')
    }

    const meal: MealStorageDTO = mealSearched

    return meal
  } catch (error) {
    throw error
  }
}