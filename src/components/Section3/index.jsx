import React, { useState, useRef } from 'react';
import st from './Section3.module.css';


function Section3(props) {


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
                    <span
                        className={st.btn}
                    >
                        {info}
                    </span>
                    <span className={st.tip}></span>
                </div>
                <p className={st.info} >
                        {descr}
                    </p>
            </div>
        </div>
    );
}

export { Section3 };
