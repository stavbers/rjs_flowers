import { API_URL } from './config';

const getAll = async () => {
    const resp = await fetch(API_URL + 'flowers');
    return await resp.json();
};

export { getAll };
