import React, {Fragment} from 'react';
import jsLanguageConfig from "./JSLanguageConfig";
import {Link} from "react-router-dom";

function Javascript(props) {
    return (
        <div className="text-start  link-light-3">
            {
                jsLanguageConfig && jsLanguageConfig.basic.map(language => (
                    <Fragment>
                        {language.title && (<h1 className="globalDescription"><strong
                            className="title">{language.title}</strong>{language.description}</h1>)}
                        {
                            language.minTitle &&
                            <ol>
                                {
                                    language.minTitle.map(minTitle => (
                                        <li key={minTitle}>{minTitle.title}{minTitle.description}</li>

                                    ))
                                }
                            </ol>
                        }
                        <div className="mt-3 w-100 d-flex">
                            {
                                language.tags && language.tags.map(tag => (
                                    <h1 className="title"><Link to={language.linkTag} className="px-1" ><strong>{tag}</strong></Link></h1>
                                ))
                            }
                        </div>

                    </Fragment>
                ))
            }

        </div>
    );
}

export default Javascript;
