import React from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const chapters = [
  {
    name: 'GRIP Aram',
    metrics: {
      Total: 121,
      Referrals: 50,
      'Thankyou Note': 55,
      Visitors: 80,
      Guest: 55,
      Events: 50,
      Trainings: 50,
      Absents: 5,
    },
  },
  {
    name: 'GRIP Virutcham',
    metrics: {
      Total: 121,
      Referrals: 50,
      'Thankyou Note': 55,
      Visitors: 80,
      Guest: 55,
      Events: 50,
      Trainings: 50,
      Absents: 5,
    },
  },
  {
    name: 'GRIP Madhuram',
    metrics: {
      Total: 121,
      Referrals: 50,
      'Thankyou Note': 55,
      Visitors: 80,
      Guest: 55,
      Events: 50,
      Trainings: 50,
      Absents: 5,
    },
  },
  {
    name: 'GRIP Kireedam',
    metrics: {
      Total: 121,
      Referrals: 50,
      'Thankyou Note': 55,
      Visitors: 80,
      Guest: 55,
      Events: 50,
      Trainings: 50,
      Absents: 5,
    },
  },
  {
    name: 'GRIP Amudham',
    metrics: {
      Total: 121,
      Referrals: 50,
      'Thankyou Note': 55,
      Visitors: 80,
      Guest: 55,
      Events: 50,
      Trainings: 50,
      Absents: 5,
    },
  },
];

const ChapterWiseLayer = () => {
  return (
    <div className="cardd h-100 p-0 radius-12">
      <div className="card-body chapterwisebox p-24">
        <div className="d-flex overflow-x-auto gap-4 pb-3">
          {chapters.map((chapter, idx) => (
            <div className="card min-width-300" key={idx}>
              <div className="chapterwiseheading d-flex align-items-center flex-wrap gap-2 justify-content-between">
                  <h6 className="mb-2 fw-bold text-lg mb-0">{chapter.name}</h6>
                  {/* Optional Link */}
                </div>
              <div className="card-body">

                <div className="mt-3">
                  {Object.entries(chapter.metrics).map(([label, value], i) => (
                    <div className="d-flex align-items-center justify-content-between gap-3 mb-20" key={i}>
                      <div className="d-flex align-items-center">
                        <div className="flex-grow-1">
                          <h6 className="text-md mb-0">{label}</h6>
                        </div>
                      </div>
                      <span className="text-primary-light text-md fw-medium">{value}</span>
                    </div>
                  ))}
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
