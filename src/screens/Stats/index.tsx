import { SectionContent } from "../../components/SectionContent"
import { SectionHeader } from "../../components/SectionHeader"
import { Stats as StatsComponent } from "../../components/Stats"

import { Card, CardLabel, Cards, CardValue, Container, Title } from "./styles"

export function Stats() {
  const isWithinTheDiet = true

  return (
    <Container isWithinTheDiet={isWithinTheDiet}>
      <SectionHeader isWithinTheDiet={isWithinTheDiet}>
        <StatsComponent mealsWithinTheDiet={5} totalMeals={10} />
      </SectionHeader>

      <SectionContent>
        <Title>Estatísticas Gerais</Title>

        <Cards>
          <Card variant="REGULAR">
            <CardValue>4</CardValue>
            <CardLabel>melhor sequência de pratos dentro da dieta</CardLabel>
          </Card>
          <Card variant="REGULAR">
            <CardValue>109</CardValue>
            <CardLabel>refeições registradas</CardLabel>
          </Card>
          <Card variant="GREEN">
            <CardValue>99</CardValue>
            <CardLabel>refeições dentro da dieta</CardLabel>
          </Card>
          <Card variant="RED">
            <CardValue>10</CardValue>
            <CardLabel>refeições fora da dieta</CardLabel>
          </Card>
        </Cards>
      </SectionContent>
    </Container>
  )
}
