import { TagDietTypeStyleProps, Container, Status, Title } from './styles'

type Props = {
  title: string
  type?: TagDietTypeStyleProps
}

export function TagDiet({ title, type = 'PRIMARY' }: Props) {
  return (
    <Container type={type}>
      <Status type={type} />
      <Title>{title}</Title>
    </Container>
  )
}
