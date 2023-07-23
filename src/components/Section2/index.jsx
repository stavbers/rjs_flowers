import st from './Section2.module.css';
function Section2(props) {
    console.log(props.data);

    return (
        <div className='container'>
            <div className={st.frame}>
                {props.data.map((el, indx) => {
                    return (
                        <div className={st.block} key={indx}>
                            <img className={st.img} src={el.img} alt={el.title} />
                            <p className={st.info}>{el.title}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
export { Section2 };
