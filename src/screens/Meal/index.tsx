import { useCallback, useState } from 'react'
import { Alert, View } from 'react-native'
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native'

import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { Loading } from '@components/Loading'
import { TagDiet } from '@components/TagDiet'

import { MealDataDTO, MealStorageDTO } from '@storage/meal/MealStorageDTO'
import { mealGetByIdAnDayListId } from '@storage/meal/mealGetByIdAnDayListId'
import { mealRemoveByIdAnDayListId } from '@storage/meal/mealRemoveByIdAnDayListId'

import { Container, Content, SubTitle, Text, Title } from './styles'

interface RouteParams {
  id: string
  daylistId: string
}

export function Meal() {
  const [isLoading, setIsLoading] = useState(true)
  const [meal, setMeal] = useState<MealStorageDTO>(MealDataDTO)

  const navigation = useNavigation()

  const route = useRoute()
  const { id, daylistId } = route.params as RouteParams

  async function fetchMealById() {
    try {
      setIsLoading(true)

      const data = await mealGetByIdAnDayListId(id, daylistId)
      setMeal(data)
    } catch (error) {
      Alert.alert('Meal', 'Unable to load meal')
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  function handleEditMeal() {
    navigation.navigate('new-meal', { id, daylistId })
  }

  async function mealRemove() {
    try {
      await mealRemoveByIdAnDayListId(id, daylistId)
      navigation.navigate('home')
    } catch (error) {
      Alert.alert('Delete meal', 'Unable to remove meal')
      console.log(error)
    }
  }
  
  async function handleMealRemove() {
    Alert.alert(
      'Delete',
      'Do you want to remove the meal?',
      [
        { text: 'No', style: 'cancel' },
        { text: 'Yes', onPress: () => mealRemove() }
      ]
    )
  }

  useFocusEffect(useCallback(() => {
    fetchMealById()
  }, []))

  return (
    <Container type={meal.isDiet ? 'PRIMARY' : 'SECONDARY'}>
      {isLoading ? <Loading /> : (
        <>
          <Header
            title="Meal"
            type={meal.isDiet ? 'PRIMARY' : 'SECONDARY'}
            showTitle
          />

          <Content>
            <Title>{meal.name}</Title>
            <Text>{meal.description}</Text>

            <SubTitle>Data e hora</SubTitle>
            <Text>{meal.date} às {meal.time}</Text>

            <TagDiet title={meal.isDiet ? 'within the diet' : 'off the diet'} type={meal.isDiet ? 'PRIMARY' : 'SECONDARY'} />

            <View style={{ flex: 1,justifyContent: 'flex-end',  gap: 8 }}>
              <Button icon="edit" title="Edit meal" onPress={handleEditMeal}/>
              <Button
                icon="delete-outline"
                title="Delete meal"
                type="SECONDARY"
                onPress={handleMealRemove}
              />
            </View>
          </Content>
        </>
      )}
    </Container>
  )
}