import { type ReactElement, type ReactNode } from "react";

export interface DashboardMenuItemProps {
  number: number;
  path: string;
}

export default function DashboardMenuItem({
  number,
  path,
}: DashboardMenuItemProps): ReactElement {
  return (
    <div>
      [<span className="text-amber-500">{number}</span>] - {path}
    </div>
  );
}
