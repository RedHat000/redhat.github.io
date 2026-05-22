export default function RedHatITServices() {
  const services = [
    {
      title: "Website Development",
      desc: "Professional websites, blogs, landing pages, and business platforms built with modern responsive design."
    },
    {
      title: "Custom System Building",
      desc: "Database systems, inventory systems, school systems, payroll systems, and custom web applications."
    },
    {
      title: "Software Installation",
      desc: "Install Windows, Office tools, drivers, antivirus, and essential business software."
    },
    {
      title: "PC Upgrades",
      desc: "RAM upgrades, SSD installation, speed optimization, operating system refresh, and hardware support."
    },
    {
      title: "Troubleshooting & Repairs",
      desc: "Fix startup problems, slow computers, crashes, malware cleanup, and system diagnostics."
    },
    {
      title: "Domain & Hosting Setup",
      desc: "Register domains, connect hosting, deploy websites, configure DNS and business email systems."
    }
  ];

  return (
    <div style={{fontFamily:'Arial',margin:0,padding:0,background:'#0d1117',color:'white'}}>
      <header style={{padding:'40px',textAlign:'center',background:'#161b22'}}>
        <h1 style={{fontSize:'48px'}}>RedHat IT Services</h1>
        <p>Professional Technology Solutions for Business Growth</p>
      </header>

      <section style={{padding:'40px'}}>
        <h2 style={{textAlign:'center'}}>Our Services</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:'20px',marginTop:'30px'}}>
          {services.map((service,index)=>(
            <div key={index} style={{background:'#161b22',padding:'20px',borderRadius:'12px'}}>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{padding:'40px',background:'#161b22',textAlign:'center'}}>
        <h2>Why Choose RedHat?</h2>
        <p>
          Affordable and reliable IT solutions including websites, systems development,
          troubleshooting, upgrades, installations, and business digital transformation.
        </p>
      </section>

      <section style={{padding:'40px',textAlign:'center'}}>
        <h2>Contact RedHat IT Services</h2>
        <p>Email: your@email.com</p>
        <p>Phone: +675 XXX XXXX</p>
        <p>Location: Papua New Guinea</p>
      </section>

      <footer style={{padding:'20px',textAlign:'center',background:'#161b22'}}>
        © 2026 RedHat IT Services. All Rights Reserved.
      </footer>
    </div>
  );
}
