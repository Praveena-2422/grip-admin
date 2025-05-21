import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const referrals = [
    {
        id: 1,
        date: '2025-05-12',
        from: 'Elankathir',
        to: 'Prathap',
        chapter: 'GRIP Aram',
        number: '96754 38907',
        email: 'prathap@gmail.com',
        comments: 'Interested in branding solutions.',
        photo: '/assets/images/avatar/avatar-1.png',
    },
    {
        id: 2,
        date: '2025-05-13',
        from: 'Vignesh',
        to: 'Surya',
        chapter: 'GRIP Virutcham',
        number: '90345 16754',
        email: 'surya@gmail.com',
        comments: 'Needs help with social media.',
        photo: '/assets/images/avatar/avatar-2.png',
    },
    {
        id: 3,
        date: '2025-05-14',
        from: 'Naresh',
        to: 'Ramesh',
        chapter: 'GRIP Aram',
        number: '96754 38907',
        email: 'ramesh@gmail.com',
        comments: 'Looking for IT consulting.',
        photo: '/assets/images/avatar/avatar-3.png',
    },
    {
        id: 4,
        date: '2025-05-15',
        from: 'Deepak',
        to: 'Surya',
        chapter: 'GRIP Virutcham',
        number: '90345 16754',
        email: 'surya@gmail.com',
        comments: 'Discussed marketing strategies.',
        photo: '/assets/images/avatar/avatar-4.png',
    },
    {
        id: 5,
        date: '2025-05-16',
        from: 'Prakash',
        to: 'Surya',
        chapter: 'GRIP Virutcham',
        number: '90345 16754',
        email: 'surya@gmail.com',
        comments: 'Wants graphic design services.',
        photo: '/assets/images/avatar/avatar-5.png',
    },
];

const ReferralListLayer = () => {


    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const handleShowImage = (image) => {
        setSelectedImage(image);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setSelectedImage('');
    };



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


                           </div>

                        <div className="d-flex align-items-center flex-wrap gap-3">

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
                      </div>
                <div className="card-body p-24">
                    <div className="table-responsive scroll-sm">
                        <table className="table bordered-table sm-table mb-0">
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Date</th>
                                    <th>From</th>
                                    <th>Referral To</th>
                                    <th>Chapter Name</th>
                                    <th>Number</th>
                                    <th>Email</th>
                                    <th>Comments</th>
                                    <th className="text-center">Photo</th>
                                </tr>
                            </thead>
                            <tbody>
                                {referrals.map((referral, index) => (
                                    <tr key={referral.id}>
                                        <td>{index + 1}.</td>
                                        <td>{referral.date}</td>
                                        <td>{referral.from}</td>
                                        <td>{referral.to}</td>
                                        <td>{referral.chapter}</td>
                                        <td>{referral.number}</td>
                                        <td>{referral.email}</td>
                                        <td>{referral.comments}</td>
                                        <td className="text-center">
                                        <button
                                            className="btn btn-sm btn-outline-info"
                                            onClick={() => handleShowImage(referral.photo)}
                                        >
                                            View
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
                        <img src={selectedImage} alt="Profile" className="img-fluid" />
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

export default ReferralListLayer;
