import React from 'react';
import style from './Header.module.css';
function Header(props) {
    const { menu } = props;

    return (
        <div className={style.navbar}>
            {menu.map((el, index) => {
                return (
                    <a className={style.link} key={index} href='#!'>
                        {el.toUpperCase()}
                    </a>
                );
            })}
        </div>
    );
}

export { Header };
