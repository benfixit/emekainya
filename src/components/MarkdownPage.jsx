// src/component/Page
import React from "react";

// props will contain attributes
const MarkdownPage = (props) => {
  const { children, attributes } = props;
  return (
    <React.Fragment>
      <h1>{attributes.name}</h1>
      {children}
    </React.Fragment>
  );
}
export default MarkdownPage;