import { type ReactElement } from "react";

export interface DashboardMenuItemProps {
  number: number;
  text: string;
}

export default function DashboardMenuItem({
  number,
  text,
}: DashboardMenuItemProps): ReactElement {
  return (
    <div>
      [<span className="text-amber-500">{number}</span>] - {text}
    </div>
  );
}
