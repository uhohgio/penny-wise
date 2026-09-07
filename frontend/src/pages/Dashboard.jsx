import React from "react";
import Navbar from "../components/Navbar";

const TOPIC_AMOUNT = 12;
const lesson = {
    title: "Needs, wants, and the sneaky in-between",
    timeLeft: 8
};

const topics = [{
    id: 1,
    icon: "",
    name: "Money Basics",
    description: "Learn what money does, where it goes, and how to stay in charge.",
    lesson_count: 5
},
{
    id: 2,
    icon: "",
    name: "Smart Spending",
    description: "Spot trade-offs, compare choices, and spend without the regret.",
    lesson_count: 4
},
{
    id: 3,
    icon: "",
    name: "Saving Goals",
    description: "Turn big dreams into small steps you can actually stick with.",
    lesson_count: 6
},
{
    id: 4,
    icon: "",
    name: "Earning & Work",
    description: "Explore ways to earn and understand what your time is worth.",
    lesson_count: 4
}];

const Dashboard = () => {
  return (
    <>
      {/*This is where NavBar is going to be
      with the Header and the NavLinks for Sign-up and Log-in*/}
      <Navbar />
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
                {/* We may add a progress bar or other interactive elements here */}
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
                {
                    topics && (
                        topics.map((topic) => {
                            return (
                                <div key={topic.id} className="topicCard">
                                <span>{topic.icon}</span>
                                <h2>{topic.name}</h2>
                                <h4>{topic.description}</h4>
                                <p>{topic.lesson_count} lessons →</p>
                            </div>
                            )
                        })
                    )
                }
            </div>
        </section>
      </main>

      {/*This is where the Footer is going to be*/}
    </>
  );
};

export default Dashboard;