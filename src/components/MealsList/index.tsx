import { MealsListItem } from "../MealsListItem"
import { MealsListItemHeader } from "../MealsListItemHeader"

import { Meal } from "../utils/meal"
import { Section } from "../utils/section"

import {
  Button,
  ButtonIcon,
  ButtonLabel,
  Container,
  Title,
  List,
} from "./styles"

export function MealsList() {
  const meals = [
    {
      title: "12.11.2022",
      data: [
        {
          time: new Date().getHours().toString(),
          name: "Dogão da Esquina",
          isWithinTheDiet: false,
        },
        {
          time: new Date().getHours().toString(),
          name: "Arroz e Feijão",
          isWithinTheDiet: true,
        },
        {
          time: new Date().getHours().toString(),
          name: "X-tudo completão",
          isWithinTheDiet: false,
        },
        {
          time: new Date().getHours().toString(),
          name: "Frango e Batata Doce",
          isWithinTheDiet: true,
        },
      ],
    },
  ]

  return (
    <Container>
      <Title>Refeições</Title>
      <Button>
        <ButtonIcon />
        <ButtonLabel>Nova refeição</ButtonLabel>
      </Button>

      <List
        sections={meals}
        renderSectionHeader={({ section }) => (
          <MealsListItemHeader section={section as unknown as Section} />
        )}
        renderItem={({ item }) => <MealsListItem meal={item as Meal} />}
      />
    </Container>
  )
}
