import { useNavigation } from "@react-navigation/native"

import { Meal } from "../utils/meal"

import { Container, Hour, Title, Dot } from "./styles"

interface MealsListItemProps {
  meal: Meal
}

export function MealsListItem({ meal }: MealsListItemProps) {
  const { navigate } = useNavigation()

  function handleMealClick() {
    navigate("meal")
  }

  return (
    <Container onPress={handleMealClick}>
      <Hour>{meal.time}:00</Hour>
      <Title>{meal.name}</Title>
      <Dot isWithinTheDiet={meal.isWithinTheDiet} />
    </Container>
  )
}
