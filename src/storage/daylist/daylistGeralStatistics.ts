import { daylistGetAll } from './daylistGetAll'

export async function daylistGeralStatistics() {
  try {
    const storedDayLists = await daylistGetAll()

    const statistics = {
      inDiet: 0,
      total: 0
    }

    storedDayLists.forEach(daylist => {
      daylist.data.reduce(function (acc, meal) {
        if (meal.isDiet) ++acc.inDiet 
        ++acc.total
        return acc
      }, statistics);
    })

    const geralStatistics = statistics.inDiet / statistics.total * 100
    
    return geralStatistics ? parseFloat(geralStatistics.toFixed(2)) : 0
  } catch (error) {
    throw error
  }
}