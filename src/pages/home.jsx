import React, { useEffect, useState } from 'react';

import { getAll } from '../api';

import { Preloader } from '../components/Preloader';
import { Header } from '../components/Header';
import { Section1 } from '../components/Section1';
import { Section2 } from '../components/Section2';
import { Section3 } from '../components/Section3';
import { Section11 } from '../components/Section11';
import { Space } from '../components/Space';
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
                    <Section1 data={data.scr_1} />
                    <Section2 data={data.scr_2} />
                    <Section3 data={data.scr_3} />
                    <Space/>
                </>
            )}
        </>
    );
}

export { Home };
