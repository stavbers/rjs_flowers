import style from './Section11.module.css';
function Section11(props) {
    const { data } = props;
    // console.log(data);

    // console.log(data[0], data[1], data[2]);

    return (
        <div className='container'>
            <div className={style.delivery}>
                <img className={style.logo} src={data[0].img} alt={data[2].text} />
                <img className={style.img} src={data[1].img} alt={data[2].text} />
                <div className='other'>
                    <p className={style.title}>{'НУЖЕН БУКЕТ ЗВОНИ'}</p>
                    <a className={style.link} href={data[2].link}>
                        {data[2].link}
                    </a>
                    <p className={style.info}>{data[2].text}</p>
                </div>
            </div>
        </div>
    );
}

export { Section11 };
