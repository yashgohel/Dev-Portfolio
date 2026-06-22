const About = () => {
  return (
    <section id="about" className="about section-padding slide-up">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <video autoPlay loop muted playsInline className="card-video-bg">
            <source src="/Animate_the_image_into_video.mp4" type="video/mp4" />
          </video>
          <p className="about-text">
            I am a Full Stack Developer with a B.Tech in CSE and a
            strong background in fast-paced client support. I specialize in
            HTML, CSS, Bootstrap, JavaScript, MySQL, Python and Django combining technical precision
            with a deep understanding of user experience. Whether I'm building
            web applications, working with CRM software, or experimenting with
            Generative AI, my goal is to write clean, efficient code that
            solves real-world problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
