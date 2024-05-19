import { Link } from "@inertiajs/react";

export default function NewsCard({ classname = "", ...props }) {
    return (
        <>
            <div className={`` + classname}>
                <img
                    src={props?.article?.image}
                    alt="News"
                    className="object-cover rounded-md w-full h-2/3"
                />
                {props?.article?.id && (
                    <Link
                        href={route("news.detail", { id: props.article.id })}
                        className={`font-bold mt-4 line-clamp-3 hover:underline ${classname}`}
                    >
                        {props?.article?.title}
                    </Link>
                )}
            </div>
        </>
    );
}
