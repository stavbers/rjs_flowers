import React, { useEffect, useState } from 'react';
import { getAll } from '../api';
import { Preloader } from '../components/Preloader';
import { Header } from '../components/Header';
import { Section11 } from '../components/Section11';
function Home() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    useEffect(() => {
        getAll().then((data) => {
            setLoading(false);
            setData(JSON.parse(data[0].name));
        });
    }, []);
    return (
        <>
                {loading ? (
                    <Preloader />
                ) : (
                    <>
                        {/* {console.log(data)} */}
                        <Header logo={data.logotype} menu={data.menuTop} />
                        <Section11 data={data.scr_15} />
                    </>
                )}
        </>
    );
}

export { Home };
