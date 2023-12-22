import React from 'react'

function Article(props) {
  return (
    <>
    <article>
    <section class="main">
            {/* <img src="mob.jpeg" alt="mobile" id="mob"> */}
            {props.children}
            </section>
            <section>
            <h1>Advantage</h1>
            <p>The main benefit of using the mobile phone is that they make the mode of communication easier and cheap. Because of the lower price, mobile is affordable and has been a revolution in the telecom industry where approximately 95% of people use mobile phones for communication.

                Mobile made communication easier, as just by pressing some keys on mobile, we can contact our friends, family members or colleagues, and others at any time. Mobile also gives us a facility to contact our fellow person with voice calls, video calls, text messages, recorded calls, and many more.</p>
                <p>It is another major advantage of mobile phones. Mobile phones can be used to acquire knowledge or information on various topics. For convenience, nowadays, most colleges, institutions, and schools are offering online education with the proper study material that can be in the form of images, photos, text, pdf, etc. In the corona pandemic, we have seen that the students have taken online classes provided by their respective institutions to ensure the safety and health of students</p>

                  <h1>Disadvantage</h1>

                <p>Sometimes mobile is a disturbing device that creates a distraction between your works. It is seen in students that are easily distracted from their studies because of mobiles, as the device contains applications that attract users to enjoy their software. One such application is the various mobile games that are being played a couple of days make the people addicted and distracted from their goals.</p>
                <p>Although mobiles are helpful in various aspects, it is one of the biggest thing responsible for the wastage of time. Most students and teenagers are affected by it. Students want to play games, watching movies, listening songs, and other kinds of entertainment that waste their precious time.</p>
            </section>
    </article>
    

    </>
  )
}

export default Article