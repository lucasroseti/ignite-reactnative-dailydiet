import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

type Props = {
  type: boolean
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700 };
`

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${type ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  margin-bottom: 8px;
`

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  text-align: center;
  margin: 0  32px;
`

export const Image = styled.Image`
  width: 224px;
  height: 288px;
  margin-top: 40px;
  margin-bottom: 32px;
`