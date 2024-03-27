import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`

export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700 };
  margin-top: 32px;
  border-radius: 20px 20px 0 0;
`

export const Form = styled.View`
  flex: 1;
  gap: 24px;
  margin: 40px 24px;
`

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
  margin-bottom: 4px;
`

export const GroupRowField = styled.View`
  flex-direction: row;
  gap: 8px;
`

export const GroupColumnField = styled.View`
  gap: 8px;
`

export const GroupDateField = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  max-height: 48px;

  ${({ theme }) => css`
    border: 1px solid ${theme.COLORS.GRAY_500};
  `}

  border-radius: 6px;
`

export const DateText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.XS}px;
  `}
`