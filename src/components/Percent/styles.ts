import { ArrowUpRight } from 'phosphor-react-native'
import styled, { css } from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT };
  border-radius: 8px;
`

export const TextSection = styled.View`
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE['2XL']}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`

export const OpenSection = styled.View`
  flex-direction: row;
  justify-content: flex-end;

  padding-top: 8px;
  padding-right: 8px;
  margin-bottom: -12px;
`

export const OpenIcon = styled(ArrowUpRight).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN_DARK
}))``