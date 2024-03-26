import { TextInput } from 'react-native'
import styled, { css } from 'styled-components/native'

type Props = {
  width?: string
  height?: string
}

export const Container = styled(TextInput)<Props>`
  min-height: ${({ height }) => height }px;
  max-height: ${({ height }) => height }px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    border: 1px solid ${theme.COLORS.GRAY_500};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}

  border-radius: 6px;
  padding: 14px;
`