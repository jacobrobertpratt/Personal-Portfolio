
export default function ProjectLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
      return (
          <section className="flex flex-col">
              {children}
          </section>
  );
}

//<nav className="sticky top-0 w-full bg-inherit border-b shadow-sm z-50">
//    <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-center">
//        <div className="flex space-x-8 font-medium">
//            <a href="/" className="hover:text-gray-500 transition">HOME</a>
//            <a href="/projects" className="hover:text-gray-500 transition">PROJECTS</a>
//        </div>
//    </div>
//</nav>

//<a href="#" className="hover:text-blue-600 transition">Pricing</a>aria-current="page" className="rounded-md
//<a href="#" className="hover:text-blue-600 transition">About</a>
