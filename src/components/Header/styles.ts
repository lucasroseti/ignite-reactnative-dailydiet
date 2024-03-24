import styled, { css } from 'styled-components/native'
import { ArrowLeft } from 'phosphor-react-native'

export type IconTypeStyleProps = 'PRIMARY' | 'SECONDARY' | 'DEFAULT'

type Props = {
  type: IconTypeStyleProps
}

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 22px 24px 0;
`

export const BackButton = styled.TouchableOpacity`
`

export const BackIcon = styled(ArrowLeft).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : type === 'SECONDARY' ? theme.COLORS.RED_DARK : theme.COLORS.GRAY_200
}))``

export const TitleSection = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`