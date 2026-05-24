
import { NavLink } from '@/ui/layout/cnav'
// import { getSubDirs } from "@/libs/utils";
import { promises as fs } from 'fs';
import path from 'path';

import { PATH_ROOT_APP } from '@/libs/vars'
// import { count } from 'console';

/* TODO:
 *  - build from file names each link thingy
 *  - pass/read text and images
*/

type LocalDirsObject = {
    id: number,
    href: string
}

// Collects and returns a list of sub-directories, given an input directory.
// Return type is { id: number, }
export async function getSubDirs({
    href=""
}) {

    const root_dir = path.join( PATH_ROOT_APP , href );

    const dir_items = await fs.readdir( root_dir, { withFileTypes: true } );
    // console.log('Utils.dir_items:',dir_items);
    
    const subdirs = dir_items.filter((item) => item.isDirectory()).map((item) => item.name);
    // console.log('subdirs:',subdirs);

    const objlst: LocalDirsObject[] = [];   // Must define object used in array to avoid errors. (done above)
    subdirs.map( (subdir) => {
        objlst.push({
            id : objlst.length,
            href : subdir
        });
    });
    // console.log('objlst:',objlst);

    return objlst; // returns: <string[]>
}

// Navigation Bar is always ontop of the page.
export default async function NavBar({
    href="",
}) {
    // console.log('NavBar.href:',href);

    // Get list of sub-directories
    const subdirs =  await getSubDirs({href});
    // console.log('Navbar.subdirs:',subdirs);

    subdirs.map((subdir) => console.log('subdir:',subdir,'  id:',subdir.id));
    
    return (
        <nav className="flex justify-center sticky top-0 z-50 bg-inherit barder  p-2">
            {
                subdirs.map((subdir) => (
                    <NavLink key={subdir.id} href={"/"+subdir.href}>
                        {subdir.href.toUpperCase()}
                    </NavLink>
                )
            )
            }
        </nav>
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