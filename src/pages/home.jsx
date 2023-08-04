import React, { useEffect, useState } from 'react';

import { getAll } from '../api';

import { Preloader } from '../components/Preloader';
import { Header } from '../components/Header';
import { Section1 } from '../components/Section1';
import { Section2 } from '../components/Section2';
import { Section3 } from '../components/Section3';
import { Section4 } from '../components/Section4';
import { Section5 } from '../components/Section5';
import { Section6 } from '../components/Section6';
import { Section7 } from '../components/Section7';
import { Section8 } from '../components/Section8';
import { Section9 } from '../components/Section9';
import { Section10 } from '../components/Section10';
import { Section11 } from '../components/Section11';
import { Slider } from '../components/Slider';
import { Map } from '../components/Map';
import { Socials } from '../components/Socials';
import { Info_block } from '../components/Info_block';
import { Footer } from '../components/Footer';
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
                    {/* <Section2 data={data.scr_2} /> */}
                    {/* <Section3 data={data.scr_3} /> */}
                    {/* <Section4 data={data.scr_4} /> */}
                    {/* <Section5 data={data.scr_5} /> */}
                    {/* <Section6 data={data.scr_6} /> */}
                    {/* <Section7 data={data.scr_7} /> */}
                    {/* <Section8 data={data.scr_8} /> */}
                    {/* <Section9 data={data.scr_9} /> */}
                    {/* <Section10 data={data.scr_10} /> */}
                    {/* <Slider data={data.slider} /> */}
                    {/* <Map data={data.scr_11} /> */}
                    {/* <Section11 data={data.scr_15} /> */}
                    {/* <Socials data={data.scr_13} /> */}
                    {/* <Info_block data={data.scr_12} /> */}
                    {/* <Footer data={data.scr_14} /> */}
                    {/* <Space/> */}
                </>
            )}
        </>
    );
}

export { Home };
