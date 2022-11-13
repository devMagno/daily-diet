import { Meal } from "../utils/meal"

import { Container, Hour, Title, Dot } from "./styles"

interface MealsListItemProps {
  meal: Meal
}

export function MealsListItem({ meal }: MealsListItemProps) {
  return (
    <Container>
      <Hour>{meal.time}:00</Hour>
      <Title>{meal.name}</Title>
      <Dot isWithinTheDiet={meal.isWithinTheDiet} />
    </Container>
  )
}
