import './recentposts.css'
import BlogBreadcrumb from '../blog/BlogBreadcrumb'

import { useOutletContext } from 'react-router'

export default function RecentPosts({children}) {
    const blogData = useOutletContext()

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

    return (
        <div className='container blog-container'>
            {children || blogCrumbs}
        </div>
    )
}