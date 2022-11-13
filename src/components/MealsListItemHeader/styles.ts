import styled, { css } from "styled-components/native"

export const Title = styled.Text`
  margin-bottom: 8px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZES.LG}px;
    font-family: ${theme.FONT_FAMILIES.BOLD};
    line-height: ${theme.FONT_SIZES.LG * 1.3}px;
  `}
`
