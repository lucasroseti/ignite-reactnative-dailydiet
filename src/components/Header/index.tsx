import { BackButton, BackIcon, Container, IconTypeStyleProps, Title, TitleSection } from './styles'

interface HeaderProps {
  type?: IconTypeStyleProps
  showTitle?: boolean
}

export function Header({ showTitle = false, type = 'DEFAULT' }: HeaderProps) {
  return (
    <Container>
      <BackButton>
        <BackIcon type={type} />
      </BackButton>

      {showTitle && (
        <TitleSection>
          <Title>New meal</Title>
        </TitleSection>
      )}
    </Container>
  )
}