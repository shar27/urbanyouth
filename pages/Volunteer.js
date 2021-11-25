import React from 'react'
import Nav from './components/Nav'

function Volunteer() {
    return (
        <div>
        <Nav/>
        <div>
            <h1>Volunteer with us?</h1>
            <p>Only with the dedication of our volunteers, are we able to support and empower young people in London.
We’re always on the lookout to welcome new faces on board. You can volunteer as little or as much time as you have available.

If you want to learn new skills, meet new people and work with a friendly team in a safe environment then let us know. We can meet for a cup of tea and a chat to get to know you to see what you’d like to do best.
Drop us a line at: volunteering@uylondon.org.uk

We look forward to hearing for you!</p>

<h1>VOLUNTEER VACANCIES</h1>
<h2>We're currently on the lookout for the following volunteer roles;</h2>
<ul className="list-unstyled"> ​
​<li>Youth Service Manager (for 8 hours per week)</li>
<li>Admin Support Volunteer (remote and flexible)</li>
<li>Fundraiser (flexible)</li>
<li>Web Designer (remote and flexible)</li>
<li>Researcher (remote and flexible)</li>
    </ul>
        </div>
        </div>
    )
}

export default Volunteer
