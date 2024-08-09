import { type ReactElement } from "react";

export interface NvimSectionProps {
  text: string[];
}

// Only writes out the terminal nothing else
export default function NvimSection({ text }: NvimSectionProps): ReactElement {
  return (
    <div className="pl-6 pt-2 pb-2 text-xl">
      {text.map((item, index) => (
        <div key={index}>
          <span className="mr-2 text-slate-500">{index}</span>
          {item.split("").map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </div>
      ))}
    </div>
  );
}
