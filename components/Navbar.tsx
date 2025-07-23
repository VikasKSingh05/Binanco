"use client";
import React from 'react'
import Logo, { LogoMob } from './Logo'
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import { buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';
import { UserButton } from '@clerk/nextjs';
import { ThemeSwitcherBtn } from './ThemeSwitcherBtn';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from './ui/sheet'
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden' 

const Navbar = () => {
  return (
     <>
        <DesktopNav/>  
        <MobileNav/>
     </>
  )
}

const items = [
    {label: 'Dashboard', link: '/dashboard'},
    {label:'Transactions', link: '/transactions'},
    {label: 'Manage', link   : '/manage',}
]  


const DesktopNav = () => {
    return(
        <div className="hidden border-separate border-b bg-background md:block">
            <nav className='container flex items-center justify-between px-8'>
                <div className='flex h-[80px] min-h--[60px] items-center gap-x-4  '>
                    <Logo />
                    <div className="flex h-full">
                        {items.map((item) => (
                            <NavbarItem key={item.label} label={item.label} link={item.link} />))}
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <ThemeSwitcherBtn/>
                    <UserButton afterSwitchSessionUrl='/sign-in'/>
                </div>
            </nav>
        </div>
    )
}

function NavbarItem({label, link}: {label: string, link: string}) {
    const pathname = usePathname();
    const isActive = pathname === link;   
    return (
        <div className="relative flex items-center">
            <Link
                href={link}
                className={cn(
                    buttonVariants({ variant: 'ghost' }),
                    "w-full justify-start text-lg text-muted-foreground hover:text-foreground",
                    isActive && "text-foreground"
                )}
            >
                {label}
            </Link>
            {
                isActive && (
                    <div className="absolute -bottom-[2px] left-1/2 hidden h-[2px] w-[80%] -translate-x-1/2 rounded-xl bg-foreground md:block"></div>
                )
            }
        </div>
    )
}
const MobileNav = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div className="block border-separate bg-background md:hidden">
            <nav className='container flex items-center justify-between px-8 '>
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button variant={'ghost'} size={'icon'}>
                            <Menu />
                        </Button>
                    </SheetTrigger>
                    <SheetContent className="w-[400px] sm:w-[540px]" side='left'>
                      <VisuallyHidden>
                        <SheetTitle>Navigation Menu</SheetTitle>
                      </VisuallyHidden>
                      <Logo/>
                      <div className="flex flex-col gap-1 pt-4">
                        {items.map((item) => (
                          <Link
                            key={item.label}
                            href={item.link}
                            className={cn(
                              buttonVariants({ variant: 'ghost' }),
                              "w-full justify-start text-lg text-muted-foreground hover:text-foreground"
                            )}
                            onClick={() => setIsOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </SheetContent>
                </Sheet>
                <div className="flex h-[80px] min-h-[60px] items-center gap-x-4">
                    <LogoMob />
                </div>
                <div className="flex items-center gap-2">
                    <ThemeSwitcherBtn />
                    <UserButton afterSwitchSessionUrl='/sign-in' />
                </div>
            </nav>
        </div>
    )
}

export default Navbar