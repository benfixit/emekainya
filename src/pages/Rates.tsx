//@ts-nocheck
import { useEffect, useState } from "react";
import { baseCurrency, currencies, providers } from "../assets/constants";
import styles from "./Rates.module.css";
import { Currency } from "../../typings";

type RateType = {
    provider: string;
    value: number
}

const Rates = () => {
    const [activeCurrency, setActiveCurrency] = useState<Currency>(currencies.at(0));
    const [rates, setRates] = useState<RateType>([]);

    useEffect(() => {
        const fetchRates = async () => {
            const promises = providers.map(async (provider) => {
                // set the request
                const response = await fetch(`https://api.wise.com/v1/rates?source=${activeCurrency.title}&target=NGN`, {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${import.meta.env.VITE_WISE_TOKEN}`
                    }
                });

                const result = await response.json();

                return { provider: provider.name, result }; 
            });

            const data = await Promise.allSettled(promises);

            const rates = data.filter(item => item.status === "fulfilled").map(item => {
                return {
                    provider: item.value.provider,
                    rate: item.value.result[0].rate
                }
            });

            setRates(rates);
        }

        fetchRates();

    }, [activeCurrency]);

    // console.log("Wise token ::: ", import.meta.env.VITE_WISE_TOKEN)
    return (
        <section className={styles.wrapper}>
            <h2>Exchange Rates</h2>
            <div>
                {currencies.map(currency => {
                    console.log(activeCurrency.id, currency.id, activeCurrency.id === currency.id, "::: here")
                    return (
                    <button 
                        key={currency.id} 
                        onClick={() => setActiveCurrency(currency)}
                        className={activeCurrency.id === currency.id ? styles.active_button : styles.inactive_button}
                        >
                        {currency.title}
                    </button>
                )
                })}
            </div>
            <div>
                {rates.map((item, index) => {
                    return (
                        <div key={index}>
                            <h3>{item.provider}</h3>
                            <span>{baseCurrency.symbol}{item.rate}</span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Rates;