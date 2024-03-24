import { Container, StatisticsTypeStyleProps, SubTitle, Title } from './styles'

interface StatisticsCardProps {
  number: string
  text: string
  type?: StatisticsTypeStyleProps
}

export function StatisticsCard({ number, text, type = 'DEFAULT'}: StatisticsCardProps) {
  return (
    <Container type={type}>
      <Title>{number}</Title>
      <SubTitle>{text}</SubTitle>
    </Container>
  )
}