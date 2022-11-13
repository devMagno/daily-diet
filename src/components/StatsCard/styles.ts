import styled from "styled-components/native"

interface ContainerStyleProps {
  isWithinTheDiet: boolean
}

export const Container = styled.TouchableOpacity<ContainerStyleProps>`
  padding: 20px 16px;
  border-radius: 8px;
  margin-bottom: 40px;

  background-color: ${({ theme, isWithinTheDiet }) =>
    isWithinTheDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`
