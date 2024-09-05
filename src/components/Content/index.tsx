import React from "react";

import { ContentProps } from "./types";
import styles from "./styles";

const Content: React.FC<ContentProps> = ({ title }) => {
  return (
    <div className="content">
      <h1 className="content__title">{title}</h1>

      <style jsx>{styles}</style>
    </div>
  );
};

export default Content;
