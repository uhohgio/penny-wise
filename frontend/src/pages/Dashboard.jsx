import React from "react";

const TOPIC_AMOUNT = 12;
const lesson = {
    title: "Needs, wants, and the sneaky in-between",
    timeLeft: 8
};

const Dashboard = () => {
  return (
    <>
      {/*This is where NavBar is going to be
      with the Header and the NavLinks for Sign-up and Log-in*/}
      <main>
        
        <section className="dashboardHero">
            <div>
                <h3>Learning Hub</h3>
                <h1>Make money make sense.</h1>
                <p>Quick lessons, real-life challenges, and zero boring lectures. Pick up where you left off or explore something new.</p> 
            </div>
            <div>
                {/* <p>STREAK INFO GOES HERE</p> */}
            </div>
        </section>
        <section className="continueLearning">
            <div>
                {/* Lesson Image */}
            </div>
            <div>
                <p>CONTINUE LEARNING - {lesson.timeLeft} MIN</p>
                <h2>{lesson.title}</h2>
                {/* <ProgressBar lessonsLeft={lesson.context}/> */}
            </div>
            <div>
                <button className="resumeButton">Resume</button>
            </div>

        </section>

        <section className="exploreTopics">
            <div>
                <h2>Explore topics</h2>
                <p>view all {TOPIC_AMOUNT}</p>
            </div>
            <div className="topicCards">
                {/* Map topic cards : could be a carousel */}
            </div>
        </section>
      </main>

      {/*This is where the Footer is going to be*/}
    </>
  );
};

export default Dashboard;