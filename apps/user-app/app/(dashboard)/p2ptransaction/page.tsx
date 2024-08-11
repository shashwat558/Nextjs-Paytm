import React from 'react'
import { SendCard } from '../../../components/SendCard'
import { getServerSession } from 'next-auth';
import { authOptions } from '../../lib/auth';
import prisma from '@repo/db/client';
import { Center } from '@repo/ui/center';
import { Card } from '@repo/ui/card';
import { P2pTransaction } from '../../../components/P2pTransaction';


async function getP2ptransactions() {
  const session = await getServerSession(authOptions);
  const txns = await prisma.p2pTransfer.findMany({
      where: {
          fromUserId: session?.user?.id
      }
  })
  return txns.map(t => ({
      time: t.timestamp,
      amount: t.amount,
      provider: t.fromUserId
  }))
}

export default async function () {
  const p2pTransactions = await getP2ptransactions();  
  return <div className='w-full'>
    
      <SendCard />
      <P2pTransaction transactions={p2pTransactions}/>
   
  </div>
}