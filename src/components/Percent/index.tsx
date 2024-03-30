import { useCallback, useState } from 'react'
import { Alert } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'

import { daylistGeralStatistics } from '@storage/daylist/daylistGeralStatistics'

import { StatisticsTitle } from '@components/StatisticsTitle'
import { Container, OpenIcon, OpenSection } from './styles'
import { Loading } from '@components/Loading'

export function Percent() {
  const [isLoading, setIsLoading] = useState(true)
  const [geralStatistics, setGeralStatistics] = useState(0)
  const navigation = useNavigation()

  const isGeralStatisticsGreaterOrEqualThanSixty = geralStatistics >= 60

  async function fetchGeralStatistics() {
    try {
      setIsLoading(true)

      const data = await daylistGeralStatistics()
      setGeralStatistics(data)
    } catch (error) {
      Alert.alert('Meals', 'Unable to load geral statistics')
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  function handleStatistics() {
    navigation.navigate('statistics')
  }
  
  useFocusEffect(useCallback(() => {
    fetchGeralStatistics()
  }, []))

  return (
    <Container type={isGeralStatisticsGreaterOrEqualThanSixty} onPress={handleStatistics}>
      {isLoading ? <Loading /> : (
        <>
          <OpenSection>
            <OpenIcon />
          </OpenSection>
      
          <StatisticsTitle percent={geralStatistics} />
        </>
      )}
    </Container>
  )
}