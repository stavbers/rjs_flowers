import React, {useState, useEffect} from 'react';
import { MobMenu } from '../MobMenu';
import style from './Header.module.css';
function Header(props) {
    const { menu } = props;
    const [width, setWidth] = useState(document.body.clientWidth)

    
    return (
        <div className='wrp'>
        {(width < 780) ? <MobMenu/> : 
            <div className={style.navbar}>
                {menu.map((el, index) => {
                    return (
                        <a className={style.link} key={index} href='#!'>
                            {el.toUpperCase()}
                        </a>
                    );
                })}
            </div>
        
        }

        </div>
    );
}

export { Header };
