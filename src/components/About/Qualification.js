
import React from "react";

import { HiOutlineAcademicCap,  HiOutlineCalendar } from "react-icons/hi";

const Qualification = () => {


    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    
                    <div className="qualification__button button--flex qualification__active">
                        <HiOutlineAcademicCap className="qualification__icon" />
                        Education
                    </div>
                    
                </div>

                <div className="qualification__sections">
                    
                    <div className="qualification__content qualification__content-active">
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Design</h3>
                                <span className="qualification__subtitle">The Art Institute</span>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon" />
                                    2016-2018
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Web Development</h3>
                                <span className="qualification__subtitle">Full Sail University</span>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon" />
                                    2018-2021
                                </div>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">UI/UX Design</h3>
                                <span className="qualification__subtitle">UX Academy</span>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon" />
                                    2021-2022
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default Qualification;
