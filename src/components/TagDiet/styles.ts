import styled, { css } from 'styled-components/native'

export type TagDietTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
  type: TagDietTypeStyleProps
}

export const Container = styled.View<Props>`
  min-height: 34px;
  max-height: 34px;
  max-width: 144px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: 999px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`

export const Status = styled.View<Props>`
  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK };
  border-radius: 999px;
  padding: 4px;
`
