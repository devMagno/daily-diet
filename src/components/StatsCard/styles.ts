import styled from "styled-components/native"
import { ArrowUpRight } from "phosphor-react-native"

interface StatsCardStyleProps {
  isWithinTheDiet: boolean
}

interface anotherStyleProps {
  isWithinTheDiet: boolean
}

export const Container = styled.TouchableOpacity<StatsCardStyleProps>`
  padding: 20px 16px;
  border-radius: 8px;
  margin-bottom: 40px;

  background-color: ${({ theme, isWithinTheDiet }) =>
    isWithinTheDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`

export const ArrowIcon = styled(ArrowUpRight)`
  margin-bottom: -6px;
  align-self: flex-end;
`
