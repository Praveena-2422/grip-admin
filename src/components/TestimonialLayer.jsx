import React, { useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const TestimonialLayer = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedDoc, setSelectedDoc] = useState('');

    const handleShowDoc = (docUrl) => {
        setSelectedDoc(docUrl);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setSelectedDoc('');
    };

    const data = [
        {
            id: 1,
            date: '2025-05-10',
            from: 'Elankathir',
            testimonialTo: 'Prathap',
            chapter: 'GRIP Aram',
            commends: 'Great leadership and vision.',
            doc: 'assets/pdf/testimonial.pdf', // pdf example
        },
        {
            id: 2,
            date: '2025-05-11',
            from: 'Vignesh',
            testimonialTo: 'Surya',
            chapter: 'GRIP Virutcham',
            commends: 'Exceptional collaboration skills.',
            doc: 'assets/images/testimonial/testimonial.jpg',
        },
        {
            id: 3,
            date: '2025-05-12',
            from: 'Naresh',
            testimonialTo: 'Ramesh',
            chapter: 'GRIP Aram',
            commends: 'Very helpful and supportive.',
            doc: 'assets/pdf/testimonial.pdf',
        },
        {
            id: 4,
            date: '2025-05-13',
            from: 'Deepak',
            testimonialTo: 'Abraham',
            chapter: 'GRIP Virutcham',
            commends: 'Always goes above and beyond.',
            doc: 'assets/images/testimonial/testimonial.jpg',
        },
        {
            id: 5,
            date: '2025-05-14',
            from: 'Prakash',
            testimonialTo: 'Adhi',
            chapter: 'GRIP Virutcham',
            commends: 'Inspires the team with dedication.',
            doc: 'assets/pdf/testimonial.pdf',
        },
    ];

    const isImage = (url) => /\.(jpeg|jpg|png|gif)$/i.test(url);
    const isPdf = (url) => /\.pdf$/i.test(url);

    return (
        <div className="col-xxl-12 col-xl-12">
            <div className="card h-100 p-0 radius-12">
                <div className="card-header border-bottom bg-base py-16 px-24 d-flex align-items-center flex-wrap gap-3 justify-content-between">
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
                <div className="card-body p-24">
                    <div className="table-responsive scroll-sm">
                        <table className="table bordered-table sm-table mb-0">
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Date</th>
                                    <th>From</th>
                                    <th>Testimonial to</th>
                                    <th>Chapter</th>
                                    <th>Commends</th>
                                    <th>Uploaded Doc </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={item.id}>
                                        <td>{index + 1}.</td>
                                        <td>{item.date}</td>
                                        <td>{item.from}</td>
                                        <td>{item.testimonialTo}</td>
                                        <td>{item.chapter}</td>
                                        <td>{item.commends}</td>
                                        <td>

                                            <Button
                                                variant="link"
                                                onClick={() => handleShowDoc(item.doc)}
                                                  className="bg-info-focus bg-hover-info-200 text-info-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle"

                                            >
                                                 <Icon icon="majesticons:eye" className="icon text-xl" />
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Document Modal */}
                    <Modal show={showModal} onHide={handleClose} size="lg" centered>
                        <Modal.Body className="text-center">
                            {isImage(selectedDoc) && (
                                <img src={selectedDoc} alt="Document" className="img-fluid" />
                            )}
                            {isPdf(selectedDoc) && (
                                <iframe
                                    src={selectedDoc}
                                    title="PDF Document"
                                    style={{ width: '100%', height: '500px', border: 'none' }}
                                />
                            )}
                            {!isImage(selectedDoc) && !isPdf(selectedDoc) && (
                                <p>Preview not available for this document type.</p>
                            )}
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

export default TestimonialLayer;
