import styled, { css } from "styled-components/native"
import { ArrowLeft } from "phosphor-react-native"

interface SectionHeaderStyleProps {
  isWithinTheDiet?: boolean
}

export const Container = styled.View<SectionHeaderStyleProps>`
  padding: 26px 27px 34px 27px;

  ${({ theme, isWithinTheDiet }) => css`
    background-color: ${typeof isWithinTheDiet === "undefined"
      ? theme.COLORS.GRAY_500
      : isWithinTheDiet
      ? theme.COLORS.GREEN_LIGHT
      : theme.COLORS.RED_LIGHT};
  `}
`

export const BackButton = styled.TouchableOpacity``

export const BackButtonArrow = styled(ArrowLeft)``
