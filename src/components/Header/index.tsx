import { BackButton, BackIcon, Container, Title, TitleSection } from './styles'

interface HeaderProps {
  showTitle?: boolean
}

export function Header({ showTitle = false }: HeaderProps) {
  return (
    <Container>
      <BackButton>
        <BackIcon type="PRIMARY" />
      </BackButton>

      {showTitle && (
        <TitleSection>
          <Title>New meal</Title>
        </TitleSection>
      )}
    </Container>
  )
}