import { useState } from 'react'
import { Alert, View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

import { Header } from '@components/Header'
import { Button } from '@components/Button'
import { TagDiet } from '@components/TagDiet'

import { Container, Content, SubTitle, Text, Title } from './styles'

interface RouteParams {
  id: string
}

export function Meal() {
  const [isDiet, setIsDiet] = useState(true)

  const navigation = useNavigation()

  const route = useRoute()
  const { id } = route.params as RouteParams

  function handleEditMeal() {
    navigation.navigate('new-meal', { id: '1' })
  }

  async function mealRemove() {
    try {
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

  return (
    <Container type={isDiet ? 'PRIMARY' : 'SECONDARY'}>
      <Header
        title="Meal"
        type={isDiet ? 'PRIMARY' : 'SECONDARY'}
        showTitle
      />

      <Content>
        <Title>Sanduíche</Title>
        <Text>Sanduíche de pão integral com atum e salada de alface e tomate</Text>

        <SubTitle>Data e hora</SubTitle>
        <Text>12/08/2022 às 16:00</Text>

        <TagDiet title={isDiet ? 'within the diet' : 'off the diet'} type={isDiet ? 'PRIMARY' : 'SECONDARY'} />

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
    </Container>
  )
}