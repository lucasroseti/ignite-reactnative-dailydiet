import { ArrowUpRight } from 'phosphor-react-native'
import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT };
  border-radius: 8px;
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