import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export type ContainerTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = {
  type: ContainerTypeStyleProps
}

export const Container = styled(SafeAreaView)<Props>`
  flex: 1;
  background-color: ${({ theme, type }) => 
    type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT };
`

export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE };
  margin-top: 32px;
  border-radius: 20px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  text-align: center;
  margin-top: 32px;
`

export const StatisticsSection = styled.View`
  flex: 1;
  gap: 12px;
  margin: 24px 24px 0;
`