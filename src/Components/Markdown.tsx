import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import styles from "./Markdown.module.scss";

type Props = {
  file: string;
};

const Markdown: React.FC<Props> = ({ file }) => {
  const [markdown, setMarkdown] = React.useState("");

  useEffect(() => {
    const fetchMarkdown = async () => {
      const rawFile = await import(`../copy/${file}.md`);
      const response = await fetch(rawFile.default);
      const text = await response.text();
      setMarkdown(text);
    };

    fetchMarkdown();
  }, [file]);

  return (
    <ReactMarkdown
      className={styles.container}
      components={{
        a: ({ node, ...props }) => {
          if (props.href?.startsWith("/"))
            return <Link to={props.href}>{props.children}</Link>;

          // eslint-disable-next-line jsx-a11y/anchor-has-content
          return <a target="_blank" rel="noopener noreferrer" {...props} />;
        },
      }}
    >
      {markdown}
    </ReactMarkdown>
  );
};

export default Markdown;
