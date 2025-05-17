import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
import { Link } from 'react-router-dom';

const users = [
    {
        id: 1,
        from: 'Elankathir',
        to: 'Kesavan',
        where: 'Vadapalani',
        date: '12-05-25',
        discuss: 'About Business Growth',

    },
    {
        id: 2,
       from: 'Aravind',
        to: 'PanchaiNadhan',
        where: 'Nungambakkam',
        date: '3-05-25',
        discuss: 'About the Business Strategies',
    },
    {
        id: 3,
      from: 'Elankathir',
        to: 'Kesavan',
        where: 'Vadapalani',
        date: '12-05-25',
        discuss: 'About Business Growth',
    },
    {
        id: 4,
      from: 'Aravind',
        to: 'PanchaiNadhan',
        where: 'Nungambakkam',
        date: '3-05-25',
        discuss: 'About the Business Strategies',
    },
    {
        id: 5,
        from: 'Elankathir',
        to: 'Kesavan',
        where: 'Vadapalani',
        date: '12-05-25',
        discuss: 'About Business Growth',
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
              
                </div>
                {/* <Link
                    to="/add-user"
                    className="btn btn-primary grip text-sm btn-sm px-12 py-12 radius-8 d-flex align-items-center gap-2"
                >
                    <Icon icon="ic:baseline-plus" className="icon text-xl line-height-1" />
                    Add New User
                </Link> */}
            </div>
            <div className="card-body p-24">
                <div className="table-responsive scroll-sm">
                    <table className="table bordered-table sm-table mb-0">
                        <thead>
                            <tr>
                                <th>S.No</th>

                                <th>From</th>
                                <th>To</th>
                                <th>Where</th>
                                 <th>Date</th>
                                   <th>Discussion</th>

                                <th className="text-center">Photo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={user.id}>
                                    <td>{index + 1}.</td>
                                    <td>{user.from}</td>
                                    <td>
                                        <span className="text-md mb-0 fw-normal text-secondary-light">
                                            {user.to}
                                        </span>
                                    </td>
                                    <td>{user.where}</td>
                                    <td>{user.date}</td>
                                      <td>{user.discuss}</td>

                                    <td className="text-center">
                                    <img src='/assets/images/avatar/avatar-group1.png'/>
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
