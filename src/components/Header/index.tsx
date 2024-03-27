import { useNavigation } from '@react-navigation/native'
import { BackButton, BackIcon, Container, IconTypeStyleProps, Title, TitleSection } from './styles'

interface HeaderProps {
  title?: string
  type?: IconTypeStyleProps
  showTitle?: boolean
}

export function Header({ title = '', showTitle = false, type = 'DEFAULT' }: HeaderProps) {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.navigate('home')
  }

  return (
    <Container>
      <BackButton onPress={handleGoBack}>
        <BackIcon type={type} />
      </BackButton>

      {showTitle && (
        <TitleSection>
          <Title>{title}</Title>
        </TitleSection>
      )}
    </Container>
  )
}