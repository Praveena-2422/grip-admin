import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
// import React, { useState } from "react";

import { useNavigate } from 'react-router-dom';


const MembershipLayer = () => {

    const navigate = useNavigate();

    const [checkboxes, setCheckboxes] = useState({
        check1: false,
        check2: false,
        check3: false,
        check4: false,
        check5: false,
        check6: false,
    });

    const handleCheckboxChange = (e) => {
        const { id, checked } = e.target;
        setCheckboxes((prev) => ({
            ...prev,
            [id]: checked,
        }));
    };

    const handleSubmit = () => {
        if (allChecked) {
            // ✅ Redirect to login
            navigate('/');
        }
    };

    const allChecked = Object.values(checkboxes).every(Boolean);

    const [currentStep, setCurrentStep] = useState(1);

    const nextStep = () => {
        if (currentStep < 7) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };
    return (
        <section className='membership-form-areaa  p-50 auth bg-base d-flex flex-wrap'>
            {/* <div className='auth-left d-lg-block d-none'>
        <div className='d-flex align-items-center flex-column h-100 justify-content-center'>
          <img src='assets/images/auth/grip-signup.jpg' alt='' />
        </div>
      </div> */}
            <div className='container'>
                <div className="row">






                    <div className='col-md-2'></div>


                    <div className='col-md-8'>
                        <div>
                            <Link to='/' className='mb-20 max-w-150-px'>
                                <img src='assets/images/logo.png' alt='' />
                            </Link>
                            <h4 className='mb-40 associate-title'>Associate Membership Application</h4>
                            {/* <p className='mb-32 text-secondary-light text-lg'>
              Welcome back! please enter your detail
            </p> */}
                        </div>

                        <div className='card'>
                            <div className='card-body'>
                                {/* <h6 className='mb-4 text-xl'>Order By Following Step</h6>
                                <p className='text-neutral-500'>
                                    Fill up your details and proceed next steps.
                                </p> */}
                                {/* Form Wizard Start */}
                                <div className='form-wizard'>
                                    <form action='#' method='post'>
                                        <div className='form-wizard-header overflow-x-auto scroll-sm pb-8 my-32'>
                                            <ul className='list-unstyled form-wizard-list style-two'>
                                                <li
                                                    className={`form-wizard-list__item
                      ${[2, 3, 4].includes(currentStep) && "activated"}
                    ${currentStep === 1 && "active"} `}
                                                >
                                                    <div className='form-wizard-list__line'>
                                                        <span className='count'>1</span>
                                                    </div>
                                                    <span className='text text-xs fw-semibold'>
                                                        Chapter Info{" "}
                                                    </span>
                                                </li>
                                                <li
                                                    className={`form-wizard-list__item
                      ${[3, 4].includes(currentStep) && "activated"}
                    ${currentStep === 2 && "active"} `}
                                                >
                                                    <div className='form-wizard-list__line'>
                                                        <span className='count'>2</span>
                                                    </div>
                                                    <span className='text text-xs fw-semibold'>
                                                        Personal Details
                                                    </span>
                                                </li>
                                                <li
                                                    className={`form-wizard-list__item
                      ${[4].includes(currentStep) && "activated"}
                    ${currentStep === 3 && "active"} `}
                                                >
                                                    <div className='form-wizard-list__line'>
                                                        <span className='count'>3</span>
                                                    </div>
                                                    <span className='text text-xs fw-semibold'>Business Details</span>
                                                </li>
                                                <li
                                                    className={`form-wizard-list__item

                    ${currentStep === 4 && "active"} `}
                                                >
                                                    <div className='form-wizard-list__line'>
                                                        <span className='count'>4</span>
                                                    </div>
                                                    <span className='text text-xs fw-semibold'>Completed</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <fieldset
                                            className={`wizard-fieldset ${currentStep === 1 && "show"} `}
                                        >
                                            {/* <h6 className='text-md text-neutral-500'>
                                                Chapter Information
                                            </h6> */}
                                            <div className='row gy-3'>
                                                <div className="col-6 ">
                                                    <label className="form-label">Select Region </label>
                                                    <select class="form-control form-select">
                                                        <option value="Date">Select Region </option>
                                                        <option value="1" selected="">Chennai</option>
                                                    </select>

                                                </div>
                                                <div className="col-6">
                                                    <label className="form-label">Chapter Name  </label>
                                                    <select class="form-control form-select">

                                                        <option value="">Select Chapter</option>
                                                        <option value="aram Tuesday">GRIP Aram (Tuesday)</option>
                                                        <option value="virutcham Wednesday">GRIP Virutcham (Wednesday)</option>
                                                        <option value="madhuram Thursday">GRIP Madhuram (Thursday)</option>
                                                        <option value="kireedam Friday">GRIP Kireedam (Friday)</option>


                                                        <option value="amudham Saturday">GRIP Amudham (Saturday)</option>
                                                    </select>
                                                </div>
                                                <div className="col-6">
                                                    <label className="form-label">Chapter Induction Directors (CID)  </label>
                                                    <select class="form-control form-select">

                                                        <option value=""> Select Name </option>
                                                        <option value="rajesh">Rajesh</option>
                                                        <option value="madhu">Madhu</option>
                                                        <option value="praburajan">Praburajan</option>
                                                        <option value="gajendran">Gajendran</option>
                                                        <option value="kirubakaran">Kirubakaran</option>
                                                        <option value="Kumar Subramaniam">Kumar Subramaniam</option>
                                                        <option value="Palanikumar">Palanikumar</option>

                                                    </select>
                                                </div>
                                                <div className="col-6">
                                                    <label className="form-label">Who invited you? </label>
                                                    <input
                                                        type="text"
                                                        name="#0"
                                                        className="form-control"

                                                    />
                                                </div>
                                                <div className="col-6">
                                                    <label className="form-label">
                                                        How did you hear about GRIP?   </label>
                                                    <select class="form-control form-select">
                                                        <option value="">Select an option </option>
                                                        <option value="Online">Online</option>
                                                        <option value="Facebook">Facebook</option>
                                                        <option value="Instagram">Instagram</option>
                                                        <option value="Friends">Friends</option>
                                                        <option value="WhatsApp">WhatsApp</option>
                                                        <option value="Email">Email</option>
                                                        <option value="Other">Other</option>

                                                    </select>
                                                </div>

                                                <div className='form-group text-end'>
                                                    <button
                                                        onClick={nextStep}
                                                        type='button'
                                                        className='form-wizard-next-btn btn btn-primary-600 px-32'
                                                    >
                                                        Next
                                                    </button>
                                                </div>
                                            </div>




                                        </fieldset>
                                        <fieldset
                                            className={`wizard-fieldset ${currentStep === 2 && "show"} `}
                                        >
                                            {/* <h6 className='text-md text-neutral-500'>
                                                Account Information
                                            </h6> */}
                                            <div className="row gy-3 mb-5">
                                                <div className="col-6">
                                                    <label className="form-label">First Name  </label>
                                                    <input
                                                        type="text"
                                                        name="#0"
                                                        className="form-control"

                                                    />
                                                </div>

                                                <div className="col-6">
                                                    <label className="form-label">Last Name </label>
                                                    <input
                                                        type="text"
                                                        name="#0"
                                                        className="form-control"

                                                    />
                                                </div>


                                                <div className="col-6">
                                                    <label className="form-label">Company Name </label>
                                                    <input
                                                        type="text"
                                                        name="#0"
                                                        className="form-control"

                                                    />
                                                </div>


                                                <div className="col-6">
                                                    <label className="form-label">Industry </label>
                                                    <input
                                                        type="text"
                                                        name="#0"
                                                        className="form-control"

                                                    />
                                                </div>


                                                <div className="col-6">
                                                    <label className="form-label">
                                                        Category You Represent  </label>
                                                    <input
                                                        type="text"
                                                        name="#0"
                                                        className="form-control"

                                                    />
                                                </div>


                                                <div className="col-6">
                                                    <label className="form-label">
                                                        Date of Birth  </label>
                                                    <input type="date" name="#0" class="form-control" />
                                                </div>


                                                <div className="col-12">
                                                    <label className="form-label">Have you or your company ever been a member of GRIP chapter? </label>
                                                    <select class="form-control form-select">
                                                        <option value="Date">Select  </option>
                                                        <option value="yes" selected="">Yes</option>
                                                        <option value="no" >No</option>
                                                    </select>

                                                </div>


                                                <div className="col-12">
                                                    <label className="form-label">Do you belong to any other networking
                                                        organisations? </label>
                                                    <select class="form-control form-select">
                                                        <option value="Date">Select  </option>
                                                        <option value="yes" selected="">Yes</option>
                                                        <option value="no" >No</option>
                                                    </select>

                                                </div>

                                            </div>


                                            <h6 className='text-md text-neutral-500'>
                                                <b>Contact Details</b>
                                            </h6>

                                            <div className="row gy-3">
                                                <div className="col-4">
                                                    <label className="form-label">Email  </label>
                                                    <input
                                                        type="text"
                                                        name="#0"
                                                        className="form-control"

                                                    />
                                                </div>

                                                <div className="col-4">
                                                    <label className="form-label">

                                                        Mobile Number  </label>
                                                    <input
                                                        type="text"
                                                        name="#0"
                                                        className="form-control"

                                                    />
                                                </div>


                                                <div className="col-4">
                                                    <label className="form-label">

                                                        Secondary Phone </label>
                                                    <input
                                                        type="text"
                                                        name="#0"
                                                        className="form-control"

                                                    />
                                                </div>

                                                <div className="col-6">
                                                    <label className="form-label">Website </label>
                                                    <input
                                                        type="text"
                                                        name="#0"
                                                        className="form-control"

                                                    />
                                                </div>


                                                <div className="col-6">
                                                    <label className="form-label">GST Number (Optional) </label>
                                                    <input
                                                        type="text"
                                                        name="#0"
                                                        className="form-control"

                                                    />
                                                </div>


                                                <div className='form-group d-flex align-items-center justify-content-end gap-8 mt-5'>
                                                    <button
                                                        onClick={prevStep}
                                                        type='button'
                                                        className='form-wizard-previous-btn btn btn-neutral-500 border-neutral-100 px-32'
                                                    >
                                                        Back
                                                    </button>
                                                    <button
                                                        onClick={nextStep}
                                                        type='button'
                                                        className='form-wizard-next-btn btn btn-primary-600 px-32'
                                                    >
                                                        Next
                                                    </button>
                                                </div>


                                            </div>
                                        </fieldset>
                                        <fieldset
                                            className={`wizard-fieldset ${currentStep === 3 && "show"} `}
                                        >
                                            <h6 className='text-md text-neutral-500'><b>Business Address</b></h6>
                                            <div className='row gy-3 mb-5'>
                                                <div className="col-4">
                                                    <label className="form-label">Address Line 1  </label>
                                                    <input
                                                        type="text"
                                                        name="#0"
                                                        className="form-control"

                                                    />
                                                </div>

                                                <div className="col-4">
                                                    <label className="form-label">
                                                        Address Line 2 </label>
                                                    <input
                                                        type="text"
                                                        name="#0"
                                                        className="form-control"

                                                    />
                                                </div>


                                                <div className="col-4">
                                                    <label className="form-label">State / Province  </label>
                                                    <select class="form-control form-select">
                                                        <option value="Date">Select State </option>
                                                        <option value="1" selected="">Tamilnadu</option>
                                                    </select>
                                                </div>


                                                <div className="col-6">
                                                    <label className="form-label">City  </label>
                                                    <select class="form-control form-select">
                                                        <option value="Date">Select State </option>
                                                        <option value="1" selected=""></option>
                                                    </select>
                                                </div>


                                                <div className="col-6">
                                                    <label className="form-label">Postal Code </label>
                                                    <input
                                                        type="text"
                                                        name="#0"
                                                        className="form-control"

                                                    />
                                                </div>


                                            </div>
                                            <h6 className='text-md text-neutral-500'><b>Business Experience</b></h6>
                                            <div className="row gy-3 mb-5">
                                                <div className="col-lg-4">
                                                    <label className="form-label">Share your business experience </label>
                                                    <textarea
                                                        name="#0"
                                                        className="form-control"
                                                        rows={3}
                                                        cols={50}

                                                        defaultValue={""}
                                                    />
                                                </div>
                                                <div className="col-lg-4">
                                                    <label className="form-label">Length of time in business</label>
                                                    <textarea
                                                        name="#0"
                                                        className="form-control"
                                                        rows={3}
                                                        cols={50}


                                                    />
                                                </div>
                                                <div className="col-lg-4 ">
                                                    <label className="form-label">
                                                        Educational Background</label>
                                                    <textarea
                                                        className="form-control"
                                                        rows={3}
                                                        cols={50}


                                                    />

                                                </div>


                                            </div>


                                            <h6 className="card-title mb-0">Business References</h6>
                                            <span>   These references won't be used for promotion</span>
                                            <div className="row gy-3">
                                                <div className="col-4">
                                                    <label className="form-label">Ref 1: First Name   </label>
                                                    <input
                                                        type="text"
                                                        name="#0"
                                                        className="form-control"

                                                    />
                                                </div>

                                                <div className="col-4">
                                                    <label className="form-label">

                                                        Ref 1: Last Name   </label>
                                                    <input
                                                        type="text"
                                                        name="#0"
                                                        className="form-control"

                                                    />
                                                </div>


                                                <div className="col-4">
                                                    <label className="form-label">


                                                        Business Name </label>
                                                    <input
                                                        type="text"
                                                        name="#0"
                                                        className="form-control"

                                                    />
                                                </div>



                                                <div className="col-4">
                                                    <label className="form-label">Phone </label>
                                                    <input
                                                        type="text"
                                                        name="#0"
                                                        className="form-control"

                                                    />
                                                </div>


                                                <div className="col-4">
                                                    <label className="form-label">
                                                        Email </label>
                                                    <input
                                                        type="email"
                                                        name="#0"
                                                        className="form-control"

                                                    />
                                                </div>


                                                <div className="col-4 mb-20">
                                                    <label className="form-label">
                                                        Relationship </label>
                                                    <input
                                                        type="text"
                                                        name="#0"
                                                        className="form-control"

                                                    />
                                                </div>

                                                <div className="col-12 businessdetail mb-5">

                                                    <div class="form-check style-check d-flex align-items-center mb-10">
                                                        <input class="form-check-input" type="checkbox" id="check1" value="" />
                                                        <label class="form-check-label" for="check1">
                                                            I have/will inform the above contacts that I’m sharing their info with GRIP.</label>

                                                    </div>

                                                    <div class="form-check style-check d-flex align-items-center">
                                                        <input class="form-check-input" type="checkbox" id="check1" value="" />
                                                        <label class="form-check-label" for="check1">
                                                            I have/​will inform the above contacts that I am sharing their information with GRIP for the purpose of references</label>

                                                    </div>

                                                </div>




                                                <div className='form-group d-flex align-items-center justify-content-end gap-8 mt-3'>
                                                    <button
                                                        onClick={prevStep}
                                                        type='button'
                                                        className='form-wizard-previous-btn btn btn-neutral-500 border-neutral-100 px-32'
                                                    >
                                                        Back
                                                    </button>
                                                    <button
                                                        onClick={nextStep}
                                                        type='button'
                                                        className='form-wizard-next-btn btn btn-primary-600 px-32'
                                                    >
                                                        Next
                                                    </button>
                                                </div>
                                            </div>
                                        </fieldset>
                                        <fieldset className={`wizard-fieldset ${currentStep === 4 ? "show" : ""}`}>
                                            <h6 className="card-title mb-0">Terms and Conditions</h6>

                                            <div className="row gy-3 pt-3 pb-5">
                                                <div className="col-12 pb-30">

                                                    {/* Checkboxes */}
                                                    {Object.entries({
                                                        check1: "I will be able to attend our GRIP weekly meetings on time.",
                                                        check2: "I will be able to bring visitors to this GRIP chapter meetings.",
                                                        check3: "I will always display a positive attitude.",
                                                        check4: "I understand that 'Contributors Win'™",
                                                        check5: "I will abide by the policies of GRIP.",
                                                        check6: "I will contribute to the best of my knowledge & ability.",
                                                    }).map(([id, label]) => (
                                                        <div className="form-check style-check d-flex align-items-center" key={id}>
                                                            <input
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                id={id}
                                                                onChange={handleCheckboxChange}
                                                                checked={checkboxes[id]}
                                                            />
                                                            <label className="form-check-label" htmlFor={id}>{label}</label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* ✅ Success Message */}
                                            {allChecked && (
                                                <div className='text-center mb-40'>
                                                    <img
                                                        src='assets/images/gif/success-img3.gif'
                                                        alt=''
                                                        className='gif-image mb-24'
                                                    />
                                                    <h6 className='text-md text-neutral-600'>Congratulations</h6>
                                                    <p className='text-neutral-400 text-sm mb-0'>
                                                        Well done! You have successfully completed.
                                                    </p>
                                                </div>
                                            )}

                                            {/* ✅ Buttons */}
                                            <div className='form-group d-flex align-items-center justify-content-end mt-5 gap-8'>
                                                <button
                                                    onClick={prevStep}
                                                    type='button'
                                                    className='form-wizard-previous-btn btn btn-neutral grip-black border-neutral-100 px-32'
                                                >
                                                    Back
                                                </button>
                                                <button
                                                    onClick={handleSubmit}
                                                    type='button'
                                                    className='form-wizard-submit btn btn-primary grip px-32'
                                                    disabled={!allChecked}
                                                >
                                                   Submit
                                                </button>
                                            </div>
                                        </fieldset>
                                    </form>
                                </div>
                                {/* Form Wizard End */}
                            </div>
                        </div>
                    </div>







                    <div className='col-md-2'></div>





                </div>
            </div>

        </section>
    );
};

export default MembershipLayer;
