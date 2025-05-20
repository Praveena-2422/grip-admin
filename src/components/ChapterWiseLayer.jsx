import React from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const chapters = [
  {
    name: 'GRIP Aram',
    memberCount: 30,
    metrics: {

      Referrals: 10,
      'Thank you Slip': 20,
     'Visitor/Guest': 15,

      Events: 40,
      Trainings: 10,
      Absents: 2,
    },
  },
  {
    name: 'GRIP Virutcham',
    memberCount: 30,
    metrics: {

      Referrals: 15,
      'Thank you Slip': 20,
       'Visitor/Guest': 10,

      Events: 30,
      Trainings: 10,
      Absents: 1,
    },
  },
  {
    name: 'GRIP Madhuram',
    memberCount: 20,
    metrics: {

      Referrals: 20,
      'Thank you Slip': 20,
       'Visitor/Guest': 10,

      Events: 20,
      Trainings: 15,
      Absents: 0,
    },
  },
  {
    name: 'GRIP Kireedam',
    memberCount: 30,
    metrics: {

      Referrals: 50,
      'Thank you Slip': 20,
       'Visitor/Guest': 10,

      Events: 50,
      Trainings: 10,
      Absents: 1,
    },
  },
  {
    name: 'GRIP Amudham',
    memberCount: 40,
    metrics: {

      Referrals: 50,
      'Thank you Slip': 20,
       'Visitor/Guest': 10,

      Events: 30,
      Trainings: 10,
      Absents: 2,
    },
  },
];

const ChapterWiseLayer = () => {
  return (
    <div className="cardd h-100 p-0 radius-12">

           <div className="card-header border-bottom bg-base py-16 px-24 d-flex align-items-center flex-wrap gap-3 justify-content-between">
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


                      </div>

                   <div className="d-flex align-items-center flex-wrap gap-3">

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
                 </div>
      <div className="card-body chapterwisebox p-24">
        <div className="row gy-4">
          {chapters.map((chapter, idx) => (
            <div className="col-xxl-4" key={idx}>
              <div className="card h-100">
                 <div className="chapterwiseheading d-flex align-items-center flex-wrap gap-2 justify-content-between">
                                    <h6 className="mb-2 fw-bold text-lg mb-0">{chapter.name}</h6>
                                    <Link
                                      to="/chapterone-list"
                                      className="onetoonecountt text-white hover-text-primary d-flex align-items-center"
                                    >
                                     ( {chapter.memberCount} )

                                    </Link>
                                  </div>
                <div className="card-body">
                  <div className="mt-3">
                    {Object.entries(chapter.metrics).map(([label, value], i) => (
                      <div
                        className="d-flex align-items-center justify-content-between gap-3 mb-20"
                        key={i}
                      >
                        <h6 className="text-md mb-0">{label}</h6>
                        <span className="text-primary-light text-md fw-medium">{value}</span>
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
  );
};

export default ChapterWiseLayer;
