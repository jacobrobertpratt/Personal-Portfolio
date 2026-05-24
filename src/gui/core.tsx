
/**
 * TODO:
 *  - make structure that defines class definitions. This would naturally inherit tailwind names ... maybe.
 *  - 
 * */
interface PropsTypeInter {
    color?: string | '',
    shape?: string | '',
    active?: string | '',
    hover?: string | '',
    size?: string | '',
    dark?: string | ''
}

const classmain: PropsTypeInter = {
    color:'bg-slate-400',
    hover:'bg-slate-800'
};

// const classprops = {
//     main: { bg:'bg-slate-100' },
//     section: { }
// }

// function build_class() {
//     for (const [key, value] of Object.entries(classmain)) {
//         console.log(`${key}: ${value}`);
//     }
//     return null;
// }

export function Body({...props}) {
    return ( <body {...props}>{props.children}</body> );
}

export function Main({...props}) {
    // props.className = classmain.color+' '+{...props.className};
    return ( <main {...props}>{props.children}</main> );
}

// General purpose container
export function Page({...props}) {
    return ( <div {...props}>{props.children}</div> );
}

// Wraps the main function //
export function Section({...props}) {
    return ( <section {...props}>{props.children}</section>);
}

export function Header({...props}) {
    return ( <header {...props}>{props.children}</header>);
}

export function Footer({...props}) {
    return ( <footer {...props}>{props.children}</footer>);
}

export function Nav({...props}) {
    return ( <nav {...props}>{props.children}</nav>);
}

// interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   variant?: 'primary' | 'secondary';
// }

// interface CustomTagProps extends React.HTMLAttributes<React.HTMLElementType> {
//     active?: 'yes' | 'no';
// }

// type ClassNameType = {
//     tag: string
// }

// class ClassName {
//     constructor(classname: ClassNameType){
//         self.classname = classname;
//     }
// }

// const ClassName = {

// }



// import React from 'react';

// // 1. Define custom props and extend standard HTML button attributes
// interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   variant?: 'primary' | 'secondary';
// }

// const CustomButton = ({ variant = 'primary', ...props }: CustomButtonProps) => {
//   // 2. Destructure custom props and spread the rest onto the HTML element
//   const className = variant === 'primary' ? 'bg-blue-500' : 'bg-gray-500';

//   return (
//     <button className={className} {...props}>
//       {props.children}
//     </button>
//   );
// };

// // Usage in a Next.js page
// export default function Page() {
//   return (
//     <CustomButton 
//       variant="primary" 
//       onClick={() => console.log('Clicked!')} 
//       type="submit"
//     >
//       Submit
//     </CustomButton>
//   );
// }