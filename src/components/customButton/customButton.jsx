import React from "react";
import { ButtonWrapper } from "./customButton.style";
export const CustomButton = ({ content, color, url }) => {
  return (
    <ButtonWrapper to={url} color={color}>
      {content}
    </ButtonWrapper>
  );
};

export default CustomButton;
