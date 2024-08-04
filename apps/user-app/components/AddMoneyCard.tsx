"use client"

import { useState } from "react"

const SUPPORTED_BANKS = [{
    name: "HDFC Bank",
    redirectUrl: "https://netbanking.hdfcbank.com"
},{
    name: "Axis Bank",
    redirectUrl: "https://netbanking.axisbank.com"
}]


export const addMoney = () => {
    const [redirectUrl, setRedirectedUrl] = useState(SUPPORTED_BANKS[0]?.redirectUrl);
}