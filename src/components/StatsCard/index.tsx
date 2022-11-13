import { Stats } from "../Stats"

import { Container } from "./styles"

interface StatsCardProps {
  totalMeals: number
  mealsWithinTheDiet: number
}

export function StatsCard({ totalMeals, mealsWithinTheDiet }: StatsCardProps) {
  return (
    <Container isWithinTheDiet={true}>
      <Stats totalMeals={totalMeals} mealsWithinTheDiet={mealsWithinTheDiet} />
    </Container>
  )
}
