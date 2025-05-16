import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';

const ViewProfileLayer = () => {
  return (
    <div className="row gy-4">
      <div className="col-lg-2"></div>
      <div className="col-lg-8">
        <div className="user-grid-card position-relative border radius-16 overflow-hidden bg-base h-100">
          {/* Banner Image */}
          <img
            src="assets/images/user-grid/user-grid-bg1.png"
            alt="Banner"
            className="w-100 object-fit-cover"
          />

          <div className="pb-24 ms-16 mb-24 me-16 mt--100">
            {/* Profile Photo and Basic Info */}
            <div className="text-center border border-top-0 border-start-0 border-end-0">
              <img
                src="assets/images/user-grid/user-grid-img14.png"
                alt="Profile"
                className="border br-white border-width-2-px w-200-px h-200-px rounded-circle object-fit-cover"
              />
              <h6 className="mb-0 mt-16">Jacob Jones</h6>
              <span className="text-secondary-light mb-16">ifrandom@gmail.com</span>
            </div>

            {/* Personal Info */}
            <div className="mt-24">
              <h6 className="text-xl mb-16">Personal Info</h6>
              <ul>
                <li className="d-flex align-items-center gap-1 mb-12">
                  <span className="w-30 text-md fw-semibold text-primary-light">Full Name</span>
                  <span className="w-70 text-secondary-light fw-medium">: Will Jonto</span>
                </li>
                <li className="d-flex align-items-center gap-1 mb-12">
                  <span className="w-30 text-md fw-semibold text-primary-light">Email</span>
                  <span className="w-70 text-secondary-light fw-medium">: willjontoax@gmail.com</span>
                </li>
                <li className="d-flex align-items-center gap-1 mb-12">
                  <span className="w-30 text-md fw-semibold text-primary-light">Phone Number</span>
                  <span className="w-70 text-secondary-light fw-medium">: (1) 2536 2561 2365</span>
                </li>
                <li className="d-flex align-items-center gap-1 mb-12">
                  <span className="w-30 text-md fw-semibold text-primary-light">Department</span>
                  <span className="w-70 text-secondary-light fw-medium">: Design</span>
                </li>
                <li className="d-flex align-items-center gap-1 mb-12">
                  <span className="w-30 text-md fw-semibold text-primary-light">Designation</span>
                  <span className="w-70 text-secondary-light fw-medium">: UI UX Designer</span>
                </li>


              </ul>
            </div>

            {/* About Business */}
            <div className="mt-32">
              <h6 className="text-xl mb-16">About Business</h6>
              <p className="text-secondary-light fw-medium">
                We are a leading design agency specializing in UI/UX with over 10 years of experience
                delivering quality solutions to our clients worldwide.
              </p>
            </div>

            {/* Services Offered */}
            <div className="mt-32">
              <h6 className="text-xl mb-16">Services Offered</h6>
              <ul className="list-disc ps-4 text-secondary-light fw-medium">
                <li>UI/UX Design</li>
                <li>Web Development</li>
                <li>Mobile App Design</li>
                <li>Brand Strategy</li>
                <li>Consulting</li>
              </ul>
            </div>

            {/* Company Logo */}
            <div className="mt-32 d-flex align-items-center gap-4">
              <h6 className="text-xl mb-0 flex-shrink-0">Company Logo</h6>
              <img
                src="assets/images/user-grid/company-logo.png"
                alt="Company Logo"
                className="w-100-px h-auto object-fit-contain border radius-8"
              />
            </div>

            {/* Social Media Links */}
            <div className="mt-32">
              <h6 className="text-xl mb-16">Social Media Links</h6>
              <div className="d-flex gap-4">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-primary-light fs-4">
                  <Icon icon="mdi:facebook" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-info fs-4">
                  <Icon icon="mdi:twitter" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-primary fs-4">
                  <Icon icon="mdi:linkedin" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-danger fs-4">
                  <Icon icon="mdi:instagram" />
                </a>
              </div>
            </div>

            {/* Recent Clients Logos */}
            <div className="mt-32">
              <h6 className="text-xl mb-16">Recent Clients</h6>
              <div className="d-flex gap-4 flex-wrap">
                <img
                  src="assets/images/user-grid/client-logo1.png"
                  alt="Client 1"
                  className="w-80-px h-auto object-fit-contain border radius-8"
                />
                <img
                  src="assets/images/user-grid/client-logo2.png"
                  alt="Client 2"
                  className="w-80-px h-auto object-fit-contain border radius-8"
                />
                <img
                  src="assets/images/user-grid/client-logo3.png"
                  alt="Client 3"
                  className="w-80-px h-auto object-fit-contain border radius-8"
                />
                <img
                  src="assets/images/user-grid/client-logo4.png"
                  alt="Client 4"
                  className="w-80-px h-auto object-fit-contain border radius-8"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-2"></div>
    </div>
  );
};

export default ViewProfileLayer;
