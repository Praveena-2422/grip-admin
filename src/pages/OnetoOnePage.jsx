import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";

import OnetoOneLayer from "../components/OnetoOneLayer";

const OnetoOnePage = () => {
  return (
    <>

      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        {/* <Breadcrumb title="Chapter" /> */}

        {/* RoleAccessLayer */}
        <OnetoOneLayer />

      </MasterLayout>

    </>
  );
};

export default OnetoOnePage;
