import { TouchableOpacityProps } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { ButtonTypeStyleProps, Container, Icon, Title } from './styles'

type Props = TouchableOpacityProps & {
  icon?: keyof typeof MaterialIcons.glyphMap | undefined
  title: string
  type?: ButtonTypeStyleProps
}

export function Button({ icon, title, type = 'PRIMARY', ...rest }: Props) {
  return (
    <Container type={type} {...rest}>
      {icon && <Icon name={icon} type={type} /> } 
      <Title type={type}>{title}</Title>
    </Container>
  )
}
