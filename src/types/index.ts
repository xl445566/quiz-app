import React from "react";

export interface ProblemProps {
  problems: any;
}

export interface ButtonProps {
  label: string;
  onClick: (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.TouchEvent<HTMLButtonElement>
  ) => void;
}

export interface DescriptionProps {
  description: DescriptionData;
}

export interface DescriptionData {
  title: string;
  contents: Array<Contents>;
}

interface Contents {
  id: number;
  content: string;
}
