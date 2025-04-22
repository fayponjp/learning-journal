import './blog.css'
import { useParams } from 'react-router'
import { useState, useEffect } from 'react'
import { getJournalEntry } from '../../../api'
import Markdown from 'react-markdown'
import RecentPosts from '../recent-posts/RecentPosts'

export default function Blog() {
    const [journal, setJournal] = useState(null)
    const [error, setError] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        async function getJournal() {
            try {
                const data = await getJournalEntry(id)
                setJournal(data)
            } catch (err) {
                setError(err)
            }
        }

        getJournal()
    }, [id])

    return  (
        <>
            {
                journal && 
                <div className='container journal-entry'>
                    <div className='journal-container'>
                        <time>{journal.date}</time>
                        <h1>{journal.title}</h1>
                        <p>{journal.blurb}</p>
                    </div>
                    <img src={journal.background} />
                    <div className='journal-container'>
                        <Markdown>
                            {journal.content}
                        </Markdown>
                    </div>
                    <RecentPosts/>
                </div>
            }
        </>
    )
}