// Section container for this application.
export function Sec({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section className="flex bg-inherit p-2 ">
            {children}
        </section>
    );
}