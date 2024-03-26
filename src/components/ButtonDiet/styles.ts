import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export type ButtonDietTypeStyleProps = 'PRIMARY' | 'SECONDARY' | 'DEFAULT'

type Props = {
  active?: boolean
  type: ButtonDietTypeStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;
  min-height: 50px;
  max-height: 50px;
  ${({ theme, type, active }) => css`
    background-color: ${active && type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : 
    active && type === 'SECONDARY' ? theme.COLORS.RED_LIGHT :theme.COLORS.GRAY_600 };
    border: 1px solid ${active && type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : 
    active && type === 'SECONDARY' ? theme.COLORS.RED_DARK :theme.COLORS.WHITE };
  `}

  border-radius: 6px;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const Status = styled.View<Props>`
  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK };
  border-radius: 999px;
  padding: 4px;
`
