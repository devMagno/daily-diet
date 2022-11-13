import { Title } from "./styles"

interface MealsListItemHeaderProps {
  section: { title: string }
}

export function MealsListItemHeader({ section }: MealsListItemHeaderProps) {
  return <Title>{section.title}</Title>
}
