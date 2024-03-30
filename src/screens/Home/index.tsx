import { useCallback, useState } from 'react'
import { Alert, SectionList, View } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'

import { Button } from '@components/Button'
import { HeaderUser } from '@components/HeaderUser'
import { ListEmpty } from '@components/ListEmpty'
import { Loading } from '@components/Loading'
import { MealCard } from '@components/MealCard'
import { Percent } from '@components/Percent'

import { DaylistStorageDTO } from '@storage/daylist/DaylistStorageDTO'
import { daylistGetAll } from '@storage/daylist/daylistGetAll'

import { Container, Content, DateTitle, Title } from './styles'

export function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [dayList, setDayList] = useState<DaylistStorageDTO[]>([])

  const navigation = useNavigation()

  const isDayListEmpty = dayList.length === 0

  async function fetchMeals() {
    try {
      setIsLoading(true)

      const data = await daylistGetAll()
      setDayList(data)
    } catch (error) {
      Alert.alert('Meals', 'Unable to load meals')
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  function handleNewMeal() {
    navigation.navigate('new-meal')
  }

  useFocusEffect(useCallback(() => {
    fetchMeals()
  }, []))

  return (
    <Container>
      <HeaderUser />

      <Content>
        {isLoading ? <Loading /> : (
          <SectionList
            sections={dayList}
            keyExtractor={(item) => item.name}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, section }) => <MealCard
              id={item.id}
              daylistId={section.id}
              name={item.name}
              time={item.time}
              isDiet={item.isDiet}
            />}
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
                <Button title="New meal" onPress={handleNewMeal} />
              </View>
            )}
            contentContainerStyle={[
              { paddingBottom: 100 },
              isDayListEmpty && { height: '90%' }
            ]}
          />
        )}

      </Content>
    </Container>
  )
}
