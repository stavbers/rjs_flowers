import React, { useEffect, useState } from 'react';
import {getAll} from '../api'
import { Preloader } from '../components/Preloader';
import { Header } from '../components/Header';
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
        <main className='container'>
            {loading ? <Preloader /> : 
                <Header logo={data.logotype} menu={data.menuTop}/>

            }
        </main>
    );
}

export { Home };
