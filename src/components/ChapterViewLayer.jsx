import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
import { Link } from 'react-router-dom';
import useReactApexChart from '../hook/useReactApexChart'
import ReactApexChart from 'react-apexcharts'

const ChapterViewLayer = () => {

  const cards = [


    {
      "count": 15,
      "label": "121s",
      "icon": "ri-user-shared-fill",
      // "bg": "bg-gradient-pink"
      "bg": "bggg-white"
    },
    {
      "count": 20,
      "label": "Referrals",
      "icon": "ri-share-forward-fill",
      // "bg": "bg-gradient-green"
      "bg": "bggg-white"
    },
    {
      "count": 15,
      "label": "Visitor/Guest",
      "icon": "ri-user-follow-fill",
      // "bg": "bg-gradient-cyan"
      "bg": "bggg-white"
    },


    {
      "count": 20,
      "label": "Events",
      "icon": "ri-calendar-check-fill",
      // "bg": "bg-gradient-amber"
      "bg": "bggg-white"
    },
    {
      "count": 10,
      "label": "Trainings",
      "icon": "ri-graduation-cap-fill",
      // "bg": "bg-gradient-lime"
      "bg": "bggg-white"
    },
    {
      "count": 2,
      "label": "Absents",
      "icon": "ri-user-unfollow-fill",
      // "bg": "bg-gradient-teal"
      "bg": "bggg-white"
    }
  ]






  const gripChapters = [
    {
      id: 1,
      name: "Biz Given",
      memberCount: 80,
      members: [
        { id: 36254, name: "ElanKathir", image: "user1.png", score: 15 },
        { id: 36255, name: "Kesavan", image: "user2.png", score: 13 },
        { id: 36256, name: "Vignesh", image: "user3.png", score: 16 },

      ]
    },
    {
      id: 2,
      name: "121's",
      memberCount: 75,
      members: [
        { id: 36254, name: "ElanKathir", image: "user1.png", score: 15 },
        { id: 36255, name: "Kesavan", image: "user2.png", score: 13 },
        { id: 36256, name: "Vignesh", image: "user3.png", score: 16 },

      ]
    },
    {
      id: 3,
      name: "RFL's",
      memberCount: 60,
      members: [
        { id: 36254, name: "ElanKathir", image: "user1.png", score: 15 },
        { id: 36255, name: "Kesavan", image: "user2.png", score: 13 },
        { id: 36256, name: "Vignesh", image: "user3.png", score: 16 },

      ]
    },
    {
      id: 4,
      name: "Visitor's",
      memberCount: 90,
      members: [
        { id: 36254, name: "ElanKathir", image: "user1.png", score: 15 },
        { id: 36255, name: "Kesavan", image: "user2.png", score: 13 },
        { id: 36256, name: "Vignesh", image: "user3.png", score: 16 },

      ]
    },


  ];


  let { gradientLineChartSeries, gradientLineChartOptions } = useReactApexChart()


  return (
    <>
      <div className="card p-40 h-100 p-4 mb-5 radius-12" style={{ backgroundColor: '#f9f9f9' }}>
        <div className="row g-4 align-items-start">

          {/* Left Section - Meeting Details */}
          <div className="col-md-3">
            <h5 className="fw-bold">GRIP <span style={{ fontWeight: 300 }}>Aram</span></h5>
            <p className="text-muted mb-2">Meeting is only on invite</p>

            <div className="mt-2 mb-3 text-sm">Tuesday 7:00 AM</div>
            <div className="text-sm mb-3" style={{ background: '#ccc', display: 'inline-block', padding: '2px 8px', borderRadius: '4px' }}>
              in-Person
            </div>

          </div>

                <div className="col-md-3">

            <div className="mt-0 mb-0 fw-bold" >
              <h6 className="fw-bold">Meeting Details</h6>
            </div>

            <div className="text-sm mb-0">The Park</div>
            <div className="text-sm text-muted">
              Nangambakkam<br />
              Chennai
              600004
            </div>
            <div className="text-sm mt-1">Phone: 98765 43210</div>
            <a href="#" className="text-grip text-sm mt-2 d-inline-block">View Map</a>
          </div>

          {/* Center Section - Member Count */}
          <div className="col-md-3 text-center">
            <h6 className="fw-bold">Member Count</h6>
            <h1 className="text-grip display-4">30</h1>
            <a href="/member-list" className="text-grip text-sm">Show Members</a>
          </div>

          {/* Right Section - Buttons */}
          <div className="col-md-3 d-flex flex-column align-items-end gap-3">

            <button
              type="button"
              className="btn btn-primary grip text-sm btn-sm px-12 py-12 radius-8 d-flex align-items-center gap-2"
            >

                   <Link
                                    to="/add-member"
                                    className=" text-white  d-flex align-items-center gap-1"
                                  >

                                  Add Member
              <Icon
                icon="ic:baseline-plus"
                className="icon text-xl line-height-1"
              />
                                  </Link>


            </button>

            <select
              className="form-select form-select-sm w-auto bg-base px-32 border text-white text-secondary-light rounded-pill"

            >
              <option value="" >
                This Week
              </option>
              <option value="Last Week">Last Week</option>
              <option value="Last Month">Last Month</option>
              <option value="This Month">This Month</option>
              <option value="This Term">This Term</option>
            </select>
          </div>

        </div>
      </div>





      <div className="row gy-4 mb-5">
        {cards.map((card, index) => (
          <div key={index} className="col-lg-2 col-sm-6 ">
            <div className={`card p-3 radius-8 h-100 ${card.bg}`}>
              <div className="card-body p-0">
                <div className="d-flex align-items-center gap-2">
                  <span className={`w-48-px h-48-px d-flex justify-content-center align-items-center rounded-circle bg-grip ${card.iconBg}`}>
                    <i className={`${card.icon} h5 mb-0`} />
                  </span>
                  <div>
                    <h6 className="fw-bold mb-1">{card.count.toLocaleString()}</h6>
                    <span className="text-secondary text-md">{card.label}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>



      <div className="card h-100 p-0 mb-5 radius-12">

        <div className="card-header border-bottom bg-base py-16 px-24">
          <h6 className="text-lg fw-semibold mb-0">Chapter Leadership</h6>
        </div>

        <div className="card-body p-24">
          <div className="row gy-4">
            <div className="col user-grid-card  ">
              <div className="position-relative border radius-16 bg-overlay overflow-hidden">

                <div className="ps-16 pb-16 pe-16 text-center mt--0">
                  <img
                    src="assets/images/avatar/avatar2.png"
                    alt=""
                    className="border br-white border-width-2-px w-100-px mt-20 h-100-px rounded-circle object-fit-cover"
                  />
                  <h6 className="text-lg mb-1 mt-3 text-white">Jerome</h6>
                  <span className="text-secondary-light text-white mb-16">
                    CID
                  </span>

                       <div className="d-flex justify-content-center gap-3 mt-16">
                    <a href="tel:+1234567890" className="btn btn-light p-10 radius-8 d-flex align-items-center justify-content-center" title="Call">
                      <Icon icon="mdi:phone-outline" className="text-xl text-primary-600" />
                    </a>
                    <a href="mailto:someone@example.com" className="btn btn-light p-10 radius-8 d-flex align-items-center justify-content-center" title="Mail">
                      <Icon icon="mdi:email-outline" className="text-xl text-primary-600" />
                    </a>
                    {/* <Link to="/view-profile" className="btn btn-light p-10 radius-8 d-flex align-items-center justify-content-center" title="View Profile">
                      <Icon icon="solar:alt-arrow-right-linear" className="text-xl text-primary-600" />
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col user-grid-card  ">
              <div className="position-relative border radius-16 bg-overlay overflow-hidden">

                <div className="ps-16 pb-16 pe-16 text-center mt--0">
                  <img
                    src="assets/images/avatar/avatar2.png"
                    alt=""
                    className="border br-white border-width-2-px w-100-px h-100-px mt-20 rounded-circle object-fit-cover"
                  />
                  <h6 className="text-lg mb-1 mt-3 text-white">Kamalhasan</h6>
                  <span className="text-secondary-light text-white mb-16">
                    President
                  </span>

                 <div className="d-flex justify-content-center gap-3 mt-16">
                    <a href="tel:+1234567890" className="btn btn-light p-10 radius-8 d-flex align-items-center justify-content-center" title="Call">
                      <Icon icon="mdi:phone-outline" className="text-xl text-primary-600" />
                    </a>
                    <a href="mailto:someone@example.com" className="btn btn-light p-10 radius-8 d-flex align-items-center justify-content-center" title="Mail">
                      <Icon icon="mdi:email-outline" className="text-xl text-primary-600" />
                    </a>
                    {/* <Link to="/view-profile" className="btn btn-light p-10 radius-8 d-flex align-items-center justify-content-center" title="View Profile">
                      <Icon icon="solar:alt-arrow-right-linear" className="text-xl text-primary-600" />
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col user-grid-card  ">
              <div className="position-relative border radius-16 bg-overlay overflow-hidden">

                <div className="ps-16 pb-16 pe-16 text-center mt--0">
                  <img
                    src="assets/images/avatar/avatar1.png"
                    alt=""
                    className="border br-white border-width-2-px mt-20 w-100-px h-100-px rounded-circle object-fit-cover"
                  />
                  <h6 className="text-lg mb-1 mt-3 text-white">Vijay Ragavan</h6>
                  <span className="text-secondary-light text-white mb-16">
                    Vice President
                  </span>
                  {/* <div className="center-border position-relative bg-danger-gradient-light radius-8 p-12 d-flex align-items-center gap-4">
                                    <div className="text-center w-50">
                                        <h6 className="text-md mb-0">Civil</h6>
                                        <span className="text-secondary-light text-sm mb-0">
                                            Department
                                        </span>
                                    </div>
                                    <div className="text-center w-50">
                                        <h6 className="text-md mb-0">Chief Engineer</h6>
                                        <span className="text-secondary-light text-sm mb-0">
                                            Designation
                                        </span>
                                    </div>
                                </div> */}
               <div className="d-flex justify-content-center gap-3 mt-16">
                    <a href="tel:+1234567890" className="btn btn-light p-10 radius-8 d-flex align-items-center justify-content-center" title="Call">
                      <Icon icon="mdi:phone-outline" className="text-xl text-primary-600" />
                    </a>
                    <a href="mailto:someone@example.com" className="btn btn-light p-10 radius-8 d-flex align-items-center justify-content-center" title="Mail">
                      <Icon icon="mdi:email-outline" className="text-xl text-primary-600" />
                    </a>
                    {/* <Link to="/view-profile" className="btn btn-light p-10 radius-8 d-flex align-items-center justify-content-center" title="View Profile">
                      <Icon icon="solar:alt-arrow-right-linear" className="text-xl text-primary-600" />
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="col user-grid-card   ">
              <div className="position-relative border radius-16 bg-overlay overflow-hidden">


                <div className="ps-16 pb-16 pe-16 text-center mt--0">
                  <img
                    src="assets/images/avatar/avatar1.png"
                    alt=""
                    className="border br-white border-width-2-px w-100-px h-100-px rounded-circle mt-20 object-fit-cover"
                  />
                  <h6 className="text-lg mb-1 mt-3 text-white">Kesavan</h6>
                  <span className="text-secondary-light text-white mb-16">
                    Secratary
                  </span>

                  <div className="d-flex justify-content-center gap-3 mt-16">
                    <a href="tel:+1234567890" className="btn btn-light p-10 radius-8 d-flex align-items-center justify-content-center" title="Call">
                      <Icon icon="mdi:phone-outline" className="text-xl text-primary-600" />
                    </a>
                    <a href="mailto:someone@example.com" className="btn btn-light p-10 radius-8 d-flex align-items-center justify-content-center" title="Mail">
                      <Icon icon="mdi:email-outline" className="text-xl text-primary-600" />
                    </a>
                    {/* <Link to="/view-profile" className="btn btn-light p-10 radius-8 d-flex align-items-center justify-content-center" title="View Profile">
                      <Icon icon="solar:alt-arrow-right-linear" className="text-xl text-primary-600" />
                    </Link> */}
                  </div>

                </div>
              </div>
            </div>


            <div className="col user-grid-card ">
              <div className="position-relative border radius-16 bg-overlay overflow-hidden">


                <div className="ps-16 pb-16 pe-16 text-center mt--0">
                  <img
                    src="assets/images/avatar/avatar1.png"
                    alt=""
                    className="border br-white border-width-2-px w-100-px h-100-px rounded-circle mt-20 object-fit-cover"
                  />
                  <h6 className="text-lg mb-1 mt-3 text-white">Vignesh</h6>
                  <span className="text-secondary-light text-white mb-16">
                    Trainer
                  </span>

                  <div className="d-flex justify-content-center gap-3 mt-16">
                    <a href="tel:+1234567890" className="btn btn-light p-10 radius-8 d-flex align-items-center justify-content-center" title="Call">
                      <Icon icon="mdi:phone-outline" className="text-xl text-primary-600" />
                    </a>
                    <a href="mailto:someone@example.com" className="btn btn-light p-10 radius-8 d-flex align-items-center justify-content-center" title="Mail">
                      <Icon icon="mdi:email-outline" className="text-xl text-primary-600" />
                    </a>
                    {/* <Link to="/view-profile" className="btn btn-light p-10 radius-8 d-flex align-items-center justify-content-center" title="View Profile">
                      <Icon icon="solar:alt-arrow-right-linear" className="text-xl text-primary-600" />
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>



          </div>

        </div>

      </div>


      <div className="card h-100 p-0 mb-5 radius-12">


        <div className="card-body p-24">


          <div className="row g-0">
            {/* 4-column: Overall Business Achieved Text + Amount */}
            <div className="col-md-4">
              <div className="card h-100 rounded-0 border-0">
                <div className="card-header border-bottom bg-base py-16 px-24">
                  <h6 className="text-lg fw-semibold mb-0"> Business Achieved</h6>
                </div>
                <div className="card-body p-24 d-flex flex-column justify-content-center align-items-center">
                  <h2 className="text-success display-6 fw-bold mb-0">₹250,000</h2>
                  <p className="text-muted mt-2">Total Revenue</p>
                </div>
              </div>
            </div>

            {/* 8-column: Line Chart (no title, no shadow) */}
            <div className="col-md-8">
              <div className="card h-100 rounded-0 border-0">
                <div className="card-body p-24">
                  <ReactApexChart
                    id="gradientLineChart"
                    options={gradientLineChartOptions}
                    series={gradientLineChartSeries}
                    type="line"
                    height={264}
                  />
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>







      <div className="card h-100 p-0 radius-12">

        <div className="card-header border-bottom bg-base py-16 px-24">
          <h6 className="text-lg fw-semibold mb-0">Top Achievers </h6>
        </div>
        <div className="card-body chapterwisebox p-24">


          <div className='row gy-4'>
            {gripChapters.map((chapter) => (
              <div className="col-xxl-3" key={chapter.id}>
                <div className="card">
                  <div className="chapterwiseheading d-flex align-items-center flex-wrap gap-2 justify-content-between">
                    <h6 className="mb-2 fw-bold text-lg mb-0">{chapter.name}  ({chapter.memberCount})</h6>
                    {/* <Link
                        to="/chapterone-list"
                        className="onetoonecount text-primary-600 hover-text-primary d-flex align-items-center gap-1"
                      >
                        {chapter.memberCount}
                        <Icon
                          icon="solar:alt-arrow-right-linear"
                          className="icon"
                        />
                      </Link> */}
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
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-m modal-dialog modal-dialog-centered">
          <div className="modal-content radius-16 bg-base">
            <div className="modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Add New Chapter
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
                      Chapter Name
                    </label>
                    <input
                      type="text"
                      className="form-control radius-8"

                    />
                  </div>


                  <div className="col-12 mb-20">
                    <label className="form-label fw-semibold text-primary-light text-sm mb-8">
                      Region
                    </label>
                    <select class="form-control form-select">
                      <option value="Date">Select Region </option>
                      <option value="1" selected="">Chennai</option>
                    </select>
                  </div>


                  <div className="col-12 mb-20">
                    <label className="form-label fw-semibold text-primary-light text-sm mb-8">
                      Chapter Induction Directors (CID)
                    </label>
                    <select class="form-control form-select">

                      <option value=""> Select Name </option>
                      <option value="rajesh">Rajesh</option>
                      <option value="madhu">Madhu</option>
                      <option value="praburajan">Praburajan</option>
                      <option value="gajendran">Gajendran</option>
                      <option value="kirubakaran">Kirubakaran</option>
                      <option value="Kumar Subramaniam">Kumar Subramaniam</option>
                      <option value="Palanikumar">Palanikumar</option>

                    </select>
                  </div>


                  <div className="col-12 mb-20">
                    <label className="form-label fw-semibold text-primary-light text-sm mb-8">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control radius-8"

                    />
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
                    <select class="form-control form-select">
                      <option value="Date">Select Region Head</option>
                      <option value="1" selected="">Rajesh</option>
                      <option value="1" selected="">Madhu</option>
                      <option value="1" selected="">Prabhu</option>

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

export default ChapterViewLayer;