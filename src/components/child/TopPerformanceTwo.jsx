import React from "react";
import { Link } from "react-router-dom";

const TopPerformanceTwo = () => {
  return (
    <div className='col-xxl-4'>
      <div className='card h-100 radius-8 border-0'>
        <div className='card-header border-bottom'>
          <div className='d-flex align-items-center flex-wrap gap-2 justify-content-between'>
            <h6 className='mb-2 fw-bold text-lg mb-0'>Recent Enquiry</h6>
            <Link
              to='#'
              className='text-primary-600 hover-text-primary d-flex align-items-center gap-1'
            >
              View All
              <iconify-icon
                icon='solar:alt-arrow-right-linear'
                className='icon'
              />
            </Link>
          </div>
        </div>
        <div className='card-body'>
          <div className='d-flex flex-column gap-24'>
            <div className='d-flex align-items-center justify-content-between gap-3'>
              <div className='d-flex align-items-center'>
                <img
                  src='assets/images/home-eight/doctor-img1.png'
                  alt=''
                  className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                />
                <div className='flex-grow-1'>
                  <h6 className='text-md mb-0'>Anbu</h6>
                  <span className='text-sm text-secondary-light fw-medium'>
                 Finance Service
                  </span>
                </div>
              </div>
              <span className='  px-10 py-4 radius-8 fw-medium text-sm'>
                Website
              </span>
            </div>
            <div className='d-flex align-items-center justify-content-between gap-3'>
              <div className='d-flex align-items-center'>
                <img
                  src='assets/images/home-eight/doctor-img2.png'
                  alt=''
                  className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                />
                <div className='flex-grow-1'>
                  <h6 className='text-md mb-0'>Richard</h6>
                  <span className='text-sm text-secondary-light fw-medium'>
                    Manufacturing
                  </span>
                </div>
              </div>
              <span className=' px-10 py-4 radius-8 fw-medium text-sm'>
                Social Media
              </span>
            </div>
            <div className='d-flex align-items-center justify-content-between gap-3'>
              <div className='d-flex align-items-center'>
                <img
                  src='assets/images/home-eight/doctor-img3.png'
                  alt=''
                  className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                />
                <div className='flex-grow-1'>
                  <h6 className='text-md mb-0'>Albert </h6>
                  <span className='text-sm text-secondary-light fw-medium'>
                 CCTV Surveillance
                  </span>
                </div>
              </div>
              <span className=' px-10 py-4 radius-8 fw-medium text-sm'>
               Friend Refer
              </span>
            </div>

                 <div className='d-flex align-items-center justify-content-between gap-3'>
              <div className='d-flex align-items-center'>
                <img
                  src='assets/images/home-eight/doctor-img2.png'
                  alt=''
                  className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                />
                <div className='flex-grow-1'>
                  <h6 className='text-md mb-0'>Saravanan</h6>
                  <span className='text-sm text-secondary-light fw-medium'>
                    Marketing
                  </span>
                </div>
              </div>
              <span className=' px-10 py-4 radius-8 fw-medium text-sm'>
                Social Media
              </span>
            </div>


                    <div className='d-flex align-items-center justify-content-between gap-3'>
              <div className='d-flex align-items-center'>
                <img
                  src='assets/images/home-eight/doctor-img3.png'
                  alt=''
                  className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                />
                <div className='flex-grow-1'>
                  <h6 className='text-md mb-0'>Rajeshwaran </h6>
                  <span className='text-sm text-secondary-light fw-medium'>
                Builders
                  </span>
                </div>
              </div>
              <span className=' px-10 py-4 radius-8 fw-medium text-sm'>
               Friend Refer
              </span>
            </div>


                  <div className='d-flex align-items-center justify-content-between gap-3'>
              <div className='d-flex align-items-center'>
                <img
                  src='assets/images/home-eight/doctor-img2.png'
                  alt=''
                  className='w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden'
                />
                <div className='flex-grow-1'>
                  <h6 className='text-md mb-0'>Kesavan</h6>
                  <span className='text-sm text-secondary-light fw-medium'>
                    Media
                  </span>
                </div>
              </div>
              <span className=' px-10 py-4 radius-8 fw-medium text-sm'>
                Social Media
              </span>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPerformanceTwo;
