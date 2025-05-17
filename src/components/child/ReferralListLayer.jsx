import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import { Link } from 'react-router-dom'

const ReferralListLayer = () => {
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
                                    <th scope="col">S.No </th>
                                    <th scope="col">Referral to </th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Chapter </th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Nember</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Address</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1.</td>
                                    <td>

                                        Elankathir

                                    </td>
                                    <td>Self</td>
                                    <td>GRIP Aram</td>
                                    <td>Prathap</td>
                                    <td>96754 38907</td>
                                    <td>prathap@gmail.com</td>
                                    <td>121, 2nd st, Anna nagar</td>

                                </tr>
                                <tr>
                                    <td>2.</td>
                                    <td>

                                        Vignesh

                                    </td>
                                    <td>Outside</td>
                                    <td>GRIP Virutcham</td>
                                    <td>Surya</td>
                                    <td>90345 16754</td>
                                    <td>surya@gmail.com</td>
                                    <td>HIG Flats, KK nagar</td>

                                </tr>
                                <tr>
                                     <td>3.</td>
                                    <td>
                                        Naresh
                                    </td>
                                    <td>Self</td>
                                    <td>GRIP Aram</td>
                                    <td>Ramesh</td>
                                    <td>96754 38907</td>
                                    <td>ramesh@gmail.com</td>
                                    <td>67, Viveganada Nagar</td>
                                </tr>
                                <tr>
                                     <td>4.</td>
                                    <td>
                                        Deepak
                                    </td>
                                    <td>Outside</td>
                                    <td>GRIP Virutcham</td>
                                    <td>Surya</td>
                                    <td>90345 16754</td>
                                    <td>surya@gmail.com</td>
                                    <td>HIG Flats, KK nagar</td>
                                </tr>
                                <tr>
                                     <td>5.</td>
                                    <td>
                                        Prakash
                                    </td>
                                    <td>Outside</td>
                                    <td>GRIP Virutcham</td>
                                    <td>Surya</td>
                                    <td>90345 16754</td>
                                    <td>surya@gmail.com</td>
                                    <td>HIG Flats, KK nagar</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                </div>
            </div>
        </div>

    )
}

export default ReferralListLayer