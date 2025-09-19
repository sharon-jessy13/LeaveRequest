import React, { useState } from 'react';
import '../styles/SpecialLeaveState1.css';
import Header from '../Components/Header';
import note from '../assets/note.svg';
import Group from '../assets/Group.svg';
import policy from '../assets/policy.svg';
import addicon from '../assets/addicon.svg';

const SpecialLeaveState1 = () => {
    const [formData, setFormData] = useState({
        requestType: 'apply',
        dayType: 'full',
        leaveType: 'Special Leave for Women',
        clMonth: 'March',
        fromDate: '2025-08-08',
        toDate: '2025-08-08',
        reason: 'Work on Weekend for Project deployment',
        comment: 'I have an important personal matter to attend to at my Home town.',
        acknowledged: true,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        alert('Leave application submitted successfully!');
    };

    return (
        <>
            <Header />
            <div className="form-container">
                <div className="form-header-special">
                    <div className='form-header-title'>
                        <img src={Group} alt="Aplly-icon" />
                        <h2>Apply/Cancel Leave</h2>
                    </div>
                    <div className="header-info">

                        <img src={note} className='special-note' />
                    </div>
                </div>

                <form className="leave-form" onSubmit={handleSubmit}>
                    {/* A single grid for the entire form ensures consistent alignment */}
                    <div className="form-grid">

                        <div className="grid-item col-4">
                            <div className="form-group">
                                <label className="form-label">Request Type</label>
                                <div className="radio-group">
                                    <input type="radio" id="applyLeave" name="requestType" value="apply" checked={formData.requestType === 'apply'} onChange={handleChange} />
                                    <label htmlFor="applyLeave">Apply Leave</label>
                                    <input type="radio" id="cancelLeave" name="requestType" value="cancel" checked={formData.requestType === 'cancel'} onChange={handleChange} />
                                    <label htmlFor="cancelLeave">Cancel Leave</label></div>
                            </div>
                        </div>

                        <div className="grid-item col-4">
                            <div className="form-group">
                                <label className="form-label">Day Type</label>
                                <div className="radio-group">
                                    <input type="radio" name="dayType" id='Fullday' value="full" checked={formData.dayType === 'full'} onChange={handleChange} />
                                    <label htmlFor="Fullday"> Full day (s)</label>
                                    <input type="radio" name="dayType"id='Firsthalf' value="first" checked={formData.dayType === 'first'} onChange={handleChange} />
                                    <label htmlFor="Firsthalf"> First Half</label>
                                    <input type="radio" name="dayType" id='Secondhalf' value="second" checked={formData.dayType === 'second'} onChange={handleChange} />
                                    <label htmlFor="Secondhalf"> Second Half</label> 
                                    </div>
                            </div>
                        </div>
                         <div className="grid-item col-4"></div>
                        
                            <div className="grid-item col-4">
                                <div className="form-group">
                                    <label className="form-label">Leave Type</label>
                                    <select name="leaveType" className='special-dropdown' value={formData.leaveType} onChange={handleChange}>
                                        <option>Special Leave for Women</option>
                                        <option>Paternity Leave</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid-item col-4">
                                <div className="form-group">
                                    <label className="form-label">CL for Month</label>
                                    <select name="clMonth" className='special-dropdown' value={formData.clMonth} onChange={handleChange}>
                                        <option>March</option>
                                        <option>April</option>
                                    </select>
                                </div>
                            </div>
                            <div className="grid-item col-4"></div>

                            <div className="grid-item col-4">
                                <div className="form-group">
                                    <label className="form-label">From Date</label>
                                    <input type="date" name="fromDate" className='special-custom-date-input' value={formData.fromDate} onChange={handleChange} />
                                </div>
                            </div>

                            <div className="grid-item col-4">
                                <div className="form-group">
                                    <label className="form-label">To Date</label>
                                    <input type="date" name="toDate" className='special-custom-date-input' value={formData.toDate} onChange={handleChange} />
                                </div>
                            </div>

                            <div className="grid-item col-4 add-btn-container">
                                <button type="button" className="add-leave-btn">
                                    <img src={addicon}/> Add to Leave list
                                </button>
                            </div>
                        </div>
                        <div className="grid-item col-12">
                            <div className="form-group-checkbox-group">
                                <input type="checkbox" id="acknowledgement" name="acknowledged" checked={formData.acknowledged} onChange={handleChange} />
                                <label htmlFor="acknowledgement">I acknowledge that this OOO request is for official purpose only.</label>
                            </div>
                        

                        <div className="grid-item col-12">
                            <div className="form-group">
                                <label className="form-label">Reason for Leave</label>
                                <textarea name="reason"className='special-textarea' value={formData.reason} onChange={handleChange} rows="3"></textarea>
                            </div>
                        </div>

                        <div className="grid-item col-12">
                            <div className="form-group">
                                <label className="form-label">Comment</label>
                                <textarea name="comment" className='special-textarea'value={formData.comment} onChange={handleChange} rows="3"></textarea>
                            </div>
                        </div>
                    </div>

                    <hr className="form-divider" />

                    <footer className="form-footer">
                       
                        <div className="footer-buttons">
                            <button type="button" className="btn btn-secondary">Cancel</button>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                         {/* <a href="#view-policies" className="view-policies">
                            <img src={policy} className='footer-policy'/> View Policies</a> */}
                    </footer>
                </form>
            </div>
        </>
    );
};

export default SpecialLeaveState1;