import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
import { Link } from 'react-router-dom';

const OnetoOneLayer = () => {
  return (
    <>
      <div className="cardd h-100 p-0 radius-12">
        {/* <div className="card-header border-bottom bg-base py-16 px-24 d-flex align-items-center flex-wrap gap-3 justify-content-between">
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

          <div className="d-flex align-items-center flex-wrap gap-1">

        <button
            type="button"
            className="btn btn-primary grip text-sm btn-sm px-12 py-12 radius-8 d-flex align-items-center gap-2"
            data-bs-toggle="modal"
            data-bs-target="#exampleModalTwo"
          >
            <Icon
              icon="ic:baseline-plus"
              className="icon text-xl line-height-1"
            />
            Add Region
          </button>


          <button
            type="button"
            className="btn btn-primary grip text-sm btn-sm px-12 py-12 radius-8 d-flex align-items-center gap-2"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <Icon
              icon="ic:baseline-plus"
              className="icon text-xl line-height-1"
            />
            Add New
          </button>
          </div>
        </div> */}
        <div className="card-body p-24">


          <div className='row gy-4'>

            {/* Style Two */}
      <div className="col-xxl-4">
            <div className="card">
                <div className="card-body">
                    <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between">
                        <h6 className="mb-2 fw-bold text-lg mb-0">GRIP Aram </h6>
                         <Link
                            to="/chapterone-list"
                            className="text-primary-600 hover-text-primary d-flex align-items-center gap-1"
                        >
                            80
                            <Icon
                                icon="solar:alt-arrow-right-linear"
                                className="icon"
                            />
                        </Link>
                    </div>
                   <div className="mt-32">
                        <div className="d-flex align-items-center justify-content-between gap-3 mb-32">
                            <div className="d-flex align-items-center">
                                <img
                                    src="assets/images/users/user1.png"
                                    alt=""
                                    className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                />
                                <div className="flex-grow-1">
                                    <h6 className="text-md mb-0">ElanKathir</h6>
                                    <span className="text-sm text-secondary-light fw-medium">
                                        Member ID: 36254
                                    </span>
                                </div>
                            </div>
                            <span className="text-primary-light text-md fw-medium">15</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between gap-3 mb-32">
                            <div className="d-flex align-items-center">
                                <img
                                    src="assets/images/users/user2.png"
                                    alt=""
                                    className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                />
                                <div className="flex-grow-1">
                                    <h6 className="text-md mb-0">Kesavan</h6>
                                    <span className="text-sm text-secondary-light fw-medium">
                                        Member ID: 36254
                                    </span>
                                </div>
                            </div>
                            <span className="text-primary-light text-md fw-medium">13</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between gap-3 mb-32">
                            <div className="d-flex align-items-center">
                                <img
                                    src="assets/images/users/user3.png"
                                    alt=""
                                    className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                />
                                <div className="flex-grow-1">
                                    <h6 className="text-md mb-0">Vignesh</h6>
                                    <span className="text-sm text-secondary-light fw-medium">
                                       Member ID: 36254
                                    </span>
                                </div>
                            </div>
                            <span className="text-primary-light text-md fw-medium">16</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between gap-3 mb-32">
                            <div className="d-flex align-items-center">
                                <img
                                    src="assets/images/users/user4.png"
                                    alt=""
                                    className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                />
                                <div className="flex-grow-1">
                                    <h6 className="text-md mb-0">Kannan</h6>
                                    <span className="text-sm text-secondary-light fw-medium">
                                        Member ID: 36254
                                    </span>
                                </div>
                            </div>
                            <span className="text-primary-light text-md fw-medium">13</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between gap-3 mb-32">
                            <div className="d-flex align-items-center">
                                <img
                                    src="assets/images/users/user5.png"
                                    alt=""
                                    className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                />
                                <div className="flex-grow-1">
                                    <h6 className="text-md mb-0">Sreenath</h6>
                                    <span className="text-sm text-secondary-light fw-medium">
                                       Member ID: 36254
                                    </span>
                                </div>
                            </div>
                            <span className="text-primary-light text-md fw-medium">10</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between gap-3">
                            <div className="d-flex align-items-center">
                                <img
                                    src="assets/images/users/user1.png"
                                    alt=""
                                    className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                />
                                <div className="flex-grow-1">
                                    <h6 className="text-md mb-0">Praveen</h6>
                                    <span className="text-sm text-secondary-light fw-medium">
                                       Member ID: 36254
                                    </span>
                                </div>
                            </div>
                            <span className="text-primary-light text-md fw-medium">7</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>


         <div className="col-xxl-4">
            <div className="card">
                <div className="card-body">
                    <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between">
                        <h6 className="mb-2 fw-bold text-lg mb-0">GRIP Virutcham </h6>
                       <Link
                            to="/chapterone-list"
                            className="text-primary-600 hover-text-primary d-flex align-items-center gap-1"
                        >
                           75
                            <Icon
                                icon="solar:alt-arrow-right-linear"
                                className="icon"
                            />
                        </Link>
                    </div>
               <div className="mt-32">
                        <div className="d-flex align-items-center justify-content-between gap-3 mb-32">
                            <div className="d-flex align-items-center">
                                <img
                                    src="assets/images/users/user1.png"
                                    alt=""
                                    className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                />
                                <div className="flex-grow-1">
                                    <h6 className="text-md mb-0">ElanKathir</h6>
                                    <span className="text-sm text-secondary-light fw-medium">
                                        Member ID: 36254
                                    </span>
                                </div>
                            </div>
                            <span className="text-primary-light text-md fw-medium">15</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between gap-3 mb-32">
                            <div className="d-flex align-items-center">
                                <img
                                    src="assets/images/users/user2.png"
                                    alt=""
                                    className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                />
                                <div className="flex-grow-1">
                                    <h6 className="text-md mb-0">Kesavan</h6>
                                    <span className="text-sm text-secondary-light fw-medium">
                                        Member ID: 36254
                                    </span>
                                </div>
                            </div>
                            <span className="text-primary-light text-md fw-medium">13</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between gap-3 mb-32">
                            <div className="d-flex align-items-center">
                                <img
                                    src="assets/images/users/user3.png"
                                    alt=""
                                    className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                />
                                <div className="flex-grow-1">
                                    <h6 className="text-md mb-0">Vignesh</h6>
                                    <span className="text-sm text-secondary-light fw-medium">
                                       Member ID: 36254
                                    </span>
                                </div>
                            </div>
                            <span className="text-primary-light text-md fw-medium">16</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between gap-3 mb-32">
                            <div className="d-flex align-items-center">
                                <img
                                    src="assets/images/users/user4.png"
                                    alt=""
                                    className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                />
                                <div className="flex-grow-1">
                                    <h6 className="text-md mb-0">Kannan</h6>
                                    <span className="text-sm text-secondary-light fw-medium">
                                        Member ID: 36254
                                    </span>
                                </div>
                            </div>
                            <span className="text-primary-light text-md fw-medium">13</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between gap-3 mb-32">
                            <div className="d-flex align-items-center">
                                <img
                                    src="assets/images/users/user5.png"
                                    alt=""
                                    className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                />
                                <div className="flex-grow-1">
                                    <h6 className="text-md mb-0">Sreenath</h6>
                                    <span className="text-sm text-secondary-light fw-medium">
                                       Member ID: 36254
                                    </span>
                                </div>
                            </div>
                            <span className="text-primary-light text-md fw-medium">10</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between gap-3">
                            <div className="d-flex align-items-center">
                                <img
                                    src="assets/images/users/user1.png"
                                    alt=""
                                    className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                />
                                <div className="flex-grow-1">
                                    <h6 className="text-md mb-0">Praveen</h6>
                                    <span className="text-sm text-secondary-light fw-medium">
                                       Member ID: 36254
                                    </span>
                                </div>
                            </div>
                            <span className="text-primary-light text-md fw-medium">7</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>


         <div className="col-xxl-4">
            <div className="card">
                <div className="card-body">
                    <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between">
                        <h6 className="mb-2 fw-bold text-lg mb-0">GRIP Madhuram </h6>
                        <Link
                            to="/chapterone-list"
                            className="text-primary-600 hover-text-primary d-flex align-items-center gap-1"
                        >
                           60
                            <Icon
                                icon="solar:alt-arrow-right-linear"
                                className="icon"
                            />
                        </Link>
                    </div>
                   <div className="mt-32">
                        <div className="d-flex align-items-center justify-content-between gap-3 mb-32">
                            <div className="d-flex align-items-center">
                                <img
                                    src="assets/images/users/user1.png"
                                    alt=""
                                    className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                />
                                <div className="flex-grow-1">
                                    <h6 className="text-md mb-0">ElanKathir</h6>
                                    <span className="text-sm text-secondary-light fw-medium">
                                        Member ID: 36254
                                    </span>
                                </div>
                            </div>
                            <span className="text-primary-light text-md fw-medium">15</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between gap-3 mb-32">
                            <div className="d-flex align-items-center">
                                <img
                                    src="assets/images/users/user2.png"
                                    alt=""
                                    className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                />
                                <div className="flex-grow-1">
                                    <h6 className="text-md mb-0">Kesavan</h6>
                                    <span className="text-sm text-secondary-light fw-medium">
                                        Member ID: 36254
                                    </span>
                                </div>
                            </div>
                            <span className="text-primary-light text-md fw-medium">13</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between gap-3 mb-32">
                            <div className="d-flex align-items-center">
                                <img
                                    src="assets/images/users/user3.png"
                                    alt=""
                                    className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                />
                                <div className="flex-grow-1">
                                    <h6 className="text-md mb-0">Vignesh</h6>
                                    <span className="text-sm text-secondary-light fw-medium">
                                       Member ID: 36254
                                    </span>
                                </div>
                            </div>
                            <span className="text-primary-light text-md fw-medium">16</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between gap-3 mb-32">
                            <div className="d-flex align-items-center">
                                <img
                                    src="assets/images/users/user4.png"
                                    alt=""
                                    className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                />
                                <div className="flex-grow-1">
                                    <h6 className="text-md mb-0">Kannan</h6>
                                    <span className="text-sm text-secondary-light fw-medium">
                                        Member ID: 36254
                                    </span>
                                </div>
                            </div>
                            <span className="text-primary-light text-md fw-medium">13</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between gap-3 mb-32">
                            <div className="d-flex align-items-center">
                                <img
                                    src="assets/images/users/user5.png"
                                    alt=""
                                    className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                />
                                <div className="flex-grow-1">
                                    <h6 className="text-md mb-0">Sreenath</h6>
                                    <span className="text-sm text-secondary-light fw-medium">
                                       Member ID: 36254
                                    </span>
                                </div>
                            </div>
                            <span className="text-primary-light text-md fw-medium">10</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between gap-3">
                            <div className="d-flex align-items-center">
                                <img
                                    src="assets/images/users/user1.png"
                                    alt=""
                                    className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                />
                                <div className="flex-grow-1">
                                    <h6 className="text-md mb-0">Praveen</h6>
                                    <span className="text-sm text-secondary-light fw-medium">
                                       Member ID: 36254
                                    </span>
                                </div>
                            </div>
                            <span className="text-primary-light text-md fw-medium">7</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

         <div className="col-xxl-4">
            <div className="card">
                <div className="card-body">
                    <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between">
                        <h6 className="mb-2 fw-bold text-lg mb-0">GRIP Kireedam </h6>
                        <Link
                            to="/chapterone-list"
                            className="text-primary-600 hover-text-primary d-flex align-items-center gap-1"
                        >
                            90
                            <Icon
                                icon="solar:alt-arrow-right-linear"
                                className="icon"
                            />
                        </Link>
                    </div>
                    <div className="mt-32">
                        <div className="d-flex align-items-center justify-content-between gap-3 mb-32">
                            <div className="d-flex align-items-center">
                                <img
                                    src="assets/images/users/user1.png"
                                    alt=""
                                    className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                />
                                <div className="flex-grow-1">
                                    <h6 className="text-md mb-0">ElanKathir</h6>
                                    <span className="text-sm text-secondary-light fw-medium">
                                        Member ID: 36254
                                    </span>
                                </div>
                            </div>
                            <span className="text-primary-light text-md fw-medium">15</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between gap-3 mb-32">
                            <div className="d-flex align-items-center">
                                <img
                                    src="assets/images/users/user2.png"
                                    alt=""
                                    className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                />
                                <div className="flex-grow-1">
                                    <h6 className="text-md mb-0">Kesavan</h6>
                                    <span className="text-sm text-secondary-light fw-medium">
                                        Member ID: 36254
                                    </span>
                                </div>
                            </div>
                            <span className="text-primary-light text-md fw-medium">13</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between gap-3 mb-32">
                            <div className="d-flex align-items-center">
                                <img
                                    src="assets/images/users/user3.png"
                                    alt=""
                                    className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                />
                                <div className="flex-grow-1">
                                    <h6 className="text-md mb-0">Vignesh</h6>
                                    <span className="text-sm text-secondary-light fw-medium">
                                       Member ID: 36254
                                    </span>
                                </div>
                            </div>
                            <span className="text-primary-light text-md fw-medium">16</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between gap-3 mb-32">
                            <div className="d-flex align-items-center">
                                <img
                                    src="assets/images/users/user4.png"
                                    alt=""
                                    className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                />
                                <div className="flex-grow-1">
                                    <h6 className="text-md mb-0">Kannan</h6>
                                    <span className="text-sm text-secondary-light fw-medium">
                                        Member ID: 36254
                                    </span>
                                </div>
                            </div>
                            <span className="text-primary-light text-md fw-medium">13</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between gap-3 mb-32">
                            <div className="d-flex align-items-center">
                                <img
                                    src="assets/images/users/user5.png"
                                    alt=""
                                    className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                />
                                <div className="flex-grow-1">
                                    <h6 className="text-md mb-0">Sreenath</h6>
                                    <span className="text-sm text-secondary-light fw-medium">
                                       Member ID: 36254
                                    </span>
                                </div>
                            </div>
                            <span className="text-primary-light text-md fw-medium">10</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between gap-3">
                            <div className="d-flex align-items-center">
                                <img
                                    src="assets/images/users/user1.png"
                                    alt=""
                                    className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                />
                                <div className="flex-grow-1">
                                    <h6 className="text-md mb-0">Praveen</h6>
                                    <span className="text-sm text-secondary-light fw-medium">
                                       Member ID: 36254
                                    </span>
                                </div>
                            </div>
                            <span className="text-primary-light text-md fw-medium">7</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-xxl-4">
            <div className="card">
                <div className="card-body">
                    <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between">
                        <h6 className="mb-2 fw-bold text-lg mb-0">GRIP Amudham</h6>
                        <Link
                            to="/chapterone-list"
                            className="text-primary-600 hover-text-primary d-flex align-items-center gap-1"
                        >
                            70
                            <Icon
                                icon="solar:alt-arrow-right-linear"
                                className="icon"
                            />
                        </Link>
                    </div>
                    <div className="mt-32">
                        <div className="d-flex align-items-center justify-content-between gap-3 mb-32">
                            <div className="d-flex align-items-center">
                                <img
                                    src="assets/images/users/user1.png"
                                    alt=""
                                    className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                />
                                <div className="flex-grow-1">
                                    <h6 className="text-md mb-0">ElanKathir</h6>
                                    <span className="text-sm text-secondary-light fw-medium">
                                        Member ID: 36254
                                    </span>
                                </div>
                            </div>
                            <span className="text-primary-light text-md fw-medium">15</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between gap-3 mb-32">
                            <div className="d-flex align-items-center">
                                <img
                                    src="assets/images/users/user2.png"
                                    alt=""
                                    className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                />
                                <div className="flex-grow-1">
                                    <h6 className="text-md mb-0">Kesavan</h6>
                                    <span className="text-sm text-secondary-light fw-medium">
                                        Member ID: 36254
                                    </span>
                                </div>
                            </div>
                            <span className="text-primary-light text-md fw-medium">13</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between gap-3 mb-32">
                            <div className="d-flex align-items-center">
                                <img
                                    src="assets/images/users/user3.png"
                                    alt=""
                                    className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                />
                                <div className="flex-grow-1">
                                    <h6 className="text-md mb-0">Vignesh</h6>
                                    <span className="text-sm text-secondary-light fw-medium">
                                       Member ID: 36254
                                    </span>
                                </div>
                            </div>
                            <span className="text-primary-light text-md fw-medium">16</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between gap-3 mb-32">
                            <div className="d-flex align-items-center">
                                <img
                                    src="assets/images/users/user4.png"
                                    alt=""
                                    className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                />
                                <div className="flex-grow-1">
                                    <h6 className="text-md mb-0">Kannan</h6>
                                    <span className="text-sm text-secondary-light fw-medium">
                                        Member ID: 36254
                                    </span>
                                </div>
                            </div>
                            <span className="text-primary-light text-md fw-medium">13</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between gap-3 mb-32">
                            <div className="d-flex align-items-center">
                                <img
                                    src="assets/images/users/user5.png"
                                    alt=""
                                    className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                />
                                <div className="flex-grow-1">
                                    <h6 className="text-md mb-0">Sreenath</h6>
                                    <span className="text-sm text-secondary-light fw-medium">
                                       Member ID: 36254
                                    </span>
                                </div>
                            </div>
                            <span className="text-primary-light text-md fw-medium">10</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-between gap-3">
                            <div className="d-flex align-items-center">
                                <img
                                    src="assets/images/users/user1.png"
                                    alt=""
                                    className="w-40-px h-40-px rounded-circle flex-shrink-0 me-12 overflow-hidden"
                                />
                                <div className="flex-grow-1">
                                    <h6 className="text-md mb-0">Praveen</h6>
                                    <span className="text-sm text-secondary-light fw-medium">
                                       Member ID: 36254
                                    </span>
                                </div>
                            </div>
                            <span className="text-primary-light text-md fw-medium">7</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
          </div>

        </div>
      </div>




        {/* Modal Start */}
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
                Add New Region
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
                      Region Name
                    </label>
                    <input
                      type="text"
                      className="form-control radius-8"

                    />
                  </div>


                     <div className="col-12 mb-20">
                    <label className="form-label fw-semibold text-primary-light text-sm mb-8">
                     Date
                    </label>
                    <input
                      type="date"
                      className="form-control radius-8"

                    />
                  </div>


                  <div className="col-12 mb-20">
                    <label className="form-label fw-semibold text-primary-light text-sm mb-8">
                      Region Head
                    </label>
                    <select class="form-control form-select">
                                                   <option value="Date">Select Region Head</option>
                                                   <option value="1" selected="">Rajesh</option>
                                                   <option value="1" selected="">Madhu</option>
                                                    <option value="1" selected="">Prabhu</option>

                                               </select>
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
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Modal End */}






        {/* Modal Start */}
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
               Edit Chapter
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body p-24">
 <table style={{ borderCollapse: 'collapse', width: '100%' }}>
  <tbody>
    <tr style={{ borderBottom: '1px solid #eee', padding: '8px 0' }}>
      <td style={{ padding: '8px 0' }}><strong>Chapter Name:</strong></td>
      <td style={{ padding: '8px 0' }}>
        GRIP Aram <span className='chapterday'>(Tuesday)</span>
      </td>
    </tr>
    <tr style={{ borderBottom: '1px solid #eee', padding: '8px 0' }}>
      <td style={{ padding: '8px 0' }}><strong>Region:</strong></td>
      <td style={{ padding: '8px 0' }}>Chennai</td>
    </tr>
    <tr style={{ borderBottom: '1px solid #eee', padding: '8px 0' }}>
      <td style={{ padding: '8px 0' }}><strong>CID:</strong></td>
      <td style={{ padding: '8px 0' }}>Richard</td>
    </tr>
    <tr style={{ borderBottom: '1px solid #eee', padding: '8px 0' }}>
      <td style={{ padding: '8px 0' }}><strong>Location:</strong></td>
      <td style={{ padding: '8px 0' }}>Pallavaram</td>
    </tr>
    <tr style={{ borderBottom: '1px solid #eee', padding: '8px 0' }}>
      <td style={{ padding: '8px 0' }}><strong>Status:</strong></td>
      <td style={{ padding: '8px 0' }}>
        <select
          className="form-select"
          style={{
            width: '150px',
            padding: '8px 8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            backgroundColor: '#fff',
          }}
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          <option value="Pending">Upcoming</option>
        </select>
      </td>
    </tr>
  </tbody>
</table>

            </div>
          </div>
        </div>
      </div>
      {/* Modal End */}
    </>

  );
};

export default OnetoOneLayer;