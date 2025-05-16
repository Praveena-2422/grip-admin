import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
import { Link } from 'react-router-dom';

const users = [
    {
        id: 1,
        name: 'Kathryn Murphy',
        email: 'osgoodwy@gmail.com',
        phone: '9876543210',
        company: 'Iriscoders',
        status: 'Active',
    },
    {
        id: 2,
        name: 'Annette Black',
        email: 'redaniel@gmail.com',
        phone: '8907654345',
        company: 'Brandkiter',
        status: 'Inactive',
    },
    {
        id: 3,
        name: 'Ronald Richards',
        email: 'seannand@mail.ru',
        phone: '7890654321',
        company: 'Topvfx',
        status: 'Active',
    },
    {
        id: 4,
        name: 'Eleanor Pena',
        email: 'miyokoto@mail.ru',
        phone: '98544321456',
        company: 'Indsam',
        status: 'Active',
    },
    {
        id: 5,
        name: 'Leslie Alexander',
        email: 'icadahli@gmail.com',
        phone: '90443217865',
        company: 'VK Architect',
        status: 'Inactive',
    },
];

const UsersListLayer = () => {
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
                    <select className="form-select form-select-sm w-auto ps-12 py-6 radius-12 h-40-px" defaultValue="Select Status">
                        <option value="Select Status" disabled>
                            Select Status
                        </option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                </div>
                <Link
                    to="/add-user"
                    className="btn btn-primary grip text-sm btn-sm px-12 py-12 radius-8 d-flex align-items-center gap-2"
                >
                    <Icon icon="ic:baseline-plus" className="icon text-xl line-height-1" />
                    Add New User
                </Link>
            </div>
            <div className="card-body p-24">
                <div className="table-responsive scroll-sm">
                    <table className="table bordered-table sm-table mb-0">
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile Number</th>
                                <th>Company Name</th>
                                <th className="text-center">Status</th>
                                <th className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={user.id}>
                                    <td>{index + 1}.</td>
                                    <td>{user.name}</td>
                                    <td>
                                        <span className="text-md mb-0 fw-normal text-secondary-light">
                                            {user.email}
                                        </span>
                                    </td>
                                    <td>{user.phone}</td>
                                    <td>{user.company}</td>
                                    <td className="text-center">
                                        <span className={`px-24 py-4 radius-4 fw-medium text-sm border ${
                                            user.status === 'Active'
                                                ? 'bg-success-focus text-success-600 border-success-main'
                                                : 'bg-danger-200 text-danger-600 border-danger-400'
                                        }`}>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="text-center">
                                        <div className="d-flex align-items-center gap-10 justify-content-center">
                                            <button type="button" className="bg-info-focus bg-hover-info-200 text-info-600 fw-medium w-40-px h-40-px d-flex justify-content-center align-items-center rounded-circle">
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
        </div>
    );
};

export default UsersListLayer;
