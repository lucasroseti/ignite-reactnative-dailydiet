import { View } from 'react-native'

import { Header } from '@components/Header'
import { StatisticsTitle } from '@components/StatisticsTitle'

import { Container, Content, StatisticsSection, Title } from './styles'
import { StatisticsCard } from '@components/StatisticsCard'

export function Statistics() {
  return (
    <Container type="PRIMARY">
      <Header />
      
      <StatisticsTitle />

      <Content>
        <Title>General Statistics</Title>

        <StatisticsSection>
          <StatisticsCard number="22" text="best sequence of dishes within the diet" />
          <StatisticsCard number="109" text="registered meals" />

          <View style={{ flexDirection: 'row', gap: 12 }}>
          <StatisticsCard number="99" text="meals within the diet" type="PRIMARY" />
            <StatisticsCard number="10" text="off-diet meals" type="SECONDARY" />
          </View>
        </StatisticsSection>
      </Content>
    </Container>
  )
}