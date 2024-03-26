import { BackButton, BackIcon, Container, IconTypeStyleProps, Title, TitleSection } from './styles'

interface HeaderProps {
  title?: string
  type?: IconTypeStyleProps
  showTitle?: boolean
}

export function Header({ title = '', showTitle = false, type = 'DEFAULT' }: HeaderProps) {
  return (
    <Container>
      <BackButton>
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