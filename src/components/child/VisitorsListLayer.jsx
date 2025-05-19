import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import { Link } from 'react-router-dom'

const VisitorsListLayer = () => {


const visitorsData = [
  {
    from: 'Elankathir',
    chapterName: 'GRIP Aram',
    visitorName: 'Prathap',
    number: '96754 38907',
    email: 'prathap@gmail.com',
    address: 'Anna nagar',
    date: '12 May 2025',
  },
  {
    from: 'Vignesh',
    chapterName: 'GRIP Virutcham',
    visitorName: 'Surya',
    number: '96754 38907',
    email: 'surya@example.com',
    address: 'KK nagar',
    date: '12 May 2025',
  },
  {
    from: 'Naresh',
    chapterName: 'GRIP Aram',
    visitorName: 'Ramesh',
    number: '96754 38907',
    email: 'ramesh@example.com',
    address: 'Guindy',
    date: '12 May 2025',
  },
  {
    from: 'Deepak',
    chapterName: 'GRIP Virutcham',
    visitorName: 'Abraham',
    number: '96754 38907',
    email: 'abraham@example.com',
    address: 'Adyar',
    date: '12 May 2025',
  },
  {
    from: 'Prakash',
    chapterName: 'GRIP Virutcham',
    visitorName: 'Adhi',
    number: '96754 38907',
    email: 'adhi@example.com',
    address: 'Besant nagar',
    date: '12 May 2025',
  },
]



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
        </div>
        <div className="card-body p-24">
          <div className="table-responsive scroll-sm">
            <table className="table bordered-table sm-table mb-0">
              <thead>
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">Date</th>
                  <th scope="col">From</th>
                  <th scope="col">Visitor Name</th>
                  <th scope="col">Number</th>
                  <th scope="col">Email</th>
                  <th scope="col">Address</th>
                  <th scope="col">Chapter Name</th>
                </tr>
              </thead>
              <tbody>
                {visitorsData.map((visitor, index) => (
                  <tr key={index}>
                    <td>{index + 1}.</td>
                    <td>{visitor.date}</td>
                    <td>{visitor.from}</td>
                    <td>{visitor.visitorName}</td>
                    <td>{visitor.number}</td>
                    <td>{visitor.email}</td>
                    <td>{visitor.address}</td>
                    <td>{visitor.chapterName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    )
}

export default VisitorsListLayer