import { useCallback, useState } from 'react'
import { Alert, View } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'

import { daylistStatistics } from '@storage/daylist/daylistStatistics'

import { Header } from '@components/Header'
import { Loading } from '@components/Loading'
import { StatisticsCard } from '@components/StatisticsCard'
import { StatisticsTitle } from '@components/StatisticsTitle'

import { Container, Content, StatisticsSection, Title } from './styles'

interface StatisticsData {
  percentage: number
  sequence: number
  inDiet: number
  outDiet: number
  total: number
}

export function Statistics() {
  const [isLoading, setIsLoading] = useState(true)
  const [statistics, setStatistics] = useState<StatisticsData>({
    percentage: 0,
    sequence: 0,
    inDiet: 0,
    outDiet: 0,
    total: 0
  })

  const isStatisticsGreaterOrEqualThanSixty = statistics.percentage >= 60

  async function fetchGeralStatistics() {
    try {
      setIsLoading(true)

      const data = await daylistStatistics()
      setStatistics(data)
    } catch (error) {
      Alert.alert('Meals', 'Unable to load statistics')
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }
  
  useFocusEffect(useCallback(() => {
    fetchGeralStatistics()
  }, []))

  return (
    <Container type={isStatisticsGreaterOrEqualThanSixty ? 'PRIMARY' : 'SECONDARY'}>
      {isLoading ? <Loading /> : (
        <>
          <Header />
          
          <StatisticsTitle percent={statistics.percentage} />

          <Content>
            <Title>General Statistics</Title>

            <StatisticsSection>
              <StatisticsCard number={statistics.sequence} text="best sequence of dishes within the diet" />
              <StatisticsCard number={statistics.total} text="registered meals" />

              <View style={{ flexDirection: 'row', gap: 12 }}>
                <StatisticsCard number={statistics.inDiet} text="meals within the diet" type="PRIMARY" />
                <StatisticsCard number={statistics.outDiet} text="off-diet meals" type="SECONDARY" />
              </View>
            </StatisticsSection>
          </Content>
        </>
      )}
    </Container>
  )
}