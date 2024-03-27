import { useState } from 'react'
import { Text, View } from 'react-native'
import { useTheme } from 'styled-components'
import { useNavigation, useRoute } from '@react-navigation/native'

import { Button } from '@components/Button'
import { Container, Image, SubTitle, Title } from './styles'

import womanImage from '@assets/woman.png'
import manImage from '@assets/man.png'

interface RouteParams {
  meal: boolean
}

export function Feedback() {
  const { FONT_FAMILY } = useTheme()

  const navigation = useNavigation()

  const route = useRoute()
  const { meal: isDiet } = route.params as RouteParams

  function handleHome() {
    navigation.navigate('home')
  }

  return (
    <Container>
      <Title type={isDiet}>{isDiet ? 'Continue assim!' : 'Que pena!'}</Title>
      <SubTitle>
        {isDiet ? (
          <>Você continua <Text style={{ fontFamily: FONT_FAMILY.BOLD }}>dentro da dieta</Text>. Muito bem!</>
        ): (
          <>Você <Text style={{ fontFamily: FONT_FAMILY.BOLD }}>saiu da dieta</Text> dessa vez, mas continue se esforçando e não desista!</>
        )}
      </SubTitle>

      <Image source={isDiet ? womanImage : manImage} />

      <View style={{ width: '100%', maxWidth: 191 }}>
        <Button title="Ir para a página inicial" onPress={handleHome} />
      </View>
    </Container>
  )
}