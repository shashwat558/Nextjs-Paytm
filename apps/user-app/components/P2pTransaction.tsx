import { Card } from "@repo/ui/card"

export const P2pTransaction = ({
    transactions}: {
        transactions: {
            time: Date,
            amount: number,
            provider: number
        }[]
    })=>{

        if(!transactions.length){
            return <Card title="Recent transactions">
                <div className="text-center">
                    No recent Transaction
                </div>
            </Card>
        }
        return <Card title="Recent transactions">

           <div className="">
           {transactions.map(t => <div className="flex justify-between">
                <div>
                <div className="text-sm">
                    Sent INR
                </div>
                <div className="text-slate-600 text-xs">
                    {t.time.toDateString()}

                </div>
                </div>
                <div className="flex flex-col justify-center">
                    + Rs {t.amount/100}
                </div>
            </div>)}
           </div>
        </Card>

    }