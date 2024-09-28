import React, {Fragment} from 'react';
import {Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import CPPConfig from "./CPPConfig";
import {Link} from "react-router-dom";

function Function(props) {
    return (
        <div className="mt-2">
            {
                CPPConfig.function && CPPConfig.function.map((item, index) => (
                    <Fragment>
                        <h1 className="globalDescription"><strong
                            className="title">{item.title}</strong>{item.description}
                        </h1>
                        {item.code && (<SyntaxHighlighter className="mt-3" language="javascript"
                                                          style={solarizedlight}>{item.code}</SyntaxHighlighter>
                        )}
                        {
                            item.example && item.example.map((item, index) => (
                                <SyntaxHighlighter className="mt-3" language="javascript"
                                                   style={solarizedlight}>{item.code}</SyntaxHighlighter>
                            ))
                        }
                        <h4 className="globalDescription">{item.descriptionCode}</h4>
                        <ol>
                            {
                                item.minTitle && item.minTitle.map((item, index) => (
                                    <Fragment>
                                        <li><h1 className="globalDescription"><strong
                                            className="subTitle text-dark">{item.title}</strong>
                                        </h1>{item.description}</li>
                                        {
                                            item.code && (
                                                <SyntaxHighlighter className="mt-3" language="javascript"
                                                                   style={solarizedlight}>{item.code}</SyntaxHighlighter>
                                            )
                                        }
                                        <h4 className="globalDescription">{item.descriptionCode}</h4>
                                    </Fragment>
                                ))
                            }
                        </ol>
                        <div className="tag">
                            {
                                item.tags && item.tags.map(tag => (
                                    <h1 className="title"><Link to={item.linkTag}
                                                                className="px-1"><strong>{tag}</strong></Link></h1>
                                ))
                            }
                        </div>
                    </Fragment>
                ))
            }
        </div>
    );
}

export default Function;
