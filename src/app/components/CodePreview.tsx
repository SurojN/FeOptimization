import React from "react";
import { Highlight, Token } from "prism-react-renderer";

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
          {tokens.map((line: Token[], i: number) => {
            const lineProps = getLineProps({ line });
            return (
              <div key={i} {...lineProps}>
                {line.map((token: Token, key: number) => {
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
