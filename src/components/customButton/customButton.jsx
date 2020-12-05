import React from "react";
import { ExternalLink ,InternalLink} from "./customButton.style";
export const CustomButton = ({ content, color, url ,type }) => {
  if (type === "external") {
    return (
      <ExternalLink href={url} color={color} target="_blank" rel="noreferrer">
        {content}
      </ExternalLink>
    );
  }
  return (
    <InternalLink to={url} color={color}>
      {content}
    </InternalLink>
  );
};

export default CustomButton;
