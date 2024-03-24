import styled, { css } from 'styled-components/native'

export type StatisticsTypeStyleProps = 'PRIMARY' | 'SECONDARY' | 'DEFAULT'

type Props = {
  type: StatisticsTypeStyleProps
}

export const Container = styled.View<Props>`
  flex: 1;
  max-height: 107px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: ${({ theme, type }) => 
    type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : type === 'SECONDARY' ? theme.COLORS.RED_LIGHT : theme.COLORS.GRAY_600 };
  border-radius: 8px;
  padding: 16px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_100};
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