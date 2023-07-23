import React, { useEffect, useState } from 'react';
import {getAll} from '../api'
import { Preloader } from '../components/Preloader';
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
           <div>
                    <img src={data.logotype} alt="" style={{width: '300px'}} />
                {console.log(data)}

           </div> 

            }
        </main>
    );
}

export { Home };
