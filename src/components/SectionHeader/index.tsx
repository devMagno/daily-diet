import { ReactNode } from "react"
import { useNavigation } from "@react-navigation/native"
import { useTheme } from "styled-components/native"

import { BackButton, BackButtonArrow, Container } from "./styles"

interface SectionHeaderProps {
  children: ReactNode
  isWithinTheDiet?: boolean
}

export function SectionHeader({
  children,
  isWithinTheDiet,
}: SectionHeaderProps) {
  const { navigate } = useNavigation()
  const theme = useTheme()

  function handleBackClick() {
    navigate("home")
  }

  return (
    <Container isWithinTheDiet={isWithinTheDiet}>
      <BackButton onPress={handleBackClick}>
        <BackButtonArrow
          size={24}
          color={
            typeof isWithinTheDiet === "undefined"
              ? theme.COLORS.GRAY_200
              : isWithinTheDiet
              ? theme.COLORS.GREEN_DARK
              : theme.COLORS.RED_DARK
          }
        />
      </BackButton>

      {children}
    </Container>
  )
}
