
import { Main } from "@/gui/core";

export default function ProjectLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Main>
            {children}
        </Main>
    );
}


