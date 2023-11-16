import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import ModeIcon from '@mui/icons-material/Mode';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveSharpIcon from '@mui/icons-material/SaveSharp';

import BgImage from '../../../common/BackgroundImage/BgImage';
import { LABELS } from '../../../common/constant/const';
import { addBooking, selectBookings, updateBooking, deleteBooking } from '../../../features/reducers/dataSlice';

import './css/booking.css';

function Booking() {
    const [formData, setFormData] = useState({
        vehicle: '',
        driverName: '',
        email: '',
        name: '',
        phoneNumber: '',
        date: null,
        pickupAddress: '',
        dropoffAddress: '',
    });

    const [editIndex, setEditIndex] = useState(null);

    const bookings = useSelector(selectBookings);
    const dispatch = useDispatch();

    const handleAddBooking = () => {
        if (formData.date === null) {
            alert('Please select a date for your booking.');
            return;
        }
        if (!isEmailValid(formData.email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (!isPhoneNumberValid(formData.phoneNumber)) {
            alert('Please enter a valid 10-digit phone number.');
            return;
        }
        const newBooking = { ...formData };
        dispatch(addBooking(newBooking));
        setFormData({
            vehicle: '',
            driverName: '',
            email: '',
            name: '',
            phoneNumber: '',
            date: null,
            pickupAddress: '',
            dropoffAddress: '',
        });
    };
    const isEmailValid = (email) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(email);
    };

    const isPhoneNumberValid = (phoneNumber) => {
        const phoneNumberRegex = /^[0-9]{10}$/;
        return phoneNumberRegex.test(phoneNumber);
    };

    const handleEditBooking = (index) => {
        setEditIndex(index); //keep track of which booking is currently being edited
        setFormData({ ...bookings[index] });  // it creates the shallow copy
    };

    const handleUpdateBooking = () => {
        if (editIndex !== null) { //if index in the edit mode
            dispatch(updateBooking({ index: editIndex, data: formData }));
            setEditIndex(null);
            setFormData({
                vehicle: '',
                driverName: '',
                email: '',
                name: '',
                phoneNumber: '',
                date: null,
                pickupAddress: '',
                dropoffAddress: '',
            });
        }
    };

    const handleDeleteBooking = (index) => {
        dispatch(deleteBooking(index));
    };


    return (
        <div id='bookingContainer'>
            <BgImage className='bgImage'>
                <div className='anchorLinkContainer'>
                    <Link id='homeLink' to="/">{LABELS.HOME}</Link>
                    <p className='slash'>/</p>
                    <Link id='subLink' to="/booking">{LABELS.BOOKING}</Link>
                </div>
                <h2 className='color'>ABOUT US</h2>
            </BgImage>
            <p className='headerTextService headerServices'>Choose Your Trip</p>
            <h1 className='paraTextService headerServices'>TRIP BOOKING</h1>
            <div className='fstContainer'>
                <div className='border'>
                    <div className='container'>
                        <label className='header'>Vehicle</label>
                        <select
                            className='options'
                            value={formData.vehicle}
                            onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                        >
                            <option value=""></option>
                            <option value="Honda">Honda</option>
                            <option value="Maruti">Maruti</option>
                            <option value="Skoda">Skoda</option>
                            <option value="Panther">Panther</option>
                        </select>
                    </div>

                    <div className='container'>
                        <label className='header'>Driver Name</label>
                        <select
                            className='options'
                            value={formData.driverName}
                            onChange={(e) => setFormData({ ...formData, driverName: e.target.value })}
                        >
                            <option value=""></option>
                            <option value="Sudeep">Sudeep</option>
                            <option value="Ravish">Ravish</option>
                            <option value="Lathesh">Lathesh</option>
                        </select>
                    </div>
                    <div className='container'>
                        <label className='header'>Email Address</label>
                        <input
                            type="tel"
                            className='options widthNum'
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                </div>
            </div>
            <div className='fstContainer'>
                <div className='border' id='flex'>
                    <div className='fst'>
                        <div className='container'>
                            <label className='header'>Name</label>
                            <input
                                type="text"
                                className="options widthText"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div className='container'>
                            <label className='header'>Phone Number</label>
                            <input
                                type="tel"
                                className='options widthNum'
                                value={formData.phoneNumber}
                                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                            />
                        </div>
                        <div className='container'>
                            <label className='header'>Date</label>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    value={formData.date}
                                    onChange={(date) => setFormData({ ...formData, date: date })} disablePast
                                />
                            </LocalizationProvider>
                        </div>
                    </div>
                    <div className='fst'>
                        <div className='container'>
                            <label className='header'>PickUp Address</label>
                            <input
                                type="text"
                                className='options widthNum'
                                value={formData.pickupAddress}
                                onChange={(e) => setFormData({ ...formData, pickupAddress: e.target.value })}
                            />
                        </div>
                        <div className='container'>
                            <label className='header'>DropOff Address</label>
                            <input
                                type="text"
                                className='options widthNum'
                                value={formData.dropoffAddress}
                                onChange={(e) => setFormData({ ...formData, dropoffAddress: e.target.value })}
                            />
                        </div>
                        <div className="buttonContainer">
                            <button className="button" onClick={handleAddBooking}>
                                ADD
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="tableContainer" style={{ overflowX: "auto" }}>
                <table>
                    <thead>
                        <tr>
                            <th>sl</th>
                            <th>Vehicle</th>
                            <th>Driver Name</th>
                            <th>Email Address</th>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Date</th>
                            <th>Pickup Address</th>
                            <th>DropOff Address</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking, index) => (
                            <tr key={index + 1}>
                                <td>{index + 1}</td>
                                <td>{booking.vehicle}</td>
                                <td>{booking.driverName}</td>
                                <td>{booking.email}</td>
                                <td>{booking.name}</td>
                                <td>{booking.phoneNumber}</td>
                                <td>{booking.date.toString()}</td>
                                <td>{booking.pickupAddress}</td>
                                <td>{booking.dropoffAddress}</td>
                                <td>
                                    <ModeIcon onClick={() => handleEditBooking(index)} className='fontStyle'></ModeIcon>
                                    <DeleteIcon onClick={() => handleDeleteBooking(index, booking)} className='fontStyle'></DeleteIcon>
                                    {editIndex === index ? (
                                        <SaveSharpIcon onClick={handleUpdateBooking} className='fontStyle'></SaveSharpIcon>
                                    ) : null}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Booking;