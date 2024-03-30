import { Container, SubTitle, Title } from './styles'

interface StatisticsTitleProps {
  percent: number
}

export function StatisticsTitle({ percent }: StatisticsTitleProps) {
  return (
    <Container>
      <Title>{percent}%</Title>
      <SubTitle>of meals within the diet</SubTitle>
    </Container>
  )
}