import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { marked } from "marked";
import hljs from "highlight.js";

marked.setOptions({
  highlight(code, lang, callback) {
    const language = hljs.getLanguage(lang) ? lang : "plaintext";
    return hljs.highlight(code, { language }).value;
  },
  breaks: true,
});

export const App = () => {
  const [text, setText] = useState(`# H1

## Author

- ![author avatar](https://github.com/wangrunlin.png)
- [Author website](https://wangrunlin.com)

## Code

\`code\`

\`\`\`shell
# get linux version
cat /etc/issue
\`\`\`

> this is quote

- this is one **bold**
  `);

  return (
    <Container>
      <textarea
        name="editor"
        id="editor"
        cols={30}
        rows={10}
        onChange={(e) => setText(e.target.value)}
        defaultValue={text}
      ></textarea>
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked.parse(text) }}
      ></div>
    </Container>
  );
};
