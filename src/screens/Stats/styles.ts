import styled, { css } from "styled-components/native"
import { SafeAreaView } from "react-native-safe-area-context"

interface ContainerStyleProps {
  isWithinTheDiet: boolean
}

interface CardStyleProps {
  variant: "REGULAR" | "GREEN" | "RED"
}

export const Container = styled(SafeAreaView)<ContainerStyleProps>`
  background-color: ${({ theme, isWithinTheDiet }) =>
    isWithinTheDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`

export const Title = styled.Text`
  text-align: center;
  margin-bottom: 23px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZES.SM}px;
    font-family: ${theme.FONT_FAMILIES.BOLD};
    line-height: ${theme.FONT_SIZES.SM * 1.3}px;
  `})}
`

export const Cards = styled.View`
  margin: -6px;
`

export const Card = styled.View<CardStyleProps>`
  width: 100%;
  margin: 6px;
  padding: 16px;
  border-radius: 8px;
  align-items: center;

  ${({ theme, variant }) => css`
    background-color: ${variant === "GREEN"
      ? theme.COLORS.GREEN_LIGHT
      : variant === "RED"
      ? theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_600};
  `}
`

export const CardValue = styled.Text`
  margin-bottom: 8px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZES.XL}px;
    font-family: ${theme.FONT_FAMILIES.BOLD};
    line-height: ${theme.FONT_SIZES.XL * 1.3}px;
  `}
`

export const CardLabel = styled.Text`
  text-align: center;
  
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZES.SM}px;
    font-family: ${theme.FONT_FAMILIES.REGULAR};
    line-height: ${theme.FONT_SIZES.SM * 1.3}px;
  `}
`
