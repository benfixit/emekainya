import { Currency, Provider } from "../../typings"

export const currencies: Currency[] = [
    {
        id: 1,
        title: "USD",
        symbol: "$"
    },
    {
        id: 2,
        title: "EUR",
        symbol: "€"
    },
    {
        id: 3,
        title: "GBP",
        symbol: "£"
    },

]

export const baseCurrency: Currency = {
    id: 4,
    title: "Naira",
    symbol: "₦"
}

export const providers: Provider[] = [
    {
        id: 1,
        name: "Wise",
        api: ""
    },
    // {
    //     id: 2,
    //     name: "TapTap",
    //     api: ""
    // },
    // {
    //     id: 3,
    //     name: "Afriex",
    //     api: ""
    // },
    // {
    //     id: 4,
    //     name: "Nala",
    //     api: ""
    // },
    // {
    //     id: 5,
    //     name: "Remitly",
    //     api: ""
    // },
    // {
    //     id: 6,
    //     name: "Send",
    //     api: ""
    // }
]
