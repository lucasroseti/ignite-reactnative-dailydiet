import { useNavigation } from '@react-navigation/native'

import { StatisticsTitle } from '@components/StatisticsTitle'
import { Container, OpenIcon, OpenSection } from './styles'

export function Percent() {
  const navigation = useNavigation()

  function handleStatistics() {
    navigation.navigate('statistics')
  }

  return (
    <Container onPress={handleStatistics}>
      <OpenSection>
        <OpenIcon />
      </OpenSection>
  
      <StatisticsTitle />
    </Container>
  )
}