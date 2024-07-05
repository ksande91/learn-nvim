import { type ReactElement, type ReactNode } from "react"

export interface BasicsPageProps {
  
  children: ReactNode
}

export default function BasicsPage(props: BasicsPageProps): ReactElement {
  return <div>Basics</div>
}
