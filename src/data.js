const data = [
    {
        id: "Journal1",
        title: "There and Back again",
        date: "January, 2025",
        blurb: "I'm taking a front-end course to brush on my web development skills. Hopefully we'll be at or even beyond where I was before I moved to a different platform in terms of skill. Here's a little journal for posterity and practice.",
        background: "/backgrounds/cover.jpg",
        content: `
        ## This Journal

        This journal is a record of my efforts to re-hone my web development skills that have grown rough after focusing on other roles and platforms in software development. In the preceding months where I've been freelancing, I've also found myself relying too much on AI, and I've become worried about my own skills deteriorating. 

        For the next few months, I'm challenging myself to complete the entire course and my own personal projects without any AI prompting - figure it out, read the docs, learn to search, and implement solutions myself. Hopefully I also pick up new skills along the way. May I find my way to mastery, and may I then make it home safe - hopefully more like Sam and Bilbo than Frodo, though.

        ## The Roadmap
        
        This journey was planned with the help of this [full stack web developer road map](https://roadmap.sh/full-stack), but the focus is on the front-end side of things for now. One step at a time, then on to the next skill, the next goal, hoping after some time I can look back and find things worth sharing. Something I can look at and say, “I made that!”

        This journal itself is a solo project set as a challenge by [Scrimba](https://scrimba.com/home), a learning platform I've used years before to learn React. The project is a good opportunity to consolidate my current knowledge in one place, and express to the world (or to the void?) what I've learned, where I am, and where I aim to go next. 

        If you come across this randomly, hopefully one of the resources linked here will be of use to you. Safe travels!
        `
    },
    {
        id: "Journal2",
        title: "The Same Goals Done Different Ways",
        date: "February 2025",
        blurb: "With a few simpler projects done, I've decided to do some projects of my own along with the solo projects provided by the course. Here I talk about the what and a bit of the why.",
        background: "/backgrounds/cover_1.JPG",
        content: `
        ## Revisiting Frontend Web Technologies

        These few weeks have been a fun refresher for what was my bread and butter when I had my first developer job. Doing hands-on challenges using Figma designs is also a great experience for beginners - the final output is known, and the challenge is to make the bare html look and feel like the design. If I ever get to the point where we're training newbies or interns again, I'd like to have this in my back pocket.

        There are also different ways to apply solutions to the challenges - part of the fun is seeing what the solution would be as done by the teacher compared to your own. I have a new appreciation for all the different ways of handling data structures and variable assignments, although I should be even more careful due to loose typing. Everything can seem perfectly fine until the NaNs and nulls appear where they shouldn't. Beware the happy path and code defensively. 

        I must admit, it's immensely gratifying doing the challenges by pulling from knowledge off the top of my head. It has also been humbling, especially when it comes to approaches that make you think “I wish I thought of that,” where solutions can be obvious in hindsight. May I never be so overconfident I forget to take new lessons to heart. 

        ## Something New

        I've decided to make a couple of apps separate from the solo projects given by the course. First would be an intermittent fasting timer app, as well as perhaps a workout tracker for my runs. I've been using Zero and then Fasty for tracking my fasts, and I've always liked the slick animations and colors for both apps. I'd like to see if I can make it myself. 

        Fitness or running apps, meanwhile, seem to be tailored for athletes or marathoners. They have good features, no doubt, but for my use-case, I needed something simple: track my distance, my speed, my time; day-to-day, week-to-week. I was following a program called Couch-to-5k, meant to condition myself to be able to run a 5k eventually, with a follow up program for 10k and higher after. 

        I've thought about developing them as extensions over something like PWA or mobile apps - it limits the dimensions to something fixed. The challenge was the functionality, something that I have to break down and then implement on my own. There are plenty of very solid designs for inspiration when it comes to fasting or fitness tracking apps. Knowing what I wanted to do and how I intend to interact with the apps also informed a lot of the UI in terms of element placement - I've yet to go through the UI/UX design sections of the course. I wanted to perhaps redesign what I first come up with here, pulling from experience, but also to apply UI and UX design fundamentals, a lesson I've yet to begin at the time of writing this.
                `
    },
    {
        id: "Journal3",
        title: "In Development",
        date: "March 2025",
        blurb: "Ruminating about the greater software development ecosystem, and some skills that may be difficult to develop if you only go solo.",
        background: "/backgrounds/cover_2.JPG",
        content: `
        ## Let Me Solo (Projects)

        There's been a good amount of solo projects from the front-end course as well as my own, and it's been a good experience. The variety has been great, with challenges ranging from implementing the design as shown, to wrangling the data structures and event listeners to behave as expected. REST APIs have also been a welcome familiar face. There's still so many things I haven't used that I know, and even more things I've heard about but haven't learned. 

        One thing I don't get to practice, though, would require other developers. Code reviews, shared codebases and resolving conflict merges are part of development that's rather important to becoming a better developer and the SDLC. You really don't get to take full advantage of version control going solo. And the value of shared knowledge cannot be overstated - you can only learn and retain so much info, even if learning the principles go a long way.

        Having said that, I do appreciate how much a single developer can make. 

        ## Constants

        As the course moves to the greater ecosystem of development such as version control and package management, it's become easy to see why a lot of newer developers become stuck in tutorial hell. There's more to development when the goal is to get users' hands onto your application, which most other courses don't really cover, and adding these things on top of learning programming itself can be quite overwhelming when learned all at once.

        I'm thankful the course introduced version control quite early. Just seeing the number of projects that I can mark as complete is a big confidence boost.  Remembering solutions that I figured out here or from prior work, learned from the courses, or picked up from previous colleagues' own challenges and being able to apply those to what I'm currently working on certainly gives off a sense of catharsis. I'm not just stuck. I'm learning, still. This is not my limit. Ain't that neat?
                `
    }
]

export { data }