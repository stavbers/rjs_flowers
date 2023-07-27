import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import { Description } from '../Descrption';
import { Flowers } from '../FlowersList';

import './style.css';
import st from './Section3.module.css';

function Section3(props) {
    const { logo, descr, info, title, flowers } = props.data;
    const [inProp, setInProp] = useState(false);
    function handleClick() {
        setInProp((prev) => !prev);
    }

    return (
        <div className='container'>
            <div className={st.wrp}>
                <img className={st.img} src={logo} alt={descr} />
                <div className={st.title}>
                    {title}
                    <span className={st.left}></span>
                    <span className={st.right}></span>
                    <span className={st.btn} onClick={handleClick}>
                        {inProp ? 'Скрыть' : info}
                    </span>
                    <span className={st.tip}></span>
                </div>
                <Description inProp={inProp} descr={descr} />
            </div>
            <CSSTransition in={inProp} timeout={1000} classNames='my-flowers'>
                <div className={st.bottom_wrp}>
                    <Flowers flowers={flowers} inProp={inProp} />
                </div>
            </CSSTransition>
        </div>
    );
}

export { Section3 };
