import st from './Section7.module.css';
function Section7(props) {
    // console.log(props);
    const { title, bg, img1, img2, img3, img4, img5, img6, text1 } = props.data;
    return (
        <div className={st.wrp} style={{ backgroundImage: `url(${bg})` }}>
            <div className='container'>
                <h2 className={st.title}>{title}</h2>
                <div className={st.wrp_inner}>
                    <span className={(st.text_phone, st.text)}>
                        Вы нам звоните или отправляете заявку с сайта
                    </span>
                    <img className={st.img_phone} src={img1} alt='' />
                    <img className={st.img_manag} src={img5} alt='' />
                    <span className={(st.text_manag, st.text)}>
                        Менеджер уточняет детали
                    </span>
                    <span className={(st.text_bag, st.text)}>
                        Вы оплачиваете по карте, либо можете оплатить курьеру
                        наличными при доставке букета
                    </span>
                    <img className={st.img_bag} src={img2} alt='' />
                    <img className={st.img_card} src={img3} alt='' />
                    <img className={st.img_flowers} src={img4} alt='' />
                    <span className={(st.text_flowers, st.text)}>
                        Флорист собирает букет
                    </span>
                    <span className={(st.text_delivery, st.text)}>{text1}</span>
                    <img className={st.img_delivery} src={img6} alt='' />
                </div>
            </div>
        </div>
    );
}

export { Section7 };
