// components/Header.tsx

import Link from "next/link";
import { ReactNode } from "react";

/* TODO:
 *  - build from file names each link thingy
 *  - pass/read text and images
*/

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
    // TODO: for-loop sub-directories
    return (
            <Link href={href} className="hover:text-slate-500 text-slate-800 font-bold p-2">{children}</Link>
    );
}

export default function NavigationHeaderRoot() {
    return (
        <div className="flex justify-center">
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