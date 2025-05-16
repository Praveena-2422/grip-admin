import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
import { Link } from 'react-router-dom';

const ChapterViewLayer = () => {
  return (
    <>
      <div className="card h-100 p-0 radius-12">
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

          <div className="d-flex align-items-center flex-wrap gap-1">

        <button
            type="button"
            className="btn btn-primary grip text-sm btn-sm px-12 py-12 radius-8 d-flex align-items-center gap-2"

          >
            <Icon
              icon="ic:baseline-plus"
              className="icon text-xl line-height-1"
            />
            Add Member
          </button>


           <select className="form-select form-select-sm w-auto bg-base border text-secondary-light rounded-pill" defaultValue="">
                        <option value="" disabled>
                            This Week
                        </option>
                        <option value="November">Last Week</option>
                        <option value="December">Last Month</option>
                        <option value="January">This Month</option>
                        <option value="February">This Term</option>

                    </select>
          </div>
        </div>
        <div className="card-body p-24">


           <div className="row gy-4">
                         {/* Dashboard Widget Start */}
                         <div className="col-lg-2 col-sm-6 colchange">
                             <div className="card px-24 py-16 shadow-none radius-12 border h-100 bg-gradient-start-3">
                                 <div className="card-body p-0">
                                     <div className="d-flex flex-wrap align-items-center justify-content-between gap-1">
                                         <div className="d-flex align-items-center flex-wrap gap-16">

                                             <div className="mt-20">
 <span className="mb-50 w-40-px h-40-px bg-primary-600 flex-shrink-0 text-white d-flex justify-content-center align-items-center rounded-circle h6 mb-0">
                                                 <Icon
                                                     icon="flowbite:users-group-solid"
                                                     className="icon"
                                                 />
                                             </span>


                                                  <h6 className="fw-semibold mb-10">Associates</h6>

                                                   <span className="fw-medium text-secondary-light text-md">
                                                     120
                                                 </span>

                                             </div>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         {/* Dashboard Widget End */}
                         {/* Dashboard Widget Start */}
                             <div className="col-lg-2 col-sm-6 colchange">
                             <div className="card px-24 py-16 shadow-none radius-12 border h-100 bg-gradient-start-3">
                                 <div className="card-body p-0">
                                     <div className="d-flex flex-wrap align-items-center justify-content-between gap-1">
                                         <div className="d-flex align-items-center flex-wrap gap-16">

                                             <div className="mt-20">
 <span className="mb-50 w-40-px h-40-px bg-primary-600 flex-shrink-0 text-white d-flex justify-content-center align-items-center rounded-circle h6 mb-0">
                                                 <Icon
                                                     icon="flowbite:users-group-solid"
                                                     className="icon"
                                                 />
                                             </span>


                                                  <h6 className="fw-semibold mb-10">Thankyou Note</h6>

                                                   <span className="fw-medium text-secondary-light text-md">
                                                     120
                                                 </span>

                                             </div>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         {/* Dashboard Widget End */}
                         {/* Dashboard Widget Start */}
                             <div className="col-lg-2 col-sm-6 colchange">
                             <div className="card px-24 py-16 shadow-none radius-12 border h-100 bg-gradient-start-3">
                                 <div className="card-body p-0">
                                     <div className="d-flex flex-wrap align-items-center justify-content-between gap-1">
                                         <div className="d-flex align-items-center flex-wrap gap-16">

                                             <div className="mt-20">
 <span className="mb-50 w-40-px h-40-px bg-primary-600 flex-shrink-0 text-white d-flex justify-content-center align-items-center rounded-circle h6 mb-0">
                                                 <Icon
                                                     icon="flowbite:users-group-solid"
                                                     className="icon"
                                                 />
                                             </span>


                                                  <h6 className="fw-semibold mb-10">121's</h6>

                                                   <span className="fw-medium text-secondary-light text-md">
                                                     120
                                                 </span>

                                             </div>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         {/* Dashboard Widget End */}

                           {/* Dashboard Widget Start */}
                         <div className="col-lg-2 col-sm-6 colchange">
                             <div className="card px-24 py-16 shadow-none radius-12 border h-100 bg-gradient-start-3">
                                 <div className="card-body p-0">
                                     <div className="d-flex flex-wrap align-items-center justify-content-between gap-1">
                                         <div className="d-flex align-items-center flex-wrap gap-16">

                                             <div className="mt-20">
 <span className="mb-50 w-40-px h-40-px bg-primary-600 flex-shrink-0 text-white d-flex justify-content-center align-items-center rounded-circle h6 mb-0">
                                                 <Icon
                                                     icon="flowbite:users-group-solid"
                                                     className="icon"
                                                 />
                                             </span>


                                                  <h6 className="fw-semibold mb-10">Referrals</h6>

                                                   <span className="fw-medium text-secondary-light text-md">
                                                     120
                                                 </span>

                                             </div>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         {/* Dashboard Widget End */}

                           {/* Dashboard Widget Start */}
                            <div className="col-lg-2 col-sm-6 colchange">
                             <div className="card px-24 py-16 shadow-none radius-12 border h-100 bg-gradient-start-3">
                                 <div className="card-body p-0">
                                     <div className="d-flex flex-wrap align-items-center justify-content-between gap-1">
                                         <div className="d-flex align-items-center flex-wrap gap-16">

                                             <div className="mt-20">
 <span className="mb-50 w-40-px h-40-px bg-primary-600 flex-shrink-0 text-white d-flex justify-content-center align-items-center rounded-circle h6 mb-0">
                                                 <Icon
                                                     icon="flowbite:users-group-solid"
                                                     className="icon"
                                                 />
                                             </span>


                                                  <h6 className="fw-semibold mb-10">Visitors</h6>

                                                   <span className="fw-medium text-secondary-light text-md">
                                                     120
                                                 </span>

                                             </div>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         {/* Dashboard Widget End */}

                           {/* Dashboard Widget Start */}
                                <div className="col-lg-2 col-sm-6 colchange">
                             <div className="card px-24 py-16 shadow-none radius-12 border h-100 bg-gradient-start-3">
                                 <div className="card-body p-0">
                                     <div className="d-flex flex-wrap align-items-center justify-content-between gap-1">
                                         <div className="d-flex align-items-center flex-wrap gap-16">

                                             <div className="mt-20">
 <span className="mb-50 w-40-px h-40-px bg-primary-600 flex-shrink-0 text-white d-flex justify-content-center align-items-center rounded-circle h6 mb-0">
                                                 <Icon
                                                     icon="flowbite:users-group-solid"
                                                     className="icon"
                                                 />
                                             </span>


                                                  <h6 className="fw-semibold mb-10">Power Date</h6>

                                                   <span className="fw-medium text-secondary-light text-md">
                                                     120
                                                 </span>

                                             </div>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         {/* Dashboard Widget End */}

                           {/* Dashboard Widget Start */}
                        <div className="col-lg-2 col-sm-6 colchange">
                             <div className="card px-24 py-16 shadow-none radius-12 border h-100 bg-gradient-start-3">
                                 <div className="card-body p-0">
                                     <div className="d-flex flex-wrap align-items-center justify-content-between gap-1">
                                         <div className="d-flex align-items-center flex-wrap gap-16">

                                             <div className="mt-20">
 <span className="mb-50 w-40-px h-40-px bg-primary-600 flex-shrink-0 text-white d-flex justify-content-center align-items-center rounded-circle h6 mb-0">
                                                 <Icon
                                                     icon="flowbite:users-group-solid"
                                                     className="icon"
                                                 />
                                             </span>


                                                  <h6 className="fw-semibold mb-10">Chief Guest</h6>

                                                   <span className="fw-medium text-secondary-light text-md">
                                                     120
                                                 </span>

                                             </div>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         {/* Dashboard Widget End */}

                           {/* Dashboard Widget Start */}
                           <div className="col-lg-2 col-sm-6 colchange">
                             <div className="card px-24 py-16 shadow-none radius-12 border h-100 bg-gradient-start-3">
                                 <div className="card-body p-0">
                                     <div className="d-flex flex-wrap align-items-center justify-content-between gap-1">
                                         <div className="d-flex align-items-center flex-wrap gap-16">

                                             <div className="mt-20">
 <span className="mb-50 w-40-px h-40-px bg-primary-600 flex-shrink-0 text-white d-flex justify-content-center align-items-center rounded-circle h6 mb-0">
                                                 <Icon
                                                     icon="flowbite:users-group-solid"
                                                     className="icon"
                                                 />
                                             </span>


                                                  <h6 className="fw-semibold mb-10">Events</h6>

                                                   <span className="fw-medium text-secondary-light text-md">
                                                     120
                                                 </span>

                                             </div>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         {/* Dashboard Widget End */}

                           {/* Dashboard Widget Start */}
                        <div className="col-lg-2 col-sm-6 colchange">
                             <div className="card px-24 py-16 shadow-none radius-12 border h-100 bg-gradient-start-3">
                                 <div className="card-body p-0">
                                     <div className="d-flex flex-wrap align-items-center justify-content-between gap-1">
                                         <div className="d-flex align-items-center flex-wrap gap-16">

                                             <div className="mt-20">
 <span className="mb-50 w-40-px h-40-px bg-primary-600 flex-shrink-0 text-white d-flex justify-content-center align-items-center rounded-circle h6 mb-0">
                                                 <Icon
                                                     icon="flowbite:users-group-solid"
                                                     className="icon"
                                                 />
                                             </span>


                                                  <h6 className="fw-semibold mb-10">Trainings</h6>

                                                   <span className="fw-medium text-secondary-light text-md">
                                                     120
                                                 </span>

                                             </div>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         {/* Dashboard Widget End */}

                           {/* Dashboard Widget Start */}
                                  <div className="col-lg-2 col-sm-6 colchange">
                             <div className="card px-24 py-16 shadow-none radius-12 border h-100 bg-gradient-start-3">
                                 <div className="card-body p-0">
                                     <div className="d-flex flex-wrap align-items-center justify-content-between gap-1">
                                         <div className="d-flex align-items-center flex-wrap gap-16">

                                             <div className="mt-20">
 <span className="mb-50 w-40-px h-40-px bg-primary-600 flex-shrink-0 text-white d-flex justify-content-center align-items-center rounded-circle h6 mb-0">
                                                 <Icon
                                                     icon="flowbite:users-group-solid"
                                                     className="icon"
                                                 />
                                             </span>


                                                  <h6 className="fw-semibold mb-10">Absents</h6>

                                                   <span className="fw-medium text-secondary-light text-md">
                                                     120
                                                 </span>

                                             </div>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         {/* Dashboard Widget End */}
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