import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";

import MemberListLayer from "../components/MemberListLayer";


const MemberListPage = () => {
  return (
    <>

      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Members List" name="Member" />

        {/* UsersListLayer */}
        <MemberListLayer />

      </MasterLayout>

    </>
  );
};

export default MemberListPage;
