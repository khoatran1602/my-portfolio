import React from "react";
import ButtonImage from "./types";
import Image from "next/image";

const ImageButton = (props: ButtonImage) => {
  const { src, alt, onClick, width, height } = props;

  return (
    <button onClick={onClick}>
      <Image src={src} alt={alt} width={width} height={height} />
    </button>
  );
};

export default ImageButton;
