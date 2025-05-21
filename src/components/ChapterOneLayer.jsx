import { Icon } from '@iconify/react/dist/iconify.js';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const users = [
    {
        id: 1,
        date: '2025-05-12',
        from: 'Elankathir',
        to: 'Kesavan',
        where: 'Vadapalani',
        discuss: 'About Business Growth',
        chapter: 'GRIP Aram',
        photo: '/assets/images/avatar/avatar-group1.png',
    },
    {
        id: 2,
        date: '2025-05-03',
        from: 'Aravind',
        to: 'PanchaiNadhan',
        where: 'Nungambakkam',
        discuss: 'About Business Strategies',
        chapter: 'GRIP Virutcham',
        photo: '/assets/images/avatar/avatar-group1.png',
    },
    {
        id: 3,
        date: '2025-05-14',
        from: 'Saravanan',
        to: 'Bala',
        where: 'T Nagar',
        discuss: 'Discussed referrals',
        chapter: 'GRIP Blossoms',
        photo: '/assets/images/avatar/avatar-group1.png',
    },
    {
        id: 4,
        date: '2025-05-15',
        from: 'Naveen',
        to: 'Arjun',
        where: 'Anna Nagar',
        discuss: 'Marketing ideas exchange',
        chapter: 'GRIP Bloom',
        photo: '/assets/images/avatar/avatar-group1.png',
    },
    {
        id: 5,
        date: '2025-05-16',
        from: 'Karthik',
        to: 'Sundar',
        where: 'Kodambakkam',
        discuss: 'Business opportunity talk',
        chapter: 'GRIP Rise',
        photo: '/assets/images/avatar/avatar-group1.png',
    },
];

const UsersListLayer = () => {
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
                                <th>121 To</th>
                                <th>Where</th>
                                <th>Discussion</th>
                                <th>Chapter Name</th>
                                <th className="text-center">Photo (Photo View)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={user.id}>
                                    <td>{index + 1}.</td>
                                    <td>{user.date}</td>
                                    <td>{user.from}</td>
                                    <td>
                                        <span className="text-md mb-0 fw-normal text-secondary-light">
                                            {user.to}
                                        </span>
                                    </td>
                                    <td>{user.where}</td>
                                    <td>{user.discuss}</td>
                                    <td>{user.chapter}</td>
                                    <td className="text-center">
                                        <button
                                            className="btn btn-sm btn-outline-info"
                                            onClick={() => handleShowImage(user.photo)}
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
    );
};

export default UsersListLayer;
