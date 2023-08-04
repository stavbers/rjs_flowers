import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import { Description } from '../Descrption';
import { Flowers } from '../FlowersList';
import { FlowersHeader } from '../FlowersHeader';

import '../../style.css'

function Section6(props) {
    const { logo, descr, info, title, flowers } = props.data;
    const [inProp, setInProp] = useState(false);

    function handleClick() {
        setInProp((prev) => !prev);
    }

    return (
        <div className='container'>
            <FlowersHeader
                logo={logo}
                info={info}
                title={title}
                handleClick={handleClick}
                inProp={inProp}
            />
            <Description inProp={inProp} descr={descr} />
            <CSSTransition in={inProp} timeout={1000} classNames='my-flowers'>
                <Flowers flowers={flowers} inProp={inProp} />
            </CSSTransition>
        </div>
    );
}

export { Section6 };
