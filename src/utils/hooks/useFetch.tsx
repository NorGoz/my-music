import { useState, useEffect, useRef } from 'react';

export enum HttpMethod {
    GET = 'GET',
    POST = 'POST',
    DELETE = 'DELETE',
    PUT = 'PUT',
    PATCH = 'PATCH',
}
const initOptions = {
    method: HttpMethod.GET,
    headers: {
        'content-type': 'application/json;charset=UTF-8',
    },
    body: {},
};
export const useFetch = (url = '', value = initOptions) => {
    const cache = useRef<any>({});
    const [address, setAddress] = useState<string>(url);
    const [status, setStatus] = useState<string>('idle');
    const [form, setForm] = useState(value);
    const [data, setData] = useState();
    const fetchData = (url: string, value = initOptions) => {
        setAddress(url);
        setForm(value);
    };

    useEffect(() => {
        if (!address || !address.trim()) return;

        const fetchDataGet = async () => {
            setStatus('fetching');
            if (cache.current[address]) {
                const data = cache.current[address];
                setData(data);
                setStatus('fetched');
            } else {
                const response = await fetch(address, {
                    method: form.method,
                    credentials: 'include',
                    headers: form.headers,
                    body:
                        form.method === HttpMethod.GET ? null : JSON.stringify(form.body),
                });
                const data = await response.json();
                cache.current[address] = data;
                setData(data);
                setStatus('fetched');
            }
        };
        fetchDataGet();
    }, [address, form.method]);
    return [data, status, fetchData, cache] as const;
};