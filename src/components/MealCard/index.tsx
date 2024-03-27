import { useNavigation } from '@react-navigation/native'
import { Container, Divide, MealText, Status, TimeText, Title } from './styles'

export function MealCard() {
  const navigation = useNavigation()

  function handleMeal() {
    navigation.navigate('meal', { id: '1' })
  }

  return (
    <Container onPress={handleMeal}>
      <Title>
        <TimeText>20:00</TimeText>
        <Divide />
        <MealText>X-tudo</MealText>
      </Title>

      <Status type="SUCCESS" />
    </Container>
  )
}