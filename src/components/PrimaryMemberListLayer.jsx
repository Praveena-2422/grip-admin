import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const initialMembers = [
  { id: 1, name: "Anbu", company: "Iriscoders", category: "Website", phone: "9876543210", status: "" },
  { id: 2, name: "Venukumar", company: "Brandkiter", category: "Social media", phone: "8907654345", status: "" },
  { id: 3, name: "Deepika", company: "Topvfx", category: "Website", phone: "7890654321", status: "" },
  { id: 4, name: "Vignesh", company: "Indsam", category: "Application", phone: "98544321456", status: "" },
  { id: 5, name: "Muthukumar", company: "VK Architect", category: "Reference", phone: "90443217865", status: "" }
];

const PrimaryMemberListLayer = () => {
  const [members, setMembers] = useState(initialMembers);
  const [selectedMember, setSelectedMember] = useState(null);

  const handleStatusChange = (index, value) => {
    const updated = [...members];
    updated[index].status = value;
    setMembers(updated);
  };

  const handleViewClick = (member) => {
    setSelectedMember(member);
  };

  return (
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

          {/* <select className="form-select form-select-sm w-auto" defaultValue="Select Number">
                            <option value="Select Number" disabled>
                                Select Chapter
                            </option>
                            <option value="10">GRIP Aram</option>
                            <option value="15">GRIP Virutcham</option>
                            <option value="20">GRIP Madhuram</option>
                            <option value="20">GRIP Kireedam</option>
                             <option value="20">GRIP Amudham</option>

                        </select>

                             <select className="form-select form-select-sm w-auto" defaultValue="Select Number">
                            <option value="Select Number" disabled>
                               This Week
                            </option>
                            <option value="10">This Month</option>
                            <option value="15">Last Week</option>
                            <option value="20">Last Month</option>
                            <option value="20">This Term</option>


                        </select> */}

        </div>
        <Link to="/add-primarymember" className="btn btn-primary grip text-sm btn-sm px-12 py-12 radius-8 d-flex align-items-center gap-2">
          <Icon icon="ic:baseline-plus" className="icon text-xl line-height-1" />
          Add New
        </Link>
      </div>

      <div className="card-body p-24">
        <div className="table-responsive scroll-sm">
          <table className="table bordered-table sm-table mb-0">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>Company name</th>
                <th>Category</th>
                <th>Mobile Number</th>
                <th >Status</th>
                <th >Action</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member, index) => (
                <tr key={member.id}>
                  <td>{index + 1}.</td>
                  <td>{member.name}</td>
                  <td>{member.company}</td>
                  <td><span className="text-md mb-0 fw-normal text-secondary-light">{member.category}</span></td>
                  <td>{member.phone}</td>
                  <td >
                    <select
                      className={`form-select newonee form-select-sm w-auto radius-12 h-40-px custom-status-select ${member.status === 'Activate'
                          ? 'status-activate'
                          : member.status === 'Decline'
                            ? 'status-decline'
                            : ''
                        }`}
                      value={member.status || 'Select Status'}
                      onChange={(e) => handleStatusChange(index, e.target.value)}
                    >
                      <option value="Select Status" disabled>
                        Select Status
                      </option>
                      <option value="Activate">Activate</option>
                      <option value="Decline">Decline</option>
                    </select>
                  </td>
                  <td >
                    <div className="d-flex  gap-10 justify-content-start">
                      <button
                        type="button"
                        className="bg-info-focus bg-hover-info-200 text-info-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => handleViewClick(member)}
                      >
                        <Icon icon="majesticons:eye-line" className="icon text-xl" />
                      </button>
                      <button type="button" className="bg-success-focus text-success-600 bg-hover-success-200 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle">
                        <Icon icon="lucide:edit" className="menu-icon" />
                      </button>

                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-m modal-dialog-centered">
          <div className="modal-content radius-16 bg-base">
            <div className="modal-header py-16 px-24 border-bottom">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Member Details</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body p-24">
              {selectedMember && (
                <div className="mb-3 row">
                  <div className="col-md-6"><p className="font-size-14 py-2">Name:</p></div>
                  <div className="col-md-6"><span className="fw-normal text-body">{selectedMember.name}</span></div>

                  <div className="col-md-6"><p className="font-size-14 py-2">Company Name:</p></div>
                  <div className="col-md-6"><span className="fw-normal text-body">{selectedMember.company}</span></div>

                  <div className="col-md-6"><p className="font-size-14 py-2">Category:</p></div>
                  <div className="col-md-6"><span className="fw-normal text-body">{selectedMember.category}</span></div>

                  <div className="col-md-6"><p className="font-size-14 py-2">Mobile Number:</p></div>
                  <div className="col-md-6"><span className="fw-normal text-body">{selectedMember.phone}</span></div>

                  <div className="col-md-6"><p className="font-size-14 py-2">Status:</p></div>
                  <div className="col-md-6"><span className="fw-normal text-body">{selectedMember.status || 'Not Set'}</span></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Optional style */}
      <style>{`
        select.no-arrow {
          background-image: none !important;
        }
      `}</style>
    </div>
  );
};

export default PrimaryMemberListLayer;
