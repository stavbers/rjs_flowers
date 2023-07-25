import React, {useState } from 'react';
import { CSSTransition} from 'react-transition-group';
import st from './Section3.module.css';
import './style.css'

function Section3(props) {
    const { logo, descr, info, title } = props.data;
    const [inProp, setInProp] = useState(false);
    function  handleClick() {
        setInProp((prev)=> !prev)
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
                        {info}
                    </span>
                    <span className={st.tip}></span>
                </div>
                <CSSTransition
                in={inProp}
                timeout={1000}
                classNames="my-node"
                mountOnEnter
                unmountOnExit
            >
                {(state) => (
                    <p className={st.info} >{descr}</p>
                )}
            </CSSTransition>

            </div>
        </div>
    );
}

export { Section3 };
