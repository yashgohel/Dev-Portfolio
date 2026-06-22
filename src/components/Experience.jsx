const Experience = () => {
  const timelineItems = [
    {
      id: 1,
      type: 'Professional experience',
      title: 'Online Chat Representative',
      sub: 'Etech Global Services',
      desc: 'Delivered fast-paced client support, utilizing CRM software and honing professional communication and complex problem-solving skills.',
    },
    {
      id: 2,
      type: 'Graduation',
      title: 'B.Tech in Computer Science Engineering',
      sub: 'Babaria Institute of Technology',
      desc: 'Gained a strong foundation in computer science principles, with a focus on web technologies, Python, and software engineering methodologies.',
    },
  ];

  return (
    <section id="experience" className="timeline-section section-padding slide-up">
      <div className="container">
        <h2 className="section-title">Experience & Education</h2>
        <div className="timeline">
          {timelineItems.map((item) => (
            <div key={item.id} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <video autoPlay loop muted playsInline className="card-video-bg">
                  <source src="/Animate_the_image_into_video.mp4" type="video/mp4" />
                </video>
                <span className="timeline-date">{item.type}</span>
                <h3>{item.title}</h3>
                <h4>{item.sub}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
