import React from 'react';
import './Features.css';

const featuresData = [
  {
    id: 1,
    title: 'Real-time Metrics',
    description: 'Monitor your application performance with sub-millisecond latency.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    )
  },
  {
    id: 2,
    title: 'Advanced Routing',
    description: 'Predictive prefetching ensures users never wait for a page load.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/><path d="M16 12l-4-4-4 4M12 8v8"/>
      </svg>
    )
  },
  {
    id: 3,
    title: 'Global Edge Network',
    description: 'Deploy instantly to 35+ regions worldwide with zero configuration.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    )
  }
];

const Features = () => {
  return (
    <section id="features" className="features section-padding">
      <div className="container">
        <div className="features-header">
          <h2>Analytical Data Grids</h2>
          <p>Unparalleled insights delivered through a responsive, modular architecture.</p>
        </div>
        
        <div className="features-grid">
          {featuresData.map((feature) => (
            <div key={feature.id} className="feature-card glass-panel">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="data-grid glass-panel mt-4">
          <div className="data-grid-header">
            <h3>Performance Benchmark</h3>
            <button className="export-btn">Export Data</button>
          </div>
          <div className="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Current System</th>
                  <th>Nexus Optimization</th>
                  <th>Improvement</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Time to Interactive (TTI)</td>
                  <td>3.2s</td>
                  <td className="highlight">0.8s</td>
                  <td className="positive">+75%</td>
                </tr>
                <tr>
                  <td>First Contentful Paint (FCP)</td>
                  <td>1.8s</td>
                  <td className="highlight">0.4s</td>
                  <td className="positive">+78%</td>
                </tr>
                <tr>
                  <td>Lighthouse Score</td>
                  <td>72/100</td>
                  <td className="highlight">100/100</td>
                  <td className="positive">+38%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
