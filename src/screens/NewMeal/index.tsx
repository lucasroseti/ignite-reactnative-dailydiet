import { useState } from 'react'
import { Alert } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

import { Button } from '@components/Button'
import { ButtonDiet } from '@components/ButtonDiet'
import { Header } from '@components/Header'
import { Input } from '@components/Input'
import { SmallInput } from '@components/SmallInput'

import { Container, Content, DateText, Form, GroupColumnField, GroupDateField, GroupRowField, Label } from './styles'
import { MealStorageDTO, MealDataDTO } from '@storage/meal/MealStorageDTO'
import { MealDateDataDTO, MealDateStorageDTO } from '@storage/meal/MealDateStorageDTO'
import { daylistCreate } from '@storage/daylist/daylistCreate'

interface RouteParams {
  id?: string
}

export function NewMeal() {
  const [status, setStatus] = useState('')
  const [newMeal, setNewMeal] = useState<MealStorageDTO>(MealDataDTO)
  const [date, setDate] = useState<MealDateStorageDTO>(MealDateDataDTO)

  const navigation = useNavigation()

  const route = useRoute()
  const params = route.params as RouteParams

  const isNew = params === undefined

  function handleButtonDiet(type = '') {
    const isDiet = type === 'PRIMARY'
    setNewMeal((prevState) => ({ ...prevState, isDiet }))
    setStatus(type)
  }

  function handleData(name: string, value: string) {
    setNewMeal((prevState) => ({ ...prevState, [name]: value.trim() }))
  }

  function handleDataDate(name: string, value: string) {
    setDate((prevState) => ({ ...prevState, [name]: value.trim() }))
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

    await daylistCreate(newMeal)
    navigation.navigate('feedback', { meal: newMeal.isDiet })
  }

  return (
    <Container>
      <Header title={isNew ? 'New meal' : 'Edit meal'} showTitle />

      <Content>
        <Form>
          <GroupColumnField>
            <Label>Name</Label>
            <Input onChangeText={e => handleData('name', e)} />
          </GroupColumnField>

          <GroupColumnField>
            <Label>Description</Label>
            <Input
              height='120'
              multiline
              numberOfLines={4}
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
                  onChangeText={e => handleDataDate('day', e)}
                />
                <DateText>/</DateText>
                <SmallInput
                  maxLength={2}
                  keyboardType="numeric"
                  textAlign='center'
                  onChangeText={e => handleDataDate('month', e)}
                />
                <DateText>/</DateText>
                <SmallInput
                  maxLength={4}
                  keyboardType="numeric"
                  textAlign='center'
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
                  onChangeText={e => handleDataDate('hour', e)}
                />
                <DateText>:</DateText>
                <SmallInput
                  maxLength={2}
                  textAlign='center'
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
            <Button title={isNew ? 'Register meal' : 'Update meal'} onPress={handleNewMeal}/>
          </GroupColumnField>
        </Form>
      </Content>
    </Container>
  )
}