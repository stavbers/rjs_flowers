import React, { useState, useRef } from 'react';
import st from './Section3.module.css';

import { CSSTransition } from 'react-transition-group';

function Section3(props) {
    const [showMessage, setShowMessage] = useState(false);
    const nodeRef = useRef(null);
    console.log(props.data);
    const { logo, descr, info, priceTip, title } = props.data;
    

    
    return (
        <div className='container'>
            <div className={st.wrp}>
                <img className={st.img} src={logo} alt={descr} />

                <div className={st.title}>
                    {title}
                    <span className={st.left}></span>
                    <span className={st.right}></span>
                    <span className={st.btn} onClick={() => setShowMessage((prev)=> !prev)}>
                        {info}
                    </span>
                    <span className={st.tip}></span>
                </div>
                <CSSTransition
                in={showMessage}
                nodeRef={nodeRef}
                timeout={300}
                classNames='alert'
                unmountOnExit
                onEnter={() => setShowMessage(true)}
                onExited={() => setShowMessage(false)}
                >
                <p className={st.info} ref={nodeRef}>{descr}</p>
                </CSSTransition>   
            </div>
        </div>
    );
}

export { Section3 };
