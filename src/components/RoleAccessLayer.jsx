import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
import { Link } from 'react-router-dom';

const RoleAccessLayer = () => {


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
            data-bs-toggle="modal"
            data-bs-target="#exampleModalTwo"
          >
            <Icon
              icon="ic:baseline-plus"
              className="icon text-xl line-height-1"
            />
            Add Region
          </button>


          <button
            type="button"
            className="btn btn-primary grip text-sm btn-sm px-12 py-12 radius-8 d-flex align-items-center gap-2"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <Icon
              icon="ic:baseline-plus"
              className="icon text-xl line-height-1"
            />
            Add New
          </button>
          </div>
        </div>
        <div className="card-body p-24">


          <div className='row gy-4'>

            {/* Style Two */}
            <div className='col-xxl-4 col-lg-4 col-sm-6 mb-0'>
              <div
                className="kanban-card bg-neutral-50 p-3 radius-8 "
                style={{ userSelect: 'none', background: 'rgb(255, 255, 255)' }}
              >
                <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid #eee', padding: '8px 0' }}>
                      <td style={{ padding: '8px 0' }}><strong>Chapter Name:</strong></td>
                      <td style={{ padding: '8px 0' }}>GRIP Aram <span className='chapterday'>(Tuesday)</span></td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #eee', padding: '8px 0' }}>
                      <td style={{ padding: '8px 0' }}><strong>Region:</strong></td>
                      <td style={{ padding: '8px 0' }}>Chennai</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #eee', padding: '8px 0' }}>
                      <td style={{ padding: '8px 0' }}><strong>CID:</strong></td>
                      <td style={{ padding: '8px 0' }}>Rajesh</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #eee', padding: '8px 0' }}>
                      <td style={{ padding: '8px 0' }}><strong>Location:</strong></td>
                      <td style={{ padding: '8px 0' }}>Pallavaram</td>
                    </tr>
                  </tbody>
                </table>

                <div className="d-flex align-items-center justify-content-between pt-3">
                  <div className="d-flex align-items-center gap-2">
                    <span className="start-date text-secondary-light">Status: <span className="text-success-600">Active</span></span>
                  </div>

                  <div className="d-flex align-items-center gap-2">

                    <button
                      type="button"
                      className="bg-info-focus bg-hover-info-200 text-info-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"
                    >
                           <Link
                                        to="/chapter-view"
                                        className=" text-sm btn-sm px-12 py-12 radius-8 d-flex align-items-center gap-2"
                                    >
                                       <Icon
                        icon="majesticons:eye"
                        className="icon text-xl"
                      />

                                    </Link>

                    </button>
                    <button
                      type="button"
                      className="bg-success-focus text-success-600 bg-hover-success-200 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"
                     data-bs-toggle="modal"
            data-bs-target="#exampleModalOne">
                      <Icon icon="lucide:edit" className="menu-icon" />
                    </button>
                    {/* <button
                      type="button"
                      className="remove-item-btn bg-danger-focus bg-hover-danger-200 text-danger-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"
                    >
                      <Icon icon="fluent:delete-24-regular" className="menu-icon" />
                    </button> */}
                  </div>
                </div>
              </div>

            </div>
            <div className='col-xxl-4 col-lg-4 col-sm-6'>
              <div
                className="kanban-card bg-neutral-50 p-3 radius-8 "
                style={{ userSelect: 'none', background: 'rgb(255, 255, 255)' }}
              >
                <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid #eee', padding: '8px 0' }}>
                      <td style={{ padding: '8px 0' }}><strong>Chapter Name:</strong></td>
                      <td style={{ padding: '8px 0' }}>GRIP Virutcham <span className='chapterday'>(Wednesday)</span></td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #eee', padding: '8px 0' }}>
                      <td style={{ padding: '8px 0' }}><strong>Region:</strong></td>
                      <td style={{ padding: '8px 0' }}>Chennai</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #eee', padding: '8px 0' }}>
                      <td style={{ padding: '8px 0' }}><strong>CID:</strong></td>
                      <td style={{ padding: '8px 0' }}>	Deepak</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #eee', padding: '8px 0' }}>
                      <td style={{ padding: '8px 0' }}><strong>Location:</strong></td>
                      <td style={{ padding: '8px 0' }}>Guindy</td>
                    </tr>
                  </tbody>
                </table>

                <div className="d-flex align-items-center justify-content-between pt-3">
                  <div className="d-flex align-items-center gap-2">
                    <span className="start-date text-secondary-light">Status: <span className="text-danger-600">InActive</span></span>
                  </div>

                  <div className="d-flex align-items-center gap-2">
                           <button
                      type="button"
                      className="bg-info-focus bg-hover-info-200 text-info-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"
                    >
                           <Link
                                        to="/chapter-view"
                                        className=" text-sm btn-sm px-12 py-12 radius-8 d-flex align-items-center gap-2"
                                    >
                                       <Icon
                        icon="majesticons:eye"
                        className="icon text-xl"
                      />

                                    </Link>

                    </button>
                    <button
                      type="button"
                      className="bg-success-focus text-success-600 bg-hover-success-200 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"
                      data-bs-toggle="modal"
            data-bs-target="#exampleModalOne">
                      <Icon icon="lucide:edit" className="menu-icon" />
                    </button>
                    {/* <button
                      type="button"
                      className="remove-item-btn bg-danger-focus bg-hover-danger-200 text-danger-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"
                    >
                      <Icon icon="fluent:delete-24-regular" className="menu-icon" />
                    </button> */}
                  </div>
                </div>
              </div>

            </div>
             <div className='col-xxl-4 col-lg-4 col-sm-6'>
              <div
                className="kanban-card bg-neutral-50 p-3 radius-8 "
                style={{ userSelect: 'none', background: 'rgb(255, 255, 255)' }}
              >
                <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid #eee', padding: '8px 0' }}>
                      <td style={{ padding: '8px 0' }}><strong>Chapter Name:</strong></td>
                      <td style={{ padding: '8px 0' }}>GRIP Madhuram <span className='chapterday'>(Thursday)</span></td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #eee', padding: '8px 0' }}>
                      <td style={{ padding: '8px 0' }}><strong>Region:</strong></td>
                      <td style={{ padding: '8px 0' }}>Chennai</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #eee', padding: '8px 0' }}>
                      <td style={{ padding: '8px 0' }}><strong>CID:</strong></td>
                      <td style={{ padding: '8px 0' }}>Sivanandham</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #eee', padding: '8px 0' }}>
                      <td style={{ padding: '8px 0' }}><strong>Location:</strong></td>
                      <td style={{ padding: '8px 0' }}>Nungambakkam</td>
                    </tr>
                  </tbody>
                </table>

                <div className="d-flex align-items-center justify-content-between pt-3">
                  <div className="d-flex align-items-center gap-2">
                    <span className="start-date text-secondary-light">Status: <span className="text-success-600">Active</span></span>
                  </div>

                  <div className="d-flex align-items-center gap-2">
                       <button
                      type="button"
                      className="bg-info-focus bg-hover-info-200 text-info-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"
                    >
                           <Link
                                        to="/chapter-view"
                                        className=" text-sm btn-sm px-12 py-12 radius-8 d-flex align-items-center gap-2"
                                    >
                                       <Icon
                        icon="majesticons:eye"
                        className="icon text-xl"
                      />

                                    </Link>

                    </button>
                    <button
                      type="button"
                      className="bg-success-focus text-success-600 bg-hover-success-200 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"
                     data-bs-toggle="modal"
            data-bs-target="#exampleModalOne" >
                      <Icon icon="lucide:edit" className="menu-icon" />
                    </button>
                    {/* <button
                      type="button"
                      className="remove-item-btn bg-danger-focus bg-hover-danger-200 text-danger-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"
                    >
                      <Icon icon="fluent:delete-24-regular" className="menu-icon" />
                    </button> */}
                  </div>
                </div>
              </div>

            </div>
              <div className='col-xxl-4 col-lg-4 col-sm-6'>
              <div
                className="kanban-card bg-neutral-50 p-3 radius-8 "
                style={{ userSelect: 'none', background: 'rgb(255, 255, 255)' }}
              >
                <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid #eee', padding: '8px 0' }}>
                      <td style={{ padding: '8px 0' }}><strong>Chapter Name:</strong></td>
                      <td style={{ padding: '8px 0' }}>GRIP Kireedam <span className='chapterday'>(Friday)</span></td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #eee', padding: '8px 0' }}>
                      <td style={{ padding: '8px 0' }}><strong>Region:</strong></td>
                      <td style={{ padding: '8px 0' }}>Chennai</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #eee', padding: '8px 0' }}>
                      <td style={{ padding: '8px 0' }}><strong>CID:</strong></td>
                      <td style={{ padding: '8px 0' }}>Vignesh</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #eee', padding: '8px 0' }}>
                      <td style={{ padding: '8px 0' }}><strong>Location:</strong></td>
                      <td style={{ padding: '8px 0' }}>Vadapalani</td>
                    </tr>
                  </tbody>
                </table>

                <div className="d-flex align-items-center justify-content-between pt-3">
                  <div className="d-flex align-items-center gap-2">
                    <span className="start-date text-secondary-light">Status: <span className="text-success-600">Active</span></span>
                  </div>

                  <div className="d-flex align-items-center gap-2">
                          <button
                      type="button"
                      className="bg-info-focus bg-hover-info-200 text-info-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"
                    >
                           <Link
                                        to="/chapter-view"
                                        className=" text-sm btn-sm px-12 py-12 radius-8 d-flex align-items-center gap-2"
                                    >
                                       <Icon
                        icon="majesticons:eye"
                        className="icon text-xl"
                      />

                                    </Link>

                    </button>
                    <button
                      type="button"
                      className="bg-success-focus text-success-600 bg-hover-success-200 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"
                   data-bs-toggle="modal"
            data-bs-target="#exampleModalOne"   >
                      <Icon icon="lucide:edit" className="menu-icon" />
                    </button>
                    {/* <button
                      type="button"
                      className="remove-item-btn bg-danger-focus bg-hover-danger-200 text-danger-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"
                    >
                      <Icon icon="fluent:delete-24-regular" className="menu-icon" />
                    </button> */}
                  </div>
                </div>
              </div>

            </div>


                <div className='col-xxl-4 col-lg-4 col-sm-6'>
              <div
                className="kanban-card bg-neutral-50 p-3 radius-8 "
                style={{ userSelect: 'none', background: 'rgb(255, 255, 255)' }}
              >
                <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid #eee', padding: '8px 0' }}>
                      <td style={{ padding: '8px 0' }}><strong>Chapter Name:</strong></td>
                      <td style={{ padding: '8px 0' }}>GRIP Amudham <span className='chapterday'>(Saturday)</span></td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #eee', padding: '8px 0' }}>
                      <td style={{ padding: '8px 0' }}><strong>Region:</strong></td>
                      <td style={{ padding: '8px 0' }}>Chennai</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #eee', padding: '8px 0' }}>
                      <td style={{ padding: '8px 0' }}><strong>CID:</strong></td>
                      <td style={{ padding: '8px 0' }}>Rahul</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #eee', padding: '8px 0' }}>
                      <td style={{ padding: '8px 0' }}><strong>Location:</strong></td>
                      <td style={{ padding: '8px 0' }}>Anna Nagar</td>
                    </tr>
                  </tbody>
                </table>

                <div className="d-flex align-items-center justify-content-between pt-3">
                  <div className="d-flex align-items-center gap-2">
                    <span className="start-date text-secondary-light">Status: <span className="text-success-600">Active</span></span>
                  </div>

                  <div className="d-flex align-items-center gap-2">
                         <button
                      type="button"
                      className="bg-info-focus bg-hover-info-200 text-info-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"
                    >
                           <Link
                                        to="/chapter-view"
                                        className=" text-sm btn-sm px-12 py-12 radius-8 d-flex align-items-center gap-2"
                                    >
                                       <Icon
                        icon="majesticons:eye"
                        className="icon text-xl"
                      />

                                    </Link>

                    </button>
                    <button
                      type="button"
                      className="bg-success-focus text-success-600 bg-hover-success-200 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"
                   data-bs-toggle="modal"
            data-bs-target="#exampleModalOne"   >
                      <Icon icon="lucide:edit" className="menu-icon" />
                    </button>
                    {/* <button
                      type="button"
                      className="remove-item-btn bg-danger-focus bg-hover-danger-200 text-danger-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"
                    >
                      <Icon icon="fluent:delete-24-regular" className="menu-icon" />
                    </button> */}
                  </div>
                </div>
              </div>

            </div>


                <div className='col-xxl-4 col-lg-4 col-sm-6'>
              <div
                className="kanban-card bg-neutral-50 p-3 radius-8 "
                style={{ userSelect: 'none', background: 'rgb(255, 255, 255)' }}
              >
                <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid #eee', padding: '8px 0' }}>
                      <td style={{ padding: '8px 0' }}><strong>Chapter Name:</strong></td>
                      <td style={{ padding: '8px 0' }}>GRIP Aram <span className='chapterday'>(Tuesday)</span></td>
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
                  </tbody>
                </table>

                <div className="d-flex align-items-center justify-content-between pt-3">
                  <div className="d-flex align-items-center gap-2">
                    <span className="start-date text-secondary-light">Status: <span className="text-success-600">Active</span></span>
                  </div>

                  <div className="d-flex align-items-center gap-2">
                          <button
                      type="button"
                      className="bg-info-focus bg-hover-info-200 text-info-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"
                    >
                           <Link
                                        to="/chapter-view"
                                        className=" text-sm btn-sm px-12 py-12 radius-8 d-flex align-items-center gap-2"
                                    >
                                       <Icon
                        icon="majesticons:eye"
                        className="icon text-xl"
                      />

                                    </Link>

                    </button>
                    <button
                      type="button"
                      className="bg-success-focus text-success-600 bg-hover-success-200 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"
                   data-bs-toggle="modal"
            data-bs-target="#exampleModalOne"   >
                      <Icon icon="lucide:edit" className="menu-icon" />
                    </button>
                    {/* <button
                      type="button"
                      className="remove-item-btn bg-danger-focus bg-hover-danger-200 text-danger-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"
                    >
                      <Icon icon="fluent:delete-24-regular" className="menu-icon" />
                    </button> */}
                  </div>
                </div>
              </div>

            </div>

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

export default RoleAccessLayer;