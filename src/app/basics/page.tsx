import TheBasics from "@/components/Headings/TheBasics";
import InfoBox from "@/components/InfoBox";
import { type ReactElement, type ReactNode } from "react";

export interface BasicsPageProps {
  children: ReactNode;
}

export default function BasicsPage(props: BasicsPageProps): ReactElement {
  return (
    <div>
      <TheBasics />
      <InfoBox>Test</InfoBox>
    </div>
  );
}
