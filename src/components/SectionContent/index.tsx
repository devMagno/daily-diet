import { ReactNode } from "react"
import { Container } from "./styles"

interface SectionContentProps {
  children?: ReactNode
}

export function SectionContent({ children }: SectionContentProps) {
  return <Container>{children}</Container>
}
