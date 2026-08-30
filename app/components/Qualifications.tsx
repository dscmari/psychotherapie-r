import { SendHorizontal } from "lucide-react";
import { div } from "motion/react-client";
import React from "react";

type Qualification = {
  description: string;
};

type Props = {
  className?: string;
  qualifications: Qualification[];
};

export default function Qualifications({ className, qualifications }: Props) {
  return (

      <div className={`flex flex-col gap-4 mt-8 ${className}`}>
        {qualifications.map((e, index) => (
          <div key={index} className="flex gap-4">
            <SendHorizontal className="shrink-0 text-sage" />
            <span>{e.description}</span>
          </div>
        ))}
    </div>
  );
}
