import './about.css'
import RecentPosts from '../components/recent-posts/RecentPosts'

export default function About() {
    return (
        <>
            <header className='about-header container'>
                <img src='dev-jp-02.jpg' alt='Profile image of JP' />
                <div>
                    <h2>Hey there! My name is Fayps, and welcome to my learning journal.</h2>
                    <p>I'm committing these next few months aiming to re-master the front-end development skills I haven't been able to use since transitioning to the .Net development platform. I've been taking freelance work as a front-end developer in the latter half of 2024 as a means to jump back to web-development, and upon taking this course early 2025 I'm taking this opportunity to make a record of my thoughts and progress.</p>
                </div>
            </header>
            <div className='about-container'>
                <h2>How this started</h2>
                <p>I'm a software developer that's worked on web and .Net applications, based in the Philippines. I've been working in the software industry both as a developer and a team lead.</p>
                <p>As a freelancer in recent months, I've realized how much I've been depending on generative AI to accomplish my freelance work, and while it's a powerful and incredibly useful tool for productivity, I began to worry that my own skills have been lagging behind. Skills that I know I've used and should be familiar with I've been delegating to AI prompts, and that realization served as the catalyst for this course of action.</p>
                <p>This journal is the means for me to put down my thoughts as well as the crystallization of the effort put into (re-)learning front-end development.</p>

            </div>
            <h2 className='recent-post-header'>Recent posts</h2>
            <RecentPosts/>
        </>
    )
}