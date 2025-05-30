import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';




const initialMembers = [
    {
        id: 1,
        date: "10 June 2025",
        purpose: "Monthly meeting fee",
        amount: "₹1000",
        chapter: "GRIP Aram",
        comments: "Monthly Activity"
    },
    {
        id: 2,
        date: "12 June 2025",
        purpose: "Event Fee",
        amount: "₹500",
        chapter: "GRIP Virutcham",
        comments: "For Special event"
    },
    {
        id: 3,
        date: "15 June 2025",
        purpose: "Membership Renewal",
        amount: "₹2000",
        chapter: "GRIP Madhuram",
        comments: "Annual subscription"
    },
    {
        id: 4,
        date: "18 June 2025",
        purpose: "Special Contribution",
        amount: "₹1500",
        chapter: "GRIP Kireedam",
        comments: "For pongal celebration"
    },
    {
        id: 5,
        date: "22 June 2025",
        purpose: "Training",
        amount: "₹300",
        chapter: "All",
        comments: "121 Training"
    }
];

const PaymentListLayer = () => {






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
                        <option value="20">All</option>

                    </select>

                    <select className="form-select form-select-sm w-auto" defaultValue="Select Number">
                        <option value="Select Number" >
                            Today
                        </option>
                        <option value="10">Yesterday</option>
                        <option value="15">Last Week</option>
                        <option value="20">Last Month</option>
                        <option value="20">This Term</option>


                    </select>

                </div>
                <Link to="/add-member" className="btn btn-primary grip text-sm btn-sm px-12 py-12 radius-8 d-flex align-items-center gap-2" data-bs-toggle="modal"
                    data-bs-target="#exampleModalOne">
                    <Icon icon="ic:baseline-plus" className="icon text-xl line-height-1" />
                    Payment Creation
                </Link>
            </div>

            <div className="card-body p-24">
                <div className="table-responsive scroll-sm">
                    <table className="table bordered-table sm-table mb-0">
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Date</th>
                                <th>Purpose</th>
                                <th>Amount</th>
                                <th>Chapter</th>
                                <th>Comments</th>

                                <th className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {members.map((member, index) => (
                                <tr key={member.id}>
                                    <td>{index + 1}.</td>
                                    <td>{member.date}</td>
                                    <td>{member.purpose}</td>
                                    <td>{member.amount}</td>
                                    <td>
                                        <span className="text-md mb-0 fw-normal text-secondary-light">
                                            {member.chapter}
                                        </span>
                                    </td>
                                    <td>{member.comments}</td>
                                    <td className="text-center">
                                        <div className="d-flex align-items-center gap-10 justify-content-center">
                                            <button
                                                type="button"
                                                className="bg-info-focus bg-hover-info-200 text-info-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"

                                            >
                                                <Link
                                                    to="/transaction-list"
                                                    className="text-sm btn-sm px-12 py-12 radius-8 d-flex align-items-center gap-2"
                                                >

                                                    <Icon icon="majesticons:eye-line" className="icon text-xl" />
                                                </Link>



                                            </button>
                                            <button
                                                type="button"
                                                className="bg-success-focus text-success-600 bg-hover-success-200 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle" data-bs-toggle="modal"
                                                data-bs-target="#exampleModalTwo"
                                            >
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
                                Payment Creation
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
                                            Purpose
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control radius-8"

                                        />
                                    </div>


                                            <div className="col-12 mb-20">
                            <label className="form-label fw-semibold text-primary-light text-sm mb-8">Date </label>
                            <div className="d-flex gap-2">
                                {/* Day Dropdown */}
                                <select name="dob-day" className="form-select">
                                    <option value="">Day</option>
                                    {[...Array(31)].map((_, i) => (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    ))}
                                </select>

                                {/* Month Dropdown */}
                                <select name="dob-month" className="form-select">
                                    <option value="">Month</option>
                                    {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((month, i) => (
                                        <option key={i + 1} value={i + 1}>{month}</option>
                                    ))}
                                </select>

                                {/* Year Dropdown */}
                                <select name="dob-year" className="form-select">
                                    <option value="">Year</option>
                                    {Array.from({ length: 100 }, (_, i) => {
                                        const year = new Date().getFullYear() - i;
                                        return <option key={year} value={year}>{year}</option>;
                                    })}
                                </select>
                            </div>
                        </div>



                                    <div className="col-12 mb-20">
                                        <label className="form-label fw-semibold text-primary-light text-sm mb-8">
                                            Amount
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control radius-8"

                                        />
                                    </div>
                                    <div className="col-12 mb-20">
                                        <label className="form-label fw-semibold text-primary-light text-sm mb-8">
                                            Chapter Name
                                        </label>
                                        <select class="form-control form-select">
                                            <option value="Date">Select Chapter</option>
                                            <option value="1" selected="">GRIP Aram</option>
                                            <option value="1" selected="">GRIP Virutcham</option>
                                            <option value="1" selected="">GRIP Madhuram</option>
                                            <option value="1" selected="">GRIP Kireedam</option>
                                            <option value="1" selected="">All</option>

                                        </select>

                                    </div>




                                    <div className="col-12 mb-20">
                                        <label className="form-label fw-semibold text-primary-light text-sm mb-8">
                                            Comments
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
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>





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
                                Payment Creation
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
                                            Purpose
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control radius-8"

                                            value="Monthly meeting fee"

                                        />
                                    </div>



                                            <div className="col-12 mb-20">
                            <label className="form-label fw-semibold text-primary-light text-sm mb-8">Date </label>
                            <div className="d-flex gap-2">
                                {/* Day Dropdown */}
                                <select name="dob-day" className="form-select">
                                    <option value="">Day</option>
                                    {[...Array(31)].map((_, i) => (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    ))}
                                </select>

                                {/* Month Dropdown */}
                                <select name="dob-month" className="form-select">
                                    <option value="">Month</option>
                                    {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((month, i) => (
                                        <option key={i + 1} value={i + 1}>{month}</option>
                                    ))}
                                </select>

                                {/* Year Dropdown */}
                                <select name="dob-year" className="form-select">
                                    <option value="">Year</option>
                                    {Array.from({ length: 100 }, (_, i) => {
                                        const year = new Date().getFullYear() - i;
                                        return <option key={year} value={year}>{year}</option>;
                                    })}
                                </select>
                            </div>
                        </div>



                                    <div className="col-12 mb-20">
                                        <label className="form-label fw-semibold text-primary-light text-sm mb-8">
                                            Amount
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control radius-8"
                                            value="1000"

                                        />
                                    </div>
                                    <div className="col-12 mb-20">
                                        <label className="form-label fw-semibold text-primary-light text-sm mb-8">
                                            Chapter Name
                                        </label>
                                        <select class="form-control form-select">
                                            <option value="Date">Select Chapter</option>
                                            <option value="1" selected>GRIP Aram</option>
                                            <option value="1" selected="">GRIP Virutcham</option>
                                            <option value="1" selected="">GRIP Madhuram</option>
                                            <option value="1" selected="">GRIP Kireedam</option>
                                            <option value="1" selected="">All</option>


                                        </select>

                                    </div>




                                    <div className="col-12 mb-20">
                                        <label className="form-label fw-semibold text-primary-light text-sm mb-8">
                                            Comments
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control radius-8"
                                            value="Monthly Activity"

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
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>





            {/* Style to hide dropdown icon */}
            <style>{`
        select.no-arrow {
          background-image: none !important;
        }

      `}</style>
        </div>
    );
};

export default PaymentListLayer;
