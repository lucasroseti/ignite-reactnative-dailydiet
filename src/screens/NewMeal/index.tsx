import { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

import { Header } from '@components/Header'
import { Input } from '@components/Input'

import { Container, Content, DateText, Form, GroupColumnField, GroupDateField, GroupRowField, Label } from './styles'
import { Button } from '@components/Button'
import { ButtonDiet } from '@components/ButtonDiet'
import { SmallInput } from '@components/SmallInput'

interface RouteParams {
  id?: string
}

export function NewMeal() {
  const [status, setStatus] = useState('')

  const navigation = useNavigation()

  const route = useRoute()
  const params = route.params as RouteParams

  const isNew = params === undefined
  console.log(params)

  function handleButtonDiet(type = '') {
    setStatus(type)
  }

  function handleNewMeal() {
    navigation.navigate('feedback', { meal: false })
  }

  return (
    <Container>
      <Header title={isNew ? 'New meal' : 'Edit meal'} showTitle />

      <Content>
        <Form>
          <GroupColumnField>
            <Label>Name</Label>
            <Input />
          </GroupColumnField>

          <GroupColumnField>
            <Label>Description</Label>
            <Input
              height='120'
              multiline
              numberOfLines={4}
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
                />
                <DateText>/</DateText>
                <SmallInput
                  maxLength={2}
                  keyboardType="numeric"
                  textAlign='center'
                />
                <DateText>/</DateText>
                <SmallInput
                  maxLength={4}
                  keyboardType="numeric"
                  textAlign='center'
                />
              </GroupDateField>
            </GroupColumnField>
            <GroupColumnField style={{ flex: 1 }}>
              <Label>Time</Label>
              <GroupDateField>
                <SmallInput
                  maxLength={2}
                  textAlign='center'
                />
                <DateText>:</DateText>
                <SmallInput
                  maxLength={4}
                  textAlign='center'
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