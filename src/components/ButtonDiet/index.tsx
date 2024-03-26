import { TouchableOpacityProps } from 'react-native'

import { ButtonDietTypeStyleProps, Container, Status, Title } from './styles'

type Props = TouchableOpacityProps & {
  title: string
  active?: boolean
  type?: ButtonDietTypeStyleProps
}

export function ButtonDiet({ title, type = 'PRIMARY', active = false, ...rest }: Props) {
  return (
    <Container type={type} active={active} {...rest}>
      <Status type={type} />
      <Title>{title}</Title>
    </Container>
  )
}
