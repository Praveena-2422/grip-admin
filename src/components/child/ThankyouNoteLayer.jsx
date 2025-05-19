import React, { useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ThankyouNoteLayer = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const handleShowImage = (imageUrl) => {
        setSelectedImage(imageUrl);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setSelectedImage('');
    };

    const data = [
        {
            id: 1,
            date: "2025-05-10",
            from: "Elankathir",
            thankTo: "Prathap",
            value: "₹500",
            comment: "Great support on the event",
            chapter: "GRIP Aram",
            image: "assets/images/user-grid/user-grid-bg1.png",
        },
        {
            id: 2,
            date: "2025-05-11",
            from: "Vignesh",
            thankTo: "Surya",
            value: "₹750",
            comment: "Excellent referral given",
            chapter: "GRIP Virutcham",
            image: "assets/images/user-grid/user-grid-bg1.png",
        },
        {
            id: 3,
            date: "2025-05-12",
            from: "Naresh",
            thankTo: "Ramesh",
            value: "₹600",
            comment: "Helped with business lead",
            chapter: "GRIP Aram",
            image: "assets/images/user-grid/user-grid-bg1.png",
        },
        {
            id: 4,
            date: "2025-05-13",
            from: "Deepak",
            thankTo: "Abraham",
            value: "₹1000",
            comment: "Valuable market insight",
            chapter: "GRIP Virutcham",
            image: "assets/images/user-grid/user-grid-bg1.png",
        },
        {
            id: 5,
            date: "2025-05-14",
            from: "Prakash",
            thankTo: "Adhi",
            value: "₹450",
            comment: "On-time delivery support",
            chapter: "GRIP Virutcham",
            image: "assets/images/user-grid/user-grid-bg1.png",
        },
    ];

    return (
        <div className="col-xxl-12 col-xl-12">
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
                            <option value="Select Number" disabled>
                               This Week
                            </option>
                            <option value="10">This Month</option>
                            <option value="15">Last Week</option>
                            <option value="20">Last Month</option>
                            <option value="20">This Term</option>


                        </select>

                </div>
                </div>
                <div className="card-body p-24">
                    <div className="table-responsive scroll-sm">
                        <table className="table bordered-table sm-table mb-0">
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Date</th>
                                    <th>From</th>
                                    <th>Thank to</th>
                                    <th>Value (in Rupees)</th>
                                    <th>Commends</th>
                                    <th>Chapter</th>
                                    <th>View</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={item.id}>
                                        <td>{index + 1}.</td>
                                        <td>{item.date}</td>
                                        <td>{item.from}</td>
                                        <td>{item.thankTo}</td>
                                        <td>{item.value}</td>
                                        <td>{item.comment}</td>
                                        <td>{item.chapter}</td>
                                        <td>
                                            <button
                                                type="button"
                                                className="bg-info-focus bg-hover-info-200 text-info-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"
                                                onClick={() => handleShowImage(item.image)}
                                            >
                                                <Icon icon="majesticons:eye" className="icon text-xl" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Image Modal */}
                    <Modal show={showModal} onHide={handleClose} centered>
                        <Modal.Body className="text-center">
                            <img src={selectedImage} alt="Popup" className="img-fluid" />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default ThankyouNoteLayer;
