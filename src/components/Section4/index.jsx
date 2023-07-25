import React, { useState, useRef } from 'react';

import { CSSTransition } from 'react-transition-group';

import './style.css';

function Section4() {
    const [showMessage, setShowMessage] = useState(false);
    const nodeRef = useRef(null);
    return (
        <div>
                <button onClick={() => setShowMessage((prev)=> !prev)}>
                    Show Message
                </button>
            <CSSTransition
                in={showMessage}
                nodeRef={nodeRef}
                timeout={300}
                classNames='alert'
                unmountOnExit
                onEnter={() => setShowMessage(true)}
                onExited={() => setShowMessage(false)}
            >
                <div ref={nodeRef} onClose={() => setShowMessage(false)}>
                    <h1>Animated alert message</h1>
                    <p>
                        This alert message is being transitioned in and out of
                        the DOM.
                    </p>
                </div>
            </CSSTransition>
        </div>
    );
}
export { Section4 };
