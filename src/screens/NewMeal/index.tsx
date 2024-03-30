import { useCallback, useState } from 'react'
import { Alert } from 'react-native'
import * as Crypto from 'expo-crypto'
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native'

import { Button } from '@components/Button'
import { ButtonDiet } from '@components/ButtonDiet'
import { Header } from '@components/Header'
import { Input } from '@components/Input'
import { SmallInput } from '@components/SmallInput'

import { MealStorageDTO, MealDataDTO } from '@storage/meal/MealStorageDTO'
import { MealDateDataDTO, MealDateStorageDTO } from '@storage/meal/MealDateStorageDTO'
import { daylistCreate } from '@storage/daylist/daylistCreate'
import { daylistUpdate } from '@storage/daylist/daylistUpdate'
import { mealGetByIdAnDayListId } from '@storage/meal/mealGetByIdAnDayListId'

import { Container, Content, DateText, Form, GroupColumnField, GroupDateField, GroupRowField, Label } from './styles'

interface RouteParams {
  id?: string
  daylistId?: string
}

export function NewMeal() {
  const [status, setStatus] = useState('')
  const [newMeal, setNewMeal] = useState<MealStorageDTO>(MealDataDTO)
  const [date, setDate] = useState<MealDateStorageDTO>(MealDateDataDTO)

  const navigation = useNavigation()

  const route = useRoute()
  const params = route.params as RouteParams

  const isNew = params === undefined

  async function fetchMealById() {
    try {
      const { id, daylistId } = params

      const data = await mealGetByIdAnDayListId(id!, daylistId!)
      setNewMeal(data)
      setStatus(data.isDiet ? 'PRIMARY' : 'SECONDARY')
      formatDateAndTimeToForm(data.date, data.time)
    } catch (error) {
      Alert.alert('Meal', 'Unable to load meal')
      console.log(error)
    }
  }

  function formatDateAndTimeToForm(date: string, time: string) {
    const [year, month, day] = date.split('-')
    const [hour, minute] = time.split(':')

    setDate({
      day,
      year,
      month,
      hour,
      minute
    })
  }

  function handleButtonDiet(type = '') {
    const isDiet = type === 'PRIMARY'
    setNewMeal((prevState) => ({ ...prevState, isDiet }))
    setStatus(type)
  }

  function handleData(name: string, value: string) {
    setNewMeal((prevState) => ({ ...prevState, [name]: value }))
  }

  function handleDataDate(name: string, value: string) {
    setDate((prevState) => ({ ...prevState, [name]: value.trim() }))
  }

  async function handleEditMeal() {
    if (newMeal.date === '') {
      return Alert.alert('New meal', 'Enter a valid date')
    }

    const { daylistId } = params

    await daylistUpdate(daylistId!, newMeal)
    navigation.navigate('feedback', { meal: newMeal.isDiet })
  }

  function handleNewMealMinute() {
    const mealDate = `${date.year}-${date.month}-${date.day}`
    const mealDateFormatDate = new Date(mealDate).toString()
    const mealTime = `${date.hour}:${date.minute}`

    if (mealDateFormatDate === 'Invalid Date') {
      return Alert.alert('New meal', 'Enter a valid date')
    }

    setNewMeal((prevState) => ({ ...prevState, date: mealDate, time: mealTime }))
  }

  async function handleNewMeal() {
    if (newMeal.date === '') {
      return Alert.alert('New meal', 'Enter a valid date')
    }

    await daylistCreate({...newMeal, id: Crypto.randomUUID() })
    navigation.navigate('feedback', { meal: newMeal.isDiet })
  }

  useFocusEffect(useCallback(() => {
    if (!isNew) fetchMealById()
  }, [isNew]))

  return (
    <Container>
      <Header title={isNew ? 'New meal' : 'Edit meal'} showTitle />

      <Content>
        <Form>
          <GroupColumnField>
            <Label>Name</Label>
            <Input value={newMeal.name} onChangeText={e => handleData('name', e)} />
          </GroupColumnField>

          <GroupColumnField>
            <Label>Description</Label>
            <Input
              height='120'
              multiline
              numberOfLines={4}
              value={newMeal.description} 
              onChangeText={e => handleData('description', e)}
            />
          </GroupColumnField>

          <GroupRowField style={{ gap: 20 }}>
            <GroupColumnField style={{ flex: 1 }}>
              <Label>Date</Label>
              <GroupDateField>
                <SmallInput
                  maxLength={2}
                  keyboardType="numeric"
                  textAlign='center'
                  value={date.day}
                  onChangeText={e => handleDataDate('day', e)}
                />
                <DateText>/</DateText>
                <SmallInput
                  maxLength={2}
                  keyboardType="numeric"
                  textAlign='center'
                  value={date.month}
                  onChangeText={e => handleDataDate('month', e)}
                />
                <DateText>/</DateText>
                <SmallInput
                  maxLength={4}
                  keyboardType="numeric"
                  textAlign='center'
                  value={date.year}
                  onChangeText={e => handleDataDate('year', e)}
                />
              </GroupDateField>
            </GroupColumnField>
            <GroupColumnField style={{ flex: 1 }}>
              <Label>Time</Label>
              <GroupDateField>
                <SmallInput
                  maxLength={2}
                  textAlign='center'
                  value={date.hour}
                  onChangeText={e => handleDataDate('hour', e)}
                />
                <DateText>:</DateText>
                <SmallInput
                  maxLength={2}
                  textAlign='center'
                  value={date.minute}
                  onChangeText={e => handleDataDate('minute', e)}
                  onBlur={handleNewMealMinute}
                />
              </GroupDateField>
            </GroupColumnField>
          </GroupRowField>

          <GroupColumnField>
            <Label>Is in the diet?</Label>

            <GroupRowField>
              <ButtonDiet
                title="Sim"
                active={status === 'PRIMARY'}
                onPress={() => handleButtonDiet('PRIMARY')}
              />
              <ButtonDiet
                title="Não"
                type="SECONDARY"
                active={status === 'SECONDARY'}
                onPress={() => handleButtonDiet('SECONDARY')}
              />
            </GroupRowField>
          </GroupColumnField>

          <GroupColumnField style={{ flex: 1, justifyContent: 'flex-end' }}>
            <Button title={isNew ? 'Register meal' : 'Update meal'} onPress={isNew ? handleNewMeal : handleEditMeal}/>
          </GroupColumnField>
        </Form>
      </Content>
    </Container>
  )
}