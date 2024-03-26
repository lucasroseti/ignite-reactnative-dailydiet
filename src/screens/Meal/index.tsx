import { useState } from 'react'
import { View } from 'react-native'

import { Header } from '@components/Header'
import { Button } from '@components/Button'
import { Container, Content, SubTitle, Text, Title } from './styles'
import { TagDiet } from '@components/TagDiet'

export function Meal() {
  const [isDiet, setIsDiet] = useState(true)

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
          <Button icon="edit" title="Edit meal" />
          <Button icon="delete-outline" title="Delete meal" type="SECONDARY" />
        </View>
      </Content>
    </Container>
  )
}