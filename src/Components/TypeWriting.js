import React from 'react';
import Typewriter from 'typewriter-effect';

function TypeWriting({ text }) {
    return (
        <div className="typewriter-container">
            <Typewriter
                options={{
                    autoStart: true,
                    loop: true,
                    delay: 75,
                }}
                onInit={(typewriter) => {
                    typewriter
                        .typeString(text)
                        .pauseFor(2500)
                        .deleteAll()
                        .start();
                }}
            />
        </div>
    );
}

export default TypeWriting;
