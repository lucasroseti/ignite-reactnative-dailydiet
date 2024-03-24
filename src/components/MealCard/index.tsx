import { Container, Divide, MealText, Status, TimeText, Title } from './styles'

export function MealCard() {
  return (
    <Container>
      <Title>
        <TimeText>20:00</TimeText>
        <Divide />
        <MealText>X-tudo</MealText>
      </Title>

      <Status type="SUCCESS" />
    </Container>
  )
}