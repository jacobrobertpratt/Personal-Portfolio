'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation';

/* TODO:
 *  - build from file names each link thingy
 *  - pass/read text and images
 *  - for-loop sub-directories
*/

// Nav Link lives in the navigation bar at the top of the pages.
export function NavLink({
    children="",
    href=""
}) {
    
    const pathname = usePathname();
    console.log('CLIENT: current path:',pathname);

    const isActive = pathname == href;
    let text_size_change = isActive ? "text-2xl text-slate-800" : "text-md text-slate-500";
    
    return (
        <Link href={href} className={ text_size_change + " hover:translate-y-1 font-bold p-2"}>{children}</Link>
    );
}
