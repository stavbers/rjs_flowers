import style from './Section1.module.css';
function Section1(props) {
    console.log(props);

    const { actionTitle, newPrice, oldPrice, subTitle, title, btn } =
        props.data;

    return (
        <div className={style.section_1}>
            <div className={style.wrp}>
                <div className={style.action}></div>
                <h1 className={style.title}>{actionTitle}</h1>
                <div className={style.main}>
                    <div className={style.main_wrp}>
                        <p className={style.old_price}>{oldPrice}</p>
                        <p className={style.new_price}>{newPrice}</p>
                        <p className={style.name}>{title}</p>
                        <p className={style.sub_title}>{subTitle}</p>
                    </div>
                </div>
                <button className={style.btn}>{btn}</button>
            </div>
        </div>
    );
}

export { Section1 };
