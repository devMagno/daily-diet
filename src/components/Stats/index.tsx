import { Container, Label, Percentage } from "./styles"

interface StatsProps {
  totalMeals: number
  mealsWithinTheDiet: number
}

export function Stats({ totalMeals, mealsWithinTheDiet }: StatsProps) {
  return (
    <Container>
      <Percentage>90,86%</Percentage>
      <Label>das refeições dentro da dieta</Label>
    </Container>
  )
}
