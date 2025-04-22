import Footer from './footer/Footer'
import Header from './header/Header'
import { Outlet } from 'react-router'

import { useState, useEffect } from 'react'
import { getJournalEntries } from '../../api'

export default function Layout() {
    const [blogData, setBlogData] = useState([])
    const [error, setError] = useState()

    useEffect(() => {
        async function loadEntries() {
            try {
                const data = await getJournalEntries(3)
                setBlogData(data)
            } catch (err) {
                setError(err)
            }
        }

        loadEntries()
    }, [])

    return (
        <>
            <Header />
            <Outlet context={blogData} />
            <Footer />
        </>
    )
}