"use client"

import { Select } from "@repo/ui/Select";
import { TextInput } from "@repo/ui/TextInput";
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { useState } from "react"
import { createOnRamptsnx } from "../app/lib/actions/createOnRamptsxns";

const SUPPORTED_BANKS = [{
    name: "HDFC Bank",
    redirectUrl: "https://netbanking.hdfcbank.com"
},{
    name: "Axis Bank",
    redirectUrl: "https://netbanking.axisbank.com"
}]


export const AddMoney = async () => {
    const [redirectUrl, setRedirectedUrl] = useState(SUPPORTED_BANKS[0]?.redirectUrl);
    const [amount, setAmount] = useState(0);
    const [provider, setProvider] = useState(SUPPORTED_BANKS[0]?.name || "");
    return <Card title="Add Money">
        <div className="w-full">
            <TextInput label={"Amount"} placeholder={"Amount"} onChange={(value) => {
                setAmount(value)

            }}/>
            <div className="py-4 text-left">
                Bank
            </div>
            <Select onSelect={(value) => {
                setRedirectedUrl(SUPPORTED_BANKS.find(x => x.name === value)?.redirectUrl || "")
                setProvider(SUPPORTED_BANKS.find(x => x.name === value)?.name||"")
            }
            }
            
             options={SUPPORTED_BANKS.map((x) => ({
                key: x.name,
                value:x.name
            }))}/>
            <div className="flex justify-center pt-4">
                <Button onClick={async () => {
                    await createOnRamptsnx(amount * 100, provider)
                    window.location.href = redirectUrl || ""
                }}>Add Money</Button>
            </div>
        </div>
    </Card>
}