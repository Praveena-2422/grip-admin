import React from "react";
import { Link } from "react-router-dom";

const LatestAppointmentsOne = () => {
  return (
    <div className='col-xxl-12'>
      <div className='card h-100'>
        <div className='card-header border-bottom bg-base py-16 px-24 d-flex align-items-center justify-content-between'>
          <h6 className='text-lg fw-semibold mb-0'>Recent Member's</h6>
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
        <div className='card-body p-0'>
          <div className='table-responsive scroll-sm'>
            <table className='table bordered-table mb-0 rounded-0 border-0'>
              <thead>
                <tr>
                  <th scope='col' className='bg-transparent rounded-0'>
                    Name
                  </th>
                  <th scope='col' className='bg-transparent rounded-0'>
                   Designation
                  </th>
                  <th scope='col' className='bg-transparent rounded-0'>
                   Company Name
                  </th>
                  <th scope='col' className='bg-transparent rounded-0'>
                    Chapter
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Elankathir</td>
                  <td>Web Developer</td>
                  <td>Syncraze</td>
                  <td>
                    {/* {" "}
                    <span className='bg-success-focus text-success-main px-10 py-4 radius-8 fw-medium text-sm'>
                      Completed
                    </span> */}
                   GRIP Aram (Tuesday)
                  </td>
                </tr>
                <tr>
                  <td>Kesavan </td>
                  <td>Photographer</td>
                  <td>K7 Studios</td>
                  <td>
                  GRIP Madhuram (Thursday
                  </td>
                </tr>
                <tr>
                  <td>Vignesh</td>
                  <td>Digital Marketing</td>
                  <td>Iriscoders</td>
                  <td>
                    {/* {" "}
                    <span className='bg-success-focus text-success-main px-10 py-4 radius-8 fw-medium text-sm'>
                      Completed
                    </span> */}
                    Chapter - 3
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestAppointmentsOne;
