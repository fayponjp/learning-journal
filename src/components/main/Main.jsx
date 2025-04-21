import "./main.css"
import BlogBreadcrumb from "../blog/BlogBreadcrumb"
import { data } from '../../data'

export default function Main() {

    const blogCrumbs = data.map(record => {
        return <BlogBreadcrumb 
            header={record.title}
            date={record.date}
            blurb={record.blurb}
            img={record.background}
            id={record.id}
        />
    })
    return (
        <main>
            <header className="main-header">
                <div className="container">
                    <h3><time dateTime="July 23, 2022">July 23, 2022</time></h3>
                    <h2>Blog one</h2>
                    <p>After several months of learning in the Frontend Developer Career Path, I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects projects and meet like-minded peers.</p>
                </div>
            </header>
            <section className="container blog-container">
                {blogCrumbs}
            </section>
        </main>
    )
}