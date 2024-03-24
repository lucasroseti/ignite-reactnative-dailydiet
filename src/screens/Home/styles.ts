import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700 };
`

export const Content = styled.View`
  padding: 0 24px 0;
`

export const Title = styled.Text`
  ${({ theme }) => css`
  font-size: ${theme.FONT_SIZE.MD}px;
  color: ${theme.COLORS.GRAY_100};
  font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  margin-top: 40px;
  margin-bottom: 8px;
`

export const DateTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  margin-top: 32px;
  margin-bottom: 8px;
`