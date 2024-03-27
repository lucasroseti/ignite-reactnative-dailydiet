import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

export type MealCardTypeStyleProps = 'SUCCESS' | 'DANGER'

type Props = {
  type: MealCardTypeStyleProps
}

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500 };
  border-radius: 6px;
  padding: 12px 14px;
  margin-bottom: 8px;
`

export const Title = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
`

export const TimeText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XS}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const MealText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`

export const Divide = styled.View`
  min-height: 14px;
  max-height: 14px;
  width: 1px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400 };
`

export const Status = styled.View<Props>`
  width: 14px;
  height: 14px;
  border-radius: 999px;
  background-color: ${({ theme, type }) => type === 'SUCCESS' ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`