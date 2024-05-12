export default function TitleText({ classname="", children }) {
    return <h2 className={`text-xl 2xl:text-4xl font-bold mb-9 ` + classname}>{children}</h2>;
}
