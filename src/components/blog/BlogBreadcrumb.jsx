import "./breadcrumb.css"
import { Link } from 'react-router'

export default function BlogBreadcrumb({header, date, blurb, img, id}) {
    return (
        <article className='breadcrumb'>
            <Link
                to={`/journal/${id}`}
            >
                <img src={img} alt="" />
                <time dateTime={date}>{date}</time>
                <h2>{header}</h2>
                <p>
                    {blurb}
                </p>
            </Link>
        </article>
    )
}