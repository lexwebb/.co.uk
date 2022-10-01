import React from "react";
import Markdown from "../Components/Markdown";
import Page from "../Components/Page";

const CV = () => {
  return (
    <Page>
      <Markdown file="cv" />
    </Page>
  );
};

export default CV;
