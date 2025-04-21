import "./breadcrumb.css"

export default function BlogBreadcrumb({header, date, blurb, img, id}) {
    return (
        <article key={id} className='breadcrumb'>
            <img src={img} alt="" />
            <time dateTime={date}>{date}</time>
            <h2>{header}</h2>
            <p>
                {blurb}
            </p>
        </article>
    )
}