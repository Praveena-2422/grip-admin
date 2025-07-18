import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import RoleAccessLayer from "../components/RoleAccessLayer";

const RoleAccessPage = () => {
  return (
    <>

      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
     <Breadcrumb title="Chapters" name="Chapter" />

        {/* RoleAccessLayer */}
        <RoleAccessLayer />

      </MasterLayout>

    </>
  );
};

export default RoleAccessPage;
