// components/Header.tsx

import Link from "next/link";
import { TextP, TextTitle } from "./text";

function CardTitle({
    children=""
}) {
    return (
        <TextTitle>{children}</TextTitle>
    );
}

function CardParagraph({
    children=""
}) {
    return (
        <TextP>{children}</TextP>
    );
}

export default function Card({
    children="",
    href="/",
    title=""
}) {
  return (
    <div className="bg-inherit hover:shadow-md border border-slate-200 rounded-lg p-3 m-2">
        <Link href={href}>
            <CardTitle>{title}</CardTitle>
            <CardParagraph>{children}</CardParagraph>
        </Link>
    </div>
    );
}





// <p className="text-slate-600 leading-normal font-light">{children}</p> 

//<header className="flex ">
//      
//  <div className="flex items-center justify-between">
//      
//    <div className="text-xl font-semibold">
//      MyApp
//    </div>
//
//    <nav>
//      <ul className="flex items-center gap-6 text-sm font-medium">
//        
//        <li>
//            <Link href="/" className="transition hover:text-blue-600">
//                Home
//            </Link>
//        </li>
//
//        <li>
//            <Link href="/projects" className="transition hover:text-blue-600">
//                Projects
//            </Link>
//        </li>
//      
//      </ul>
//    </nav>
//  </div>
//      
//</header>

//<div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
