import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link, NavLink, useLocation } from "react-router-dom";
import ThemeToggleButton from "../helper/ThemeToggleButton";

const MasterLayout = ({ children }) => {
  let [sidebarActive, seSidebarActive] = useState(false);
  let [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation(); // Hook to get the current route

  useEffect(() => {
    const handleDropdownClick = (event) => {
      event.preventDefault();
      const clickedLink = event.currentTarget;
      const clickedDropdown = clickedLink.closest(".dropdown");

      if (!clickedDropdown) return;

      const isActive = clickedDropdown.classList.contains("open");

      // Close all dropdowns
      const allDropdowns = document.querySelectorAll(".sidebar-menu .dropdown");
      allDropdowns.forEach((dropdown) => {
        dropdown.classList.remove("open");
        const submenu = dropdown.querySelector(".sidebar-submenu");
        if (submenu) {
          submenu.style.maxHeight = "0px"; // Collapse submenu
        }
      });

      // Toggle the clicked dropdown
      if (!isActive) {
        clickedDropdown.classList.add("open");
        const submenu = clickedDropdown.querySelector(".sidebar-submenu");
        if (submenu) {
          submenu.style.maxHeight = `${submenu.scrollHeight}px`; // Expand submenu
        }
      }
    };

    // Attach click event listeners to all dropdown triggers
    const dropdownTriggers = document.querySelectorAll(
      ".sidebar-menu .dropdown > a, .sidebar-menu .dropdown > Link"
    );

    dropdownTriggers.forEach((trigger) => {
      trigger.addEventListener("click", handleDropdownClick);
    });

    const openActiveDropdown = () => {
      const allDropdowns = document.querySelectorAll(".sidebar-menu .dropdown");
      allDropdowns.forEach((dropdown) => {
        const submenuLinks = dropdown.querySelectorAll(".sidebar-submenu li a");
        submenuLinks.forEach((link) => {
          if (
            link.getAttribute("href") === location.pathname ||
            link.getAttribute("to") === location.pathname
          ) {
            dropdown.classList.add("open");
            const submenu = dropdown.querySelector(".sidebar-submenu");
            if (submenu) {
              submenu.style.maxHeight = `${submenu.scrollHeight}px`; // Expand submenu
            }
          }
        });
      });
    };

    // Open the submenu that contains the active route
    openActiveDropdown();

    // Cleanup event listeners on unmount
    return () => {
      dropdownTriggers.forEach((trigger) => {
        trigger.removeEventListener("click", handleDropdownClick);
      });
    };
  }, [location.pathname]);

  let sidebarControl = () => {
    seSidebarActive(!sidebarActive);
  };

  let mobileMenuControl = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <section className={mobileMenu ? "overlay active" : "overlay "}>
      {/* sidebar */}
      <aside
        className={
          sidebarActive
            ? "sidebar active "
            : mobileMenu
              ? "sidebar sidebar-open"
              : "sidebar"
        }
      >
        <button
          onClick={mobileMenuControl}
          type='button'
          className='sidebar-close-btn'
        >
          <Icon icon='radix-icons:cross-2' />
        </button>
        <div>
          <Link to='/' className='sidebar-logo'>
            <img
              src='assets/images/logo.png'
              alt='site logo'
              className='light-logo'
            />
            <img
              src='assets/images/logo.png'
              alt='site logo'
              className='dark-logo'
            />
            <img
              src='assets/images/logo.png'
              alt='site logo'
              className='logo-icon'
            />
          </Link>
        </div>
        <div className='sidebar-menu-area'>
          <ul className='sidebar-menu' id='sidebar-menu'>


            <li>
              <NavLink
                to='/dashboard'
                className={(navData) => (navData.isActive ? "active-page" : "")}
              >
                <Icon
                  icon='solar:home-smile-angle-outline'
                  className='menu-icon'
                />
                <span>Dashboard</span>
              </NavLink>
            </li>




            {/* Invoice Dropdown */}
            <li className='dropdown'>
              <Link to='#'>
                <Icon icon='mdi:account-cog-outline' className='menu-icon' />

                <span>User Management</span>
              </Link>
              <ul className='sidebar-submenu'>
                <li>
                  <NavLink
                    to='/users-list'
                    className={(navData) =>
                      navData.isActive ? "active-page" : ""
                    }
                  >
                    <Icon icon='mdi:account-outline' className='menu-icon' />

                    Admin Users
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/primarymember-list'
                    className={(navData) =>
                      navData.isActive ? "active-page" : ""
                    }
                  >
                    <Icon icon='mdi:account-group-outline' className='menu-icon' />
                    Panel Associate
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/roles-list'
                    className={(navData) =>
                      navData.isActive ? "active-page" : ""
                    }
                  >
                    <Icon icon='mdi:account-key-outline' className='menu-icon' />

                    Role
                  </NavLink>
                </li>

              </ul>
            </li>



            <li className='dropdown'>
              <Link to='#'>
                <Icon icon="mdi:book-outline" className="menu-icon" />

                <span>Chapter</span>
              </Link>
              <ul className='sidebar-submenu'>
                <li>
                  <NavLink
                    to='/chapter'
                    className={(navData) =>
                      navData.isActive ? "active-page" : ""
                    }
                  >
                    <Icon icon="material-symbols:toc" className="menu-icon" />


                    Chapters
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to='/chapterwise'
                    className={(navData) =>
                      navData.isActive ? "active-page" : ""
                    }
                  >
                    <Icon icon="mdi:file-chart-outline" className="menu-icon" />



                    Chapter Report
                  </NavLink>
                </li>
              </ul>
            </li>




            {/* Invoice Dropdown */}
            <li className='dropdown'>
              <Link to='#'>
                <Icon icon="mdi:account-tie" className="menu-icon" />



                <span>Performers</span>
              </Link>
              <ul className='sidebar-submenu'>

                <li>
                  <NavLink
                    to='/121-list'
                    className={(navData) =>
                      navData.isActive ? "active-page" : ""
                    }
                  >
                    <Icon icon="mdi:format-list-bulleted-type" className="menu-icon" />



                    121's
                  </NavLink>
                </li>


                <li>
                  <NavLink
                    to='/referral'
                    className={(navData) =>
                      navData.isActive ? "active-page" : ""
                    }
                  >
                    <Icon icon="material-symbols:person-add-outline" className="menu-icon" />

                    Referral's
                  </NavLink>
                </li>



                <li>
                  <NavLink
                    to='/thankyou'
                    className={(navData) =>
                      navData.isActive ? "active-page" : ""
                    }
                  >
                    <Icon icon="mdi:hand-heart-outline" className="menu-icon" />

                    Thank you Slip
                  </NavLink>
                </li>


                <li>
                  <NavLink
                    to='/testimoniall'
                    className={(navData) =>
                      navData.isActive ? "active-page" : ""
                    }
                  >
                    <Icon icon="mdi:message-star-outline" className="menu-icon" />

                    Testimonial
                  </NavLink>
                </li>



                <li>
                  <NavLink
                    to='/visitor'
                    className={(navData) =>
                      navData.isActive ? "active-page" : ""
                    }
                  >
                    <Icon icon="mdi:eye-outline" className="menu-icon" />



                    Visitor /Guest
                  </NavLink>
                </li>











              </ul>
            </li>









            {/* Invoice Dropdown */}
            <li className='dropdown'>
              <Link to='#'>
                <Icon icon='fe:vector' className='menu-icon' />
                <span>Associate</span>
              </Link>
              <ul className='sidebar-submenu'>
                <li>
                  <NavLink
                    to='/member-list'
                    className={(navData) =>
                      navData.isActive ? "active-page" : ""
                    }
                  >
                    <Icon icon="mdi:account-details-outline" className="menu-icon" />


                    Associators
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink
                     to='/members-grid'
                    className={(navData) =>
                      navData.isActive ? "active-page" : ""
                    }
                  >
<Icon icon="mdi:badge-account-outline" className="menu-icon" />

                 Members Profile
                  </NavLink>
                </li> */}


              </ul>
            </li>




            {/* Invoice Dropdown */}
            <li className='dropdown'>
              <Link to='#'>
              <Icon icon="mdi:email-outline" className="menu-icon" />
                <span>Enquiry Management</span>
              </Link>
              <ul className='sidebar-submenu'>
                <li>
                  <NavLink
                    to='/enquiries'
                    className={(navData) =>
                      navData.isActive ? "active-page" : ""
                    }
                  >
                    <Icon icon="mdi:comment-question-outline" className="menu-icon" />



                    Enquiries
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink
                     to='/members-grid'
                    className={(navData) =>
                      navData.isActive ? "active-page" : ""
                    }
                  >
<Icon icon="mdi:badge-account-outline" className="menu-icon" />

                 Members Profile
                  </NavLink>
                </li> */}


              </ul>
            </li>




            {/* Invoice Dropdown */}
            <li className='dropdown'>
              <Link to='#'>
              <Icon icon="mdi:credit-card-outline" className="menu-icon" />
                <span>Payments</span>
              </Link>
              <ul className='sidebar-submenu'>
                <li>
                  <NavLink
                    to='/payment-list'
                    className={(navData) =>
                      navData.isActive ? "active-page" : ""
                    }
                  >
                    <Icon icon="mdi:credit-card-plus-outline" className="menu-icon" />



                    Payment Creation
                  </NavLink>
                </li>



              </ul>
            </li>








          </ul>
        </div>
      </aside>

      <main
        className={sidebarActive ? "dashboard-main active" : "dashboard-main"}
      >
        <div className='navbar-header'>
          <div className='row align-items-center justify-content-between'>
            <div className='col-auto'>
              <div className='d-flex flex-wrap align-items-center gap-4'>
                <button
                  type='button'
                  className='sidebar-toggle'
                  onClick={sidebarControl}
                >
                  {sidebarActive ? (
                    <Icon
                      icon='iconoir:arrow-right'
                      className='icon text-2xl non-active'
                    />
                  ) : (
                    <Icon
                      icon='heroicons:bars-3-solid'
                      className='icon text-2xl non-active '
                    />
                  )}
                </button>
                <button
                  onClick={mobileMenuControl}
                  type='button'
                  className='sidebar-mobile-toggle'
                >
                  <Icon icon='heroicons:bars-3-solid' className='icon' />
                </button>
                <form className='navbar-search'>
                  <input type='text' name='search' placeholder='Search' />
                  <Icon icon='ion:search-outline' className='icon' />
                </form>
              </div>
            </div>
            <div className='col-auto'>
              <div className='d-flex flex-wrap align-items-center gap-3'>

                {/* <ThemeToggleButton /> */}

                {/* Language dropdown end */}

                {/* Message dropdown end */}
                <div className='dropdown'>
                  <button
                    className='has-indicator w-40-px h-40-px bg-neutral-200 rounded-circle d-flex justify-content-center align-items-center'
                    type='button'
                    data-bs-toggle='dropdown'
                  >
                    <Icon
                      icon='iconoir:bell'
                      className='text-primary-light text-xl'
                    />
                  </button>
                  <div className='dropdown-menu to-top dropdown-menu-lg p-0'>
                    <div className='m-16 py-12 px-16 radius-8 bg-primary-50 mb-16 d-flex align-items-center justify-content-between gap-2'>
                      <div>
                        <h6 className='text-lg text-primary-light fw-semibold mb-0'>
                          Notifications
                        </h6>
                      </div>
                      <span className='text-primary-600 fw-semibold text-lg w-40-px h-40-px rounded-circle bg-base d-flex justify-content-center align-items-center'>
                        05
                      </span>
                    </div>
                    <div className='max-h-400-px overflow-y-auto scroll-sm pe-4'>
                      <Link
                        to='#'
                        className='px-24 py-12 d-flex align-items-start gap-3 mb-2 justify-content-between'
                      >
                        <div className='text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3'>
                          <span className='w-44-px h-44-px bg-success-subtle text-success-main rounded-circle d-flex justify-content-center align-items-center flex-shrink-0'>
                            <Icon
                              icon='bitcoin-icons:verify-outline'
                              className='icon text-xxl'
                            />
                          </span>
                          <div>
                            <h6 className='text-md fw-semibold mb-4'>
                              Congratulations
                            </h6>
                            <p className='mb-0 text-sm text-secondary-light text-w-200-px'>
                              Your profile has been Verified. Your profile has
                              been Verified
                            </p>
                          </div>
                        </div>
                        <span className='text-sm text-secondary-light flex-shrink-0'>
                          23 Mins ago
                        </span>
                      </Link>
                      <Link
                        to='#'
                        className='px-24 py-12 d-flex align-items-start gap-3 mb-2 justify-content-between bg-neutral-50'
                      >
                        <div className='text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3'>
                          <span className='w-44-px h-44-px bg-success-subtle text-success-main rounded-circle d-flex justify-content-center align-items-center flex-shrink-0'>
                            <img
                              src='assets/images/notification/profile-1.png'
                              alt=''
                            />
                          </span>
                          <div>
                            <h6 className='text-md fw-semibold mb-4'>
                              Richard
                            </h6>
                            <p className='mb-0 text-sm text-secondary-light text-w-200-px'>
                              Invite you to Chapter
                            </p>
                          </div>
                        </div>
                        <span className='text-sm text-secondary-light flex-shrink-0'>
                          23 Mins ago
                        </span>
                      </Link>
                      <Link
                        to='#'
                        className='px-24 py-12 d-flex align-items-start gap-3 mb-2 justify-content-between'
                      >
                        <div className='text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3'>
                          <span className='w-44-px h-44-px bg-info-subtle text-info-main rounded-circle d-flex justify-content-center align-items-center flex-shrink-0'>
                            AM
                          </span>
                          <div>
                            <h6 className='text-md fw-semibold mb-4'>
                              Anbu
                            </h6>
                            <p className='mb-0 text-sm text-secondary-light text-w-200-px'>
                              Invite you to Chapter
                            </p>
                          </div>
                        </div>
                        <span className='text-sm text-secondary-light flex-shrink-0'>
                          23 Mins ago
                        </span>
                      </Link>
                      <Link
                        to='#'
                        className='px-24 py-12 d-flex align-items-start gap-3 mb-2 justify-content-between bg-neutral-50'
                      >
                        <div className='text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3'>
                          <span className='w-44-px h-44-px bg-success-subtle text-success-main rounded-circle d-flex justify-content-center align-items-center flex-shrink-0'>
                            <img
                              src='assets/images/notification/profile-2.png'
                              alt=''
                            />
                          </span>
                          <div>
                            <h6 className='text-md fw-semibold mb-4'>
                              Kesavan
                            </h6>
                            <p className='mb-0 text-sm text-secondary-light text-w-200-px'>
                              Invite you to Chapter
                            </p>
                          </div>
                        </div>
                        <span className='text-sm text-secondary-light flex-shrink-0'>
                          23 Mins ago
                        </span>
                      </Link>
                      <Link
                        to='#'
                        className='px-24 py-12 d-flex align-items-start gap-3 mb-2 justify-content-between'
                      >
                        <div className='text-black hover-bg-transparent hover-text-primary d-flex align-items-center gap-3'>
                          <span className='w-44-px h-44-px bg-info-subtle text-info-main rounded-circle d-flex justify-content-center align-items-center flex-shrink-0'>
                            DR
                          </span>
                          <div>
                            <h6 className='text-md fw-semibold mb-4'>
                              Praveen
                            </h6>
                            <p className='mb-0 text-sm text-secondary-light text-w-200-px'>
                              Invite you to Chapter
                            </p>
                          </div>
                        </div>
                        <span className='text-sm text-secondary-light flex-shrink-0'>
                          23 Mins ago
                        </span>
                      </Link>
                    </div>
                    <div className='text-center py-12 px-16'>
                      <Link
                        to='#'
                        className='text-primary-600 fw-semibold text-md'
                      >
                        See All Notification
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Notification dropdown end */}
                <div className='dropdown'>
                  <button
                    className='d-flex justify-content-center align-items-center rounded-circle'
                    type='button'
                    data-bs-toggle='dropdown'
                  >
                    <img
                      src='assets/images/user.png'
                      alt='image_user'
                      className='w-40-px h-40-px object-fit-cover rounded-circle'
                    />
                  </button>
                  <div className='dropdown-menu to-top dropdown-menu-sm custom-dropdown-position'>
                    <div className='py-12 px-16 radius-8 bg-primary-50 mb-16 d-flex align-items-center justify-content-between gap-2'>
                      <div>
                        <h6 className='text-lg text-primary-light fw-semibold mb-2'>
                          Admin
                        </h6>

                      </div>
                      <button type='button' className='hover-text-danger'>
                        <Icon
                          icon='radix-icons:cross-1'
                          className='icon text-xl'
                        />
                      </button>
                    </div>
                    <ul className='to-top-list'>
                      {/* <li>
                        <Link
                          className='dropdown-item text-black px-0 py-8 hover-bg-transparent hover-text-primary d-flex align-items-center gap-3'
                          to='/view-profile'
                        >
                          <Icon
                            icon='solar:user-linear'
                            className='icon text-xl'
                          />{" "}
                          My Profile
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='dropdown-item text-black px-0 py-8 hover-bg-transparent hover-text-primary d-flex align-items-center gap-3'
                          to='/email'
                        >
                          <Icon
                            icon='tabler:message-check'
                            className='icon text-xl'
                          />{" "}
                          Inbox
                        </Link>
                      </li>
                      <li>
                        <Link
                          className='dropdown-item text-black px-0 py-8 hover-bg-transparent hover-text-primary d-flex align-items-center gap-3'
                          to='/company'
                        >
                          <Icon
                            icon='icon-park-outline:setting-two'
                            className='icon text-xl'
                          />
                          Setting
                        </Link>
                      </li> */}
                      <li>
                        <Link
                          className='dropdown-item text-black px-0 py-8 hover-bg-transparent hover-text-danger d-flex align-items-center gap-3'
                          to='#'
                        >
                          <Icon icon='lucide:power' className='icon text-xl' />{" "}
                          Log Out
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Profile dropdown end */}
              </div>
            </div>
          </div>
        </div>

        {/* dashboard-main-body */}
        <div className='dashboard-main-body'>{children}</div>

        {/* Footer section */}
        <footer className='d-footer'>
          <div className='row '>
            <div className='colauto'>
              <p className='mb-0 text-center'>© 2025 GRIP. All Rights Reserved.</p>
            </div>

          </div>
        </footer>
      </main>
    </section>
  );
};

export default MasterLayout;
