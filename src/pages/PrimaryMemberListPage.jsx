import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";

import PrimaryMemberListLayer from "../components/PrimaryMemberListLayer";


const PrimaryMemberListPage = () => {
  return (
    <>

      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        {/* <Breadcrumb title="Users Grid" /> */}

        {/* UsersListLayer */}
        <PrimaryMemberListLayer/>

      </MasterLayout>

    </>
  );
};

export default PrimaryMemberListPage;
