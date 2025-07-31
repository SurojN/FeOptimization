import React from "react";
import { Highlight, Token } from "prism-react-renderer";

interface Props {
  code: string;
  language?: string;
  title?: string;
  description?: React.ReactNode;
}

export default function CodePreview({
  code,
  language = "tsx",
  title,
  description,
}: Props) {
  return (
    <div className="flex flex-col md:flex-row gap-6 my-6">
      <div className="flex-1">
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
      </div>
      {(title || description) && (
        <div className="flex-1 bg-gray-50 rounded-lg p-4 text-gray-800 text-base">
          {title && <h1 className="text-xl font-bold mb-2">{title}</h1>}
          {description && <div>{description}</div>}
        </div>
      )}
    </div>
  );
}
