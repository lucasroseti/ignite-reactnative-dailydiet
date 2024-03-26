import { TextInput } from 'react-native'
import styled, { css } from 'styled-components'

export const Container = styled(TextInput)`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
  padding: 12px;
`
