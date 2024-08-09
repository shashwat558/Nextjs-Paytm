"use serverS"
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import prisma from "@repo/db/client";


export async function createOnRamptsnx({amount, provider}:{ amount:number, provider:string}){
    const session = await getServerSession(authOptions);
    const userId = session.user?.id;
    const token = Math.random().toString();
    if(!userId){
        return {
            message: "User not logged in"
        }
    }
    prisma.onRampTransaction.create({
        data: {
            userId,
            amount: amount,
            status: "Processing",
            provider: provider,
            startTime: new Date(),
            token: token
        }
    })
    
}