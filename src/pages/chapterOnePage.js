import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";
import ChapterOneLayer from "../components/ChapterOneLayer";


const ChapterOnePage = () => {
  return (
    <>

      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        {/* <Breadcrumb title="Users Grid" /> */}

        {/* UsersListLayer */}
        <ChapterOneLayer />

      </MasterLayout>

    </>
  );
};

export default ChapterOnePage;
