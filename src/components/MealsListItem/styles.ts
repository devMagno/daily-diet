import styled, { css } from "styled-components/native"

interface DotStyleProps {
  isWithinTheDiet: boolean
}

export const Container = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-items: center;

  margin-bottom: 8px;
  border-radius: 6px;
  padding: 14px 16px 14px 12px;

  ${({ theme }) => css`
    border: 1px solid ${theme.COLORS.GRAY_500};
  `}
`

export const Hour = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZES.XS}px;
    font-family: ${theme.FONT_FAMILIES.BOLD};
    line-height: ${theme.FONT_SIZES.XS * 1.3}px;

    margin-right: 12px;
    padding-right: 12px;
    border: 0 solid ${theme.COLORS.GRAY_400};
    border-right-width: 1px;
  `}
`

export const Title = styled.Text`
  flex: 1;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZES.MD}px;
    font-family: ${theme.FONT_FAMILIES.REGULAR};
    line-height: ${theme.FONT_SIZES.MD * 1.3}px;
  `}
`

export const Dot = styled.View<DotStyleProps>`
  width: 14px;
  height: 14px;
  border-radius: 14px;

  background-color: ${({ theme, isWithinTheDiet }) =>
    isWithinTheDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`
