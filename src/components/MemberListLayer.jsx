import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';


const initialMembers = [
  {
    id: 1, name: "Anbu", company: "Iriscoders", category: "Website", phone: "9876543210", status: ""
  },
  {
    id: 2, name: "Venukumar", company: "Brandkiter", category: "Social media", phone: "8907654345", status: ""
  },
  {
    id: 3, name: "Deepika", company: "Topvfx", category: "Website", phone: "7890654321", status: ""
  },
  {
    id: 4, name: "Vignesh", company: "Indsam", category: "Application", phone: "98544321456", status: ""
  },
  {
    id: 5, name: "Muthukumar", company: "VK Architect", category: "Reference", phone: "90443217865", status: ""
  }
];

const MemberListLayer = () => {


  const navigate = useNavigate();
  const [resetStep, setResetStep] = useState(0);
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [username, setUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleResetClick = () => {
    setResetStep(1); // Start the flow
  };

  const handleSendOtp = () => {
    if (mobile.length >= 10) setResetStep(2);
    else alert('Enter a valid mobile number');
  };

  const handleVerifyOtp = () => {
    if (otp.length === 6) setResetStep(3);
    else alert('Enter valid 6-digit OTP');
  };

  const handleSavePassword = () => {
    // if (!username) return alert('Enter username');
    if (newPassword !== confirmPassword) return alert("Passwords don't match!");
    setResetStep(4);
    setTimeout(() => {
      setResetStep(0);
      navigate('/');
    }, 3000);
  };





  const [members, setMembers] = useState(initialMembers);

  const handleStatusChange = (index, value) => {
    const updated = [...members];
    updated[index].status = value;
    setMembers(updated);
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

                        <select className="form-select form-select-sm w-auto" defaultValue="Select Number">
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
                            <option value="Select Number" >
                               This Week
                            </option>
                            <option value="10">This Month</option>
                            <option value="15">Last Week</option>
                            <option value="20">Last Month</option>
                            <option value="20">This Term</option>


                        </select>

                </div>
        <Link to="/add-member" className="btn btn-primary grip text-sm btn-sm px-12 py-12 radius-8 d-flex align-items-center gap-2">
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
                <th className="text-center">Status</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member, index) => (
                <tr key={member.id}>
                  <td>{index + 1}.</td>
                  <td>{member.name}</td>
                  <td>{member.company}</td>
                  <td>
                    <span className="text-md mb-0 fw-normal text-secondary-light">{member.category}</span>
                  </td>
                  <td>{member.phone}</td>
                  <td className="text-center">
                    <select
                      className="form-select form-select-sm w-auto  radius-12 h-40-px"
                      style={{
                        backgroundColor:
                          member.status === 'Activate'
                            ? '#d1e7dd'
                            : member.status === 'Decline'
                              ? '#f8d7da'
                              : 'white',
                        color:
                          member.status === 'Activate'
                            ? '#0f5132'
                            : member.status === 'Decline'
                              ? '#842029'
                              : 'inherit',
                        border:
                          member.status === 'Activate'
                            ? '1px solid #badbcc'
                            : member.status === 'Decline'
                              ? '1px solid #f5c2c7'
                              : '',
                        appearance:
                          member.status === 'Activate' || member.status === 'Decline'
                            ? 'none'
                            : 'auto',
                        backgroundImage:
                          member.status === 'Activate' || member.status === 'Decline'
                            ? 'none'
                            : undefined,
                      }}
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
                  <td className="text-center">
                    <div className="d-flex align-items-center gap-10 justify-content-center">
                      <button type="button" className="bg-info-focus bg-hover-info-200 text-info-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal">

                        <Icon icon="majesticons:eye-line" className="icon text-xl" />
                      </button>
                      <button type="button" className="bg-success-focus text-success-600 bg-hover-success-200 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle">
                        <Icon icon="lucide:edit" className="menu-icon" />
                      </button>
                      <button type="button" onClick={handleResetClick} className="remove-item-btn bg-danger-focus bg-hover-danger-200 text-danger-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle">
                        <Icon icon="fluent:arrow-clockwise-24-regular" className="menu-icon" />

                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
                Member Details
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body p-24">
              <div class="mb-3 row">
                <div class="col-md-6">
                  <p class="font-size-14 py-2"> Name :</p>
                </div>


                <div class="col-md-6">
                  <span class="fw-normal text-body">Anbu</span>
                </div>


                <div class="col-md-6">
                  <p class="font-size-14 py-2"> Company Name :</p>
                </div>


                <div class="col-md-6">
                  <span class="fw-normal text-body">Iriscoders</span>
                </div>



                <div class="col-md-6">
                  <p class="font-size-14 py-2"> Category :</p>
                </div>


                <div class="col-md-6">
                  <span class="fw-normal text-body">Website</span>
                </div>



                <div class="col-md-6">
                  <p class="font-size-14 py-2"> Mobile Number :</p>
                </div>


                <div class="col-md-6">
                  <span class="fw-normal text-body">98675 12543</span>
                </div>



                <div class="col-md-6">
                  <p class="font-size-14 py-2"> Status :</p>
                </div>


                <div class="col-md-6">
                  <span class="fw-normal text-body">Activated</span>
                </div>






              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal End */}


      <Modal
        show={resetStep > 0}
        onHide={() => setResetStep(0)}
        backdrop="static"
        centered
        dialogClassName="custom-reset-modal"
      >
        <Modal.Body className="p-50 text-center" style={{ fontSize: '0.9rem' }}>
          {resetStep === 1 && (
            <>
              <h6 className="mb-5">Enter Mobile Number</h6>
              <input
                type="text"
                className="form-control mb-3 mx-auto shadow-sm border border-secondary rounded"
                style={{ maxWidth: '300px' }}
                placeholder="Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
              <Button variant="primary grip" onClick={handleSendOtp}>Send OTP</Button>
            </>
          )}

          {resetStep === 2 && (
            <>
              <h6 className="mb-5">Enter OTP</h6>
              <input
                type="text"
                className="form-control mb-3 mx-auto shadow-sm border border-secondary rounded"
                style={{ maxWidth: '300px' }}
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <Button variant="primary grip" onClick={handleVerifyOtp}>Verify OTP</Button>
            </>
          )}

          {resetStep === 3 && (
            <>
              <h6 className="mb-5">Reset Password</h6>
              <input
                type="text"
                className="form-control mb-3 mx-auto shadow-sm border border-secondary rounded"
                style={{ maxWidth: '300px' }}
                placeholder="User Name"
                value="Anbu"
                readOnly
              />
              <input
                type="password"
                className="form-control mb-3 pb-2 mx-auto shadow-sm border border-secondary rounded"
                style={{ maxWidth: '300px' }}
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <input
                type="password"
                className="form-control mb-3 pb-2 mx-auto shadow-sm border border-secondary rounded"
                style={{ maxWidth: '300px' }}
                placeholder="Repeat Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <Button variant="success grip" onClick={handleSavePassword}>Save</Button>
            </>
          )}

          {resetStep === 4 && (
            <div>
              <h6 className="mb-2">Password changed successfully!</h6>
              <p>Redirecting to login...</p>
            </div>
          )}
        </Modal.Body>
      </Modal>



      {/* Style to hide dropdown icon */}
      <style>{`
        select.no-arrow {
          background-image: none !important;
        }

      `}</style>
    </div>
  );
};

export default MemberListLayer;
