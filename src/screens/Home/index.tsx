import { useState } from 'react'
import { SectionList, View } from 'react-native'

import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { ListEmpty } from '@components/ListEmpty'
import { MealCard } from '@components/MealCard'
import { Percent } from '@components/Percent'

import { Container, Content, DateTitle, Title } from './styles'

export function Home() {
  const [dayList, setDayList] = useState([])

  const isDayListEmpty = dayList.length === 0

  return (
    <Container>
      <Header />

      <Content>
        <SectionList
          sections={dayList}
          keyExtractor={(item) => item}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <MealCard />}
          renderSectionHeader={({ section: { title } }) => (
            <DateTitle>{title}</DateTitle>
          )}
          ListEmptyComponent={() => (
            <View style={{ flex: 1 }}>
              <ListEmpty message="No meals registered" />
            </View>
          )}
          ListHeaderComponent={() => (
            <View style={!isDayListEmpty && { flex: 1 }}>
              <Percent />
              <Title>Meals</Title>
              <Button title="New meal" />
            </View>
          )}
          contentContainerStyle={[
            { paddingBottom: 100 },
            isDayListEmpty && { height: '90%' }
          ]}
        />
      </Content>
    </Container>
  )
}
