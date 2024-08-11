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
                <div className="text-center p-8">
                    No recent Transaction
                </div>
            </Card>
        }
        return <Card title="Recent transactions">

           <div className="pt-2">
           {transactions.map(t => <div className="flex justify-center">
                <div>
                <div className="text-sm">
                    Recieved INR
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