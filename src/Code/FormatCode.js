import React from 'react';
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";

function FormatCode({code,language,theme}) {
    return (
        <SyntaxHighlighter className="Xoverflow" language={language} style={theme}>
            {code}
        </SyntaxHighlighter>
    );
}

export default FormatCode;