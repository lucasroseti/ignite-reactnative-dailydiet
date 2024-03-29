import { useNavigation } from '@react-navigation/native'
import { Container, Divide, MealText, Status, TimeText, Title } from './styles'

interface MealCardProps {
  id: string
  name: string
  time: string
  isDiet: boolean
}

export function MealCard({ id, name, time, isDiet }: MealCardProps) {
  const navigation = useNavigation()

  function handleMeal() {
    navigation.navigate('meal', { id })
  }

  return (
    <Container onPress={handleMeal}>
      <Title>
        <TimeText>{time}</TimeText>
        <Divide />
        <MealText>{name}</MealText>
      </Title>

      <Status type={isDiet ? 'SUCCESS' : 'DANGER'} />
    </Container>
  )
}