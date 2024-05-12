import { Link } from "@inertiajs/react";

export default function WhatsNewContent({
    className = "",
    children,
    ...props
}) {
    return (
        <>
            <div className="mb-4 col-span-1">
                {props?.article?.id && (
                    <Link
                        href={route("news.detail", { id: props.article.id })}
                        className="text-xl font-bold hover:underline"
                    >
                        {props?.article?.title}
                    </Link>
                )}
                <div
                    className="text-justify"
                    dangerouslySetInnerHTML={{
                        __html: props?.article?.description,
                    }}
                ></div>
            </div>
        </>
    );
}
