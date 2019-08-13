import React, {useState, useEffect} from 'react';


export const useLocalStorage = (key, value) =>{
    const items = localStorage.getItem(key);
    const [state, setState] = useState(items ? JSON.parse(items) : value);

    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(state));
    }, [state]);


    return [state, setState];
};
