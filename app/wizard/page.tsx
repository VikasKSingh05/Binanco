import { currentUser } from '@clerk/nextjs/server'
import { Separator } from '@radix-ui/react-dropdown-menu';
import { redirect } from 'next/navigation';
import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Logo from '@/components/Logo';
import { CurrencyComboBox } from '@/components/CurrencyComboBox';

const page = async() => {
    const user = await currentUser();
    if(!user) {
        redirect('/sign-in');
    }
  return (
    <div className='container flex max-w-2xl flex-col justify-between items-center gap-4'>
        <div>
            <h1 className='text-center text-3xl'>Welcome,
                <span className='ml-2 font-bold'>
                 {user.firstName || "User"}
                </span>
            </h1>
            <h2 className='mt-4 text-center text-base text-muted-froeground'>
                Let&apos;s get started with your currency setup.
            </h2>
            <h3 className="mt-2 text-center text-sm text-muted-foreground">You can change settings at any time</h3>
        </div>
        <Separator/>
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Currency</CardTitle>
                <CardDescription>Set your default currency for transactions</CardDescription>
            </CardHeader>
            <CardContent>
                <CurrencyComboBox/>
            </CardContent>
        </Card>
        <Separator/>
        <Button className='w-full' asChild>
            <Link href={"/dashboard"}>I&apos;m done! Take me to the Dashboard</Link>
        </Button>
        <div className="mt-8">
            <Logo/>
        </div>
    </div>
  );
}

export default page