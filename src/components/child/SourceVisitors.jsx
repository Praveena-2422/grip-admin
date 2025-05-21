import React from "react";

const SourceVisitors = () => {
  const visitorSources = [
    {
      label: "Email",
      percentage: 28,
      icon: "assets/images/home-nine/source-icon6.png",
      bgClass: "bg-tb-email",
      iconBgClass: "bg-email-600",
    },
    {
      label: "Whatsapp",
      percentage: 45,
      icon: "assets/images/home-nine/source-icon7.png",
      bgClass: "bg-tb-success",
      iconBgClass: "bg-success-600",
    },
    {
      label: "Website",
      percentage: 55,
      icon: "assets/images/home-nine/source-icon4.png",
      bgClass: "bg-tb-website",
      iconBgClass: "bg-website-600",
    },
    {
      label: "Friends",
      percentage: 68,
      icon: "assets/images/home-nine/source-icon5.png",
      bgClass: "bg-tb-warning",
      iconBgClass: "bg-warning-600",
    },
    {
      label: "Facebook",
      percentage: 79,
      icon: "assets/images/home-nine/source-icon3.png",
      bgClass: "bg-tb-primary",
      iconBgClass: "bg-primary-600",
    },
    {
      label: "Instagram",
      percentage: 90,
      icon: "assets/images/home-nine/source-icon2.png",
      bgClass: "bg-tb-lilac",
      iconBgClass: "bg-lilac-600",
    },
  ];

  // Sort by ascending percentage
  const sortedSources = [...visitorSources].sort(
    (a, b) => a.percentage - b.percentage
  );

  return (
    <div className="col-xxl-7">
      <div className="card h-100">
        <div className="card-header border-bottom-0 pb-0 d-flex align-items-center flex-wrap gap-2 justify-content-between">
          <h6 className="mb-2 fw-bold text-lg mb-0">Source Visitors</h6>
          <select className="form-select form-select-sm w-auto bg-base border text-secondary-light">
            <option>Last Month</option>
            <option>Last Week</option>
            <option>Last Year</option>
          </select>
        </div>
        <div className="card-body">
          <div className="position-relative h-100 min-h-320-px">
            <div className="md-position-absolute start-0 top-0 mt-20">
              <h6 className="mb-1">524,756</h6>
              <span className="text-secondary-light">Total Platform Visitors</span>
            </div>
            <div className="row g-3 h-100">
              {sortedSources.map((source, idx) => (
                <div key={idx} className="col-md-2 col-sm-3 d-flex flex-column justify-content-end">
                  <div
                    className={`d-flex flex-column align-items-center p-24 pt-16 rounded-top-4 ${source.bgClass}`}
                    style={{ minHeight: `${source.percentage}%` }}
                  >
                    <span
                      className={`w-40-px h-40-px d-flex flex-shrink-0 justify-content-center align-items-center ${source.iconBgClass} rounded-circle mb-12`}
                    >
                      <img src={source.icon} alt="" />
                    </span>
                    <span className="text-secondary-light">{source.label}</span>
                    <h6 className="mb-0">{source.percentage}%</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SourceVisitors;
