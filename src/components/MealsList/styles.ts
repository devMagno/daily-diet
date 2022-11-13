import styled, { css } from "styled-components/native"
import { Plus } from "phosphor-react-native"

export const Container = styled.View``

export const Title = styled.Text`
  margin-bottom: 8px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZES.MD}px;
    line-height: ${theme.FONT_SIZES.MD * 1.3}px;
  `};
`

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  border-radius: 6px;

  margin-top: 8px;
  margin-bottom: 32px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
`

export const ButtonLabel = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZES.SM}px;
    font-family: ${theme.FONT_FAMILIES.BOLD};
    line-height: ${theme.FONT_SIZES.SM * 1.3}px;
  `}
`

export const ButtonIcon = styled(Plus).attrs(({ theme }) => ({
  size: 18,
  weight: "bold",
  color: theme.COLORS.WHITE,
}))`
  margin-right: 12px;
`

export const List = styled.SectionList``
