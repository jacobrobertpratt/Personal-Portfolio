
export function TextTitle({
    children="",
    className=""
}) {
    let _clsnme = "text-slate-800 text-xl font-semibold "+className;
    return (
        <div className={_clsnme}>{children}</div>
    );
}

export function TextP({
    children="",
    className=""
}) {
    // let _clsnme = "text-slate-800 text-xl font-semibold"+className;
    let _clsnme = "text-slate-600 leading-normal font-light "+className;
    return (
        <div className={_clsnme}>{children}</div>
    );
}