import { Link } from "@inertiajs/react";

export default function NewsCard({ classname = "", children, ...props }) {
    return (
        <>
            <div className={`mb-4 md:mb-0 ` + classname}>
                <img
                    src={props?.article?.image}
                    alt="News"
                    className="object-cover rounded-md"
                />
                {props?.article?.id && (
                    <Link
                        href={route("news.detail", { id: props.article.id })}
                        className={`font-bold mt-4 line-clamp-3 truncate hover:underline ${classname}`}
                    >
                        {props?.article?.title}
                    </Link>
                )}
            </div>
        </>
    );
}
