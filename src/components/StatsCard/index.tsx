import { useNavigation } from "@react-navigation/native"
import { useTheme } from "styled-components/native"

import { Stats } from "../Stats"

import { ArrowIcon, Container } from "./styles"

interface StatsCardProps {
  totalMeals: number
  mealsWithinTheDiet: number
}

export function StatsCard({ totalMeals, mealsWithinTheDiet }: StatsCardProps) {
  const { navigate } = useNavigation()
  const theme = useTheme()

  function handleCardClick() {
    navigate("stats")
  }

  const isWithinTheDiet = true

  return (
    <Container isWithinTheDiet={isWithinTheDiet} onPress={handleCardClick}>
      <ArrowIcon
        size={24}
        color={
          isWithinTheDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
        }
      />
      <Stats totalMeals={totalMeals} mealsWithinTheDiet={mealsWithinTheDiet} />
    </Container>
  )
}
