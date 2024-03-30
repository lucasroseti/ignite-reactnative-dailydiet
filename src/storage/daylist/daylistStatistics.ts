import { daylistGetAll } from './daylistGetAll'

export async function daylistStatistics() {
  try {
    const statistics = {
      percentage: 0,
      sequence: 0,
      inDiet: 0,
      outDiet: 0,
      total: 0
    }
    
    const storedDayLists = await daylistGetAll()

    storedDayLists.forEach(daylist => {
      daylist.data.reduce(function (acc, meal) {
        if (meal.isDiet) {
          ++acc.inDiet
          ++acc.sequence
        } else {
          ++acc.outDiet
          acc.sequence = 0
        }

        ++acc.total
        return acc
      }, statistics);
    })

    const geralStatistics = statistics.inDiet / statistics.total * 100
    statistics.percentage = geralStatistics ? parseFloat(geralStatistics.toFixed(2)) : 0

    return statistics
  } catch (error) {
    throw error
  }
}