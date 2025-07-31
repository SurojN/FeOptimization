import React from "react";
import { Highlight } from "prism-react-renderer";

interface Props {
  code: string;
  language?: string;
}

export default function CodePreview({ code, language = "tsx" }: Props) {
  return (
    <Highlight code={code.trim()} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{
            ...style,
            padding: "16px",
            borderRadius: 8,
            overflowX: "auto",
            fontSize: "14px",
          }}
        >
          {tokens.map((line, i) => {
            const lineProps = getLineProps({ line });
            return (
              <div key={i} {...lineProps}>
                {line.map((token: any, key: any) => {
                  const tokenProps = getTokenProps({ token });
                  return <span key={key} {...tokenProps} />;
                })}
              </div>
            );
          })}
        </pre>
      )}
    </Highlight>
  );
}
