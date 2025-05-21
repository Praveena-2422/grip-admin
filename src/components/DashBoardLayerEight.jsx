import React from "react";
import UnitCountSix from "./child/UnitCountSix";
import EarningStatistic from "./child/EarningStatistic";
import PatientVisitedDepartment from "./child/PatientVisitedbyDepartment";
import PatientVisitByGender from "./child/PatientVisitByGender";
import TopPerformanceTwo from "./child/TopPerformanceTwo";
import LatestAppointmentsOne from "./child/LatestAppointmentsOne";
import TotalIncome from "./child/TotalIncome";
import ExpenseStatistics from "./child/ExpenseStatistics";
import AvailableTreatments from "./child/AvailableTreatments";
import HealthReportsDocument from "./child/HealthReportsDocument";
import SourceVisitors from "./child/SourceVisitors";

const DashBoardLayerEight = () => {
  return (
    <>
      <div className='row gy-4'>
        <div className='col-xxxl-9'>
          <div className='row gy-4'>
            {/* UnitCountSix */}
            <UnitCountSix />
            {/* Earning Statistic */}
            {/* <EarningStatistic /> */}

            {/* PatientVisitedDepartment */}
            {/* <PatientVisitedDepartment /> */}

            {/* PatientVisitByGender */}
            {/* <PatientVisitByGender /> */}



            {/* TopPerformanceTwo */}


            {/* LatestAppointmentsOne */}

            <SourceVisitors />
            <TotalIncome />
              {/* <ExpenseStatistics /> */}



          </div>
        </div>
        <div className='col-xxxl-3'>
          <div className='row gy-4'>
            {/* TotalIncome */}

            <TopPerformanceTwo />

            <LatestAppointmentsOne />

            {/* AvailableTreatments */}
            {/* <AvailableTreatments /> */}

            {/* HealthReportsDocument */}
            {/* <HealthReportsDocument /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoardLayerEight;
