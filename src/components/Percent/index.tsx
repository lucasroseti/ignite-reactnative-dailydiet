import { StatisticsTitle } from '@components/StatisticsTitle'
import { Container, OpenIcon, OpenSection } from './styles'

export function Percent() {
  return (
    <Container>
      <OpenSection>
        <OpenIcon />
      </OpenSection>
  
      <StatisticsTitle />
    </Container>
  )
}