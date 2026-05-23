'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';

/* TODO:
 *  - build from file names each link thingy
 *  - pass/read text and images
 *  - for-loop sub-directories
*/

// const links = [
//     { name: 'HOME', href: '/' },
//     { name: 'About', href: '/about' },
//     { name: 'Services', href: '/services' },
// ];

export function AppLink ({
    children="",
    href="/",
    className=""
}) {
    // Sets standard 
    let _className="hover:text-slate-500 text-slate-800 "+className;
    // console.log('_className: '+_className)
    return (
        <Link href={href} className={_className}>{children}</Link>
    );
}

function NavLink({
    children="",
    href=""
}) {
    const pathname = usePathname();
    const isActive = pathname == href;
    let text_size_change = isActive ? "text-2xl text-slate-800" : "text-xl text-slate-500";
    
    return (
            <Link href={href} className={ text_size_change + " hover:translate-y-1 font-bold p-2"}>{children}</Link>
    );
}

export default function NavBar() {

    return (
        <div className="flex justify-center p-2">
            <NavLink href="/">HOME</NavLink>
            <NavLink href="/projects">PROJECTS</NavLink>
        </div>
    );
}

/*

<AppLink href={href} className="hover:text-slate-500 text-slate-800 font-bold">{children}</AppLink>

<NavLink href="/">HOME</NavLink>
<NavLink href="/projects">PROJECTS</NavLink>

<a className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-gray-500 font-bold" href="/">Home</a>
  <li className="mr-1">
    <a className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#">Tab</a>
  </li>
  <li className="mr-1">
    <a className="bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold" href="#">Tab</a>
  </li>
  <li className="mr-1">
    <a className="bg-white inline-block py-2 px-4 text-gray-400 font-semibold" href="#">Tab</a>
  </li>

    <nav className="flex items-center justify-between flex-wrap p-1">
        <NavigationLink label="HOME" href="/" />
        <NavigationLink label="PROJECTS" href="/projects" />
    </nav>
*/