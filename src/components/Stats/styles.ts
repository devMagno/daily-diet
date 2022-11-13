import styled, { css } from "styled-components/native"

export const Container = styled.View`
  align-items: center;
`

export const Percentage = styled.Text`
  margin-bottom: 2px;
  
  text-align: center;
  
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZES.XXL}px;
    font-family: ${theme.FONT_FAMILIES.BOLD};
    line-height: ${theme.FONT_SIZES.XXL * 1.3}px;
  `})}
`

export const Label = styled.Text`
  text-align: center;
  
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-size: ${theme.FONT_SIZES.SM}px;
    font-family: ${theme.FONT_FAMILIES.REGULAR};
    line-height: ${theme.FONT_SIZES.SM * 1.3}px;
  `})}
`
