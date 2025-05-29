import React from "react";
import MasterLayout from "../masterLayout/MasterLayout";
import Breadcrumb from "../components/Breadcrumb";

import PaymentListLayer from "../components/PaymentListLayer";


const PaymentListPage = () => {
  return (
    <>

      {/* MasterLayout */}
      <MasterLayout>

        {/* Breadcrumb */}
        <Breadcrumb title="Payment List"  />

        {/* UsersListLayer */}
        <PaymentListLayer />

      </MasterLayout>

    </>
  );
};

export default PaymentListPage;
