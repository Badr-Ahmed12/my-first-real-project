import { services } from "../data";
import { Service } from "../types";

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        {/* Header Section */}
        <ServicesHeader />

        {/* Services List */}
        <div className="services-list">
          {services.map((service) => (
            <ServiceBox key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Sub-components
const ServicesHeader = () => (
  <div className="services-header">
    <h6 className="section-subtitle">Services</h6>
    <h2 className="section-title">
      What I <span className="theme-gradient">Do</span>
    </h2>
  </div>
);

const ServiceBox = ({ service }: { service: Service }) => (
  <div className="service-box">
    <div className="service-number">
      <span>{service.number}</span>
    </div>
    <div className="service-icon-title">
      <i className={service.icon} />
      <h3>{service.title}</h3>
    </div>
    <div className="service-description">
      <p>{service.description}</p>
    </div>
  </div>
);

