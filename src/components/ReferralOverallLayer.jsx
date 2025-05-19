import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
import { Link } from 'react-router-dom';

const ReferralOverallLayer = () => {
  // Dynamic data in JSON format
  const gripChapters = [
    {
      id: 1,
      name: "GRIP Aram",
      memberCount: 80,
      members: [
        { id: 36254, name: "ElanKathir", image: "user1.png", score: 15 },
        { id: 36255, name: "Kesavan", image: "user2.png", score: 13 },
        { id: 36256, name: "Vignesh", image: "user3.png", score: 16 },
        { id: 36257, name: "Kannan", image: "user4.png", score: 13 },
         { id: 36258, name: "Aravind", image: "user5.png", score: 13 },


      ]
    },
    {
      id: 2,
      name: "GRIP Virutcham",
      memberCount: 75,
      members: [
        { id: 36254, name: "ElanKathir", image: "user1.png", score: 15 },
        { id: 36255, name: "Kesavan", image: "user2.png", score: 13 },
        { id: 36256, name: "Vignesh", image: "user3.png", score: 16 },
        { id: 36257, name: "Kannan", image: "user4.png", score: 13 },
         { id: 36258, name: "Aravind", image: "user5.png", score: 13 },


      ]
    },
    {
      id: 3,
      name: "GRIP Madhuram",
      memberCount: 60,
      members: [
        { id: 36254, name: "ElanKathir", image: "user1.png", score: 15 },
        { id: 36255, name: "Kesavan", image: "user2.png", score: 13 },
        { id: 36256, name: "Vignesh", image: "user3.png", score: 16 },
        { id: 36257, name: "Kannan", image: "user4.png", score: 13 },
         { id: 36258, name: "Aravind", image: "user5.png", score: 13 },


      ]
    },
    {
      id: 4,
      name: "GRIP Kireedam",
      memberCount: 90,
      members: [
        { id: 36254, name: "ElanKathir", image: "user1.png", score: 15 },
        { id: 36255, name: "Kesavan", image: "user2.png", score: 13 },
        { id: 36256, name: "Vignesh", image: "user3.png", score: 16 },
        { id: 36257, name: "Kannan", image: "user4.png", score: 13 },
         { id: 36258, name: "Aravind", image: "user5.png", score: 13 },


      ]
    },
    {
      id: 5,
      name: "GRIP Amudham",
      memberCount: 70,
      members: [
        { id: 36254, name: "ElanKathir", image: "user1.png", score: 15 },
        { id: 36255, name: "Kesavan", image: "user2.png", score: 13 },
        { id: 36256, name: "Vignesh", image: "user3.png", score: 16 },
        { id: 36257, name: "Kannan", image: "user4.png", score: 13 },
         { id: 36258, name: "Aravind", image: "user5.png", score: 13 },


      ]
    }
  ];

  return (
    <>
      <div className="cardd h-100 p-0 radius-12">
         <div className="d-flex align-items-center flex-wrap gap-3">
                    <form className="navbar-search">
                        <input
                            type="text"
                            className="bg-base h-40-px w-auto"
                            name="search"
                            placeholder="Search"
                        />
                        <Icon icon="ion:search-outline" className="icon" />
                    </form>

                        <select className="form-select form-select-sm w-auto" defaultValue="Select Number">
                            <option value="Select Number" disabled>
                                Select Chapter
                            </option>
                            <option value="10">GRIP Aram</option>
                            <option value="15">GRIP Virutcham</option>
                            <option value="20">GRIP Madhuram</option>
                            <option value="20">GRIP Kireedam</option>
                             <option value="20">GRIP Amudham</option>

                        </select>

                             <select className="form-select form-select-sm w-auto" defaultValue="Select Number">
                            <option value="Select Number" disabled>
                               This Week
                            </option>
                            <option value="10">This Month</option>
                            <option value="15">Last Week</option>
                            <option value="20">Last Month</option>
                            <option value="20">This Term</option>


                        </select>

                </div>
        <div className="card-body chapterwisebox p-24">
          <div className='row gy-4'>
            {gripChapters.map((chapter) => (
              <div className="col-xxl-4" key={chapter.id}>
                <div className="card">
                     <div className="chapterwiseheading d-flex align-items-center flex-wrap gap-2 justify-content-between">
                      <h6 className="mb-2 fw-bold text-lg mb-0">{chapter.name}</h6>
                      <Link
                        to="/referral-list"
                        className="onetoonecount text-primary-600 hover-text-primary d-flex align-items-center gap-1"
                      >
                        {chapter.memberCount}
                        <Icon
                          icon="solar:alt-arrow-right-linear"
                          className="icon"
                        />
                      </Link>
                    </div>
                  <div className="card-body">

                    <div className="mt-2">
                      {chapter.members.map((member, index) => (
                        <div
                          className={`d-flex align-items-center justify-content-between gap-3 ${index < chapter.members.length - 1 ? 'mb-32' : ''}`}
                          key={member.id}
                        >
                          <div className="d-flex align-items-center">
                            <img
                              src={`assets/images/users/${member.image}`}
                              alt={member.name}
                              className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                            />
                            <div className="flex-grow-1">
                              <h6 className="text-md mb-0">{member.name}</h6>
                              <span className="text-sm text-secondary-light fw-medium">
                                Member ID: {member.id}
                              </span>
                            </div>
                          </div>
                          <span className="text-primary-light text-md fw-medium">{member.score}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Start */}
      <div
        className="modal fade"
        id="exampleModalTwo"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-m modal-dialog modal-dialog-centered">
          <div className="modal-content radius-16 bg-base">
            <div className="modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Add New Region
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body p-24">
              <form action="#">
                <div className="row">
                  <div className="col-12 mb-20">
                    <label className="form-label fw-semibold text-primary-light text-sm mb-8">
                      Region Name
                    </label>
                    <input
                      type="text"
                      className="form-control radius-8"
                    />
                  </div>

                  <div className="col-12 mb-20">
                    <label className="form-label fw-semibold text-primary-light text-sm mb-8">
                      Date
                    </label>
                    <input
                      type="date"
                      className="form-control radius-8"
                    />
                  </div>

                  <div className="col-12 mb-20">
                    <label className="form-label fw-semibold text-primary-light text-sm mb-8">
                      Region Head
                    </label>
                    <select className="form-control form-select">
                      <option value="Date">Select Region Head</option>
                      <option value="1">Rajesh</option>
                      <option value="2">Madhu</option>
                      <option value="3">Prabhu</option>
                    </select>
                  </div>

                  <div className="d-flex align-items-center gap-3 mt-24">
                    <button
                      type="reset"
                      className="border border-danger-600 bg-hover-danger-200 text-danger-600 text-md px-40 py-11 radius-8"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary grip border border-primary-600 text-md px-48 py-12 radius-8"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Modal End */}

      {/* Modal Start */}
      <div
        className="modal fade"
        id="exampleModalOne"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-m modal-dialog modal-dialog-centered">
          <div className="modal-content radius-16 bg-base">
            <div className="modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Chapter
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body p-24">
              <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #eee', padding: '8px 0' }}>
                    <td style={{ padding: '8px 0' }}><strong>Chapter Name:</strong></td>
                    <td style={{ padding: '8px 0' }}>
                      GRIP Aram <span className='chapterday'>(Tuesday)</span>
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #eee', padding: '8px 0' }}>
                    <td style={{ padding: '8px 0' }}><strong>Region:</strong></td>
                    <td style={{ padding: '8px 0' }}>Chennai</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #eee', padding: '8px 0' }}>
                    <td style={{ padding: '8px 0' }}><strong>CID:</strong></td>
                    <td style={{ padding: '8px 0' }}>Richard</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #eee', padding: '8px 0' }}>
                    <td style={{ padding: '8px 0' }}><strong>Location:</strong></td>
                    <td style={{ padding: '8px 0' }}>Pallavaram</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #eee', padding: '8px 0' }}>
                    <td style={{ padding: '8px 0' }}><strong>Status:</strong></td>
                    <td style={{ padding: '8px 0' }}>
                      <select
                        className="form-select"
                        style={{
                          width: '150px',
                          padding: '8px 8px',
                          border: '1px solid #ccc',
                          borderRadius: '4px',
                          backgroundColor: '#fff',
                        }}
                      >
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                        <option value="Pending">Upcoming</option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* Modal End */}
    </>
  );
};

export default ReferralOverallLayer;