import "./main.css"
import { useState, useEffect } from 'react'
import BlogBreadcrumb from "../blog/BlogBreadcrumb"
import RecentPosts from '../recent-posts/RecentPosts'
import { getJournalEntries } from '../../../api'

export default function Content() {

    const [blogData, setBlogData] = useState([])
    const [error, setError] = useState()

    useEffect(() => {
        async function loadEntries() {
            try {
                const data = await getJournalEntries()
                setBlogData(data)
            } catch (err) {
                setError(err)
            }
        }

        loadEntries()
    }, [])

    const blogCrumbs = blogData.map(record => {
        return <BlogBreadcrumb 
            header={record.title}
            date={record.date}
            blurb={record.blurb}
            img={record.background}
            id={record.id}
            key={record.id}
        />
    })

    const blogHeader = blogData[0] || {
        title: 'There and Back again',
        date: 'January, 2025',
        background: '/backgrounds/cover.jpg',
        blurb: `I'm taking a front-end course to brush on my web development skills. Hopefully we'll be at or even beyond where I was before I moved to a different platform in terms of skill. Here's a little journal for posterity and practice.`
    }
    return (
        <main>
            <header className="main-header"
                style={{backgroundImage: `url(${blogHeader.background})`}}
            >
                <div className="container main-header-text">
                    <time dateTime={blogHeader.date}>{blogHeader.date}</time>
                    <h2>{blogHeader.title}</h2>
                    <p>{blogHeader.blurb}</p>
                </div>
            </header>
            <RecentPosts>
                {blogCrumbs}
            </RecentPosts>
        </main>
    )
}