import styled, { css } from "styled-components/native"

export const Container = styled.View`
  height: 100%;
  padding: 30px 24px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_700};
  `}
`
