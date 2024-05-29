import { useEffect, useState } from 'react';

const useCurrencyInfo = (currency) => {
    const [currencyData, setCurrencyData] = useState({});

    useEffect(() => {
        const fetchCurrencyData = async () => {
            try {
                const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`);
                const data = await response.json();
                console.log("Fetched data:", data); // Check fetched data here
                setCurrencyData(data.rates);
            } catch (error) {
                console.error('Error fetching currency data:', error);
            }
        };

        fetchCurrencyData();
    }, [currency]);

    return currencyData;
};

export default useCurrencyInfo;
