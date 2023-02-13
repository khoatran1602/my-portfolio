import React from "react";

interface ButtonImage {
  src: string;
  alt: string;
  onClick: () => void;
  width?: number | undefined;
  height?: number | undefined;
}

export default ButtonImage;
