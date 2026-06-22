const Certificates = () => {
  const certificatesList = [
    {
      id: 1,
      title: 'Complete 2025 Python Bootcamp: Learn Python from Scratch',
      img: '/Python.jpg',
      issuer: 'Issued by Code with Harry',
    },
    {
      id: 2,
      title: 'Generative AI Foundations Certificate',
      img: '/Gen Ai UpGrad.jpeg',
      issuer: 'Issued by UpGrad',
    },
  ];

  return (
    <section id="certificates" className="certificates section-padding slide-up">
      <div className="container">
        <h2 className="section-title">Certificates</h2>
        <div className="certificates-grid">
          {certificatesList.map((cert) => (
            <div key={cert.id} className="certificate-card">
              <div className="certificate-img">
                <img src={cert.img} alt={`${cert.title} Thumbnail`} />
              </div>
              <div className="certificate-info">
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
