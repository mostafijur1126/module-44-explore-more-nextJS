"use client"
// import { Link } from "@heroui/react";
import Link from "next/link";
import { ThemeSwitch } from "./ThemeSwitch";
import { signOut, useSession } from "@/lib/auth.client";

const Navbar = () => {
    const {data,isPending} = useSession();
    if(isPending){
        return <div>Loading...</div>
    }
    const user = data?.user;
    return (
        <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
            <header className="flex h-16 items-center justify-between px-6">
                <div className="flex items-center gap-3">
                    {/* <Logo /> */}
                    <p className="font-bold">ACME</p>
                </div>
                <ul className="flex items-center gap-4">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/tasks">Tasks</Link></li>
                    
                    
                </ul>
                <div className="flex gap-2">
                    {user ? <>
                    <p>Welcome, {user.name}</p>
                    <button 
                    onClick={()=> signOut()}
                    >Sign Out</button>
                    </> : <>
                    <li><Link href="/auth/singin">SingIn</Link></li>
                    <li><Link href="/auth/singup">SingUp</Link></li>
                    </> }
                </div>
                <div>
                    <ThemeSwitch></ThemeSwitch>
                </div>
            </header>
        </nav>
    );
};

export default Navbar;