import { Header } from "../../components/Header"
import { MealsList } from "../../components/MealsList"
import { StatsCard } from "../../components/StatsCard"

import { Container } from "./styles"

export function Home() {
  return (
    <Container>
      <Header />

      <StatsCard totalMeals={10} mealsWithinTheDiet={5} />

      <MealsList />
    </Container>
  )
}
