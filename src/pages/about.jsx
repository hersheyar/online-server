import "./styles/about.css";

function About() {
    return (
        <div className="about page">
            <header className="about-header">
                <div className="about-photo">
                    <img
                        src="/img/personalimg.jpg"
                        alt="Andrew Hershey"
                        className="profile-photo"
                    />
                </div>
                <h1>Andrew Hershey</h1>
                <h3>Junior Cloud Software Engineer</h3>
            </header>
            <section className="about-content">
                <button
                    className="about-btn"
                    onClick={() => window.location.href = "mailto:hersheyar@outlook.com"}
                >
                    Email Me
                </button>
                <button
                    className="about-btn"
                    onClick={() => window.open("https://www.linkedin.com/in/andrew-hershey-dev", "_blank")}
                >
                    LinkedIn Profile
                </button>
            </section>
        </div>
    );
}

export default About;
