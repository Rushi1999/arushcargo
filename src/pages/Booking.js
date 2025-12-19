import React, { useState } from 'react';
import { LoadScript, Autocomplete } from '@react-google-maps/api';
import '../styles/booking.css';

const GOOGLE_API_KEY = 'YOUR_GOOGLE_API_KEY_HERE'; // Replace with your actual key
const libraries = ['places'];

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    pickup: '',
    drop: '',
    weight: '',
    goodsType: '',
    vehicleType: ''
  });

  const [errors, setErrors] = useState({});
  const [popupMessage, setPopupMessage] = useState('');
  const [pickupAutocomplete, setPickupAutocomplete] = useState(null);
  const [dropAutocomplete, setDropAutocomplete] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    const nameRegex = /^[A-Za-z ]+$/;
    const phoneRegex = /^[0-9]{10,15}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name) tempErrors.name = 'Name is required';
    else if (!nameRegex.test(formData.name)) tempErrors.name = 'Name should contain only letters';

    if (formData.email && !emailRegex.test(formData.email)) tempErrors.email = 'Invalid email address';

    if (!formData.phone) tempErrors.phone = 'Phone number is required';
    else if (!phoneRegex.test(formData.phone)) tempErrors.phone = 'Phone number must be 10-15 digits';

    if (!formData.pickup) tempErrors.pickup = 'Pickup location is required';
    if (!formData.drop) tempErrors.drop = 'Drop location is required';
    if (!formData.weight) tempErrors.weight = 'Goods weight is required';
    else if (isNaN(formData.weight) || Number(formData.weight) <= 0) tempErrors.weight = 'Weight must be a positive number';

    if (!formData.goodsType) tempErrors.goodsType = 'Select goods type';
    if (!formData.vehicleType) tempErrors.vehicleType = 'Select vehicle type';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setPopupMessage('Your order details have been shared with us. We will connect with you shortly to confirm your order.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        pickup: '',
        drop: '',
        weight: '',
        goodsType: '',
        vehicleType: ''
      });
      setErrors({});
      setTimeout(() => setPopupMessage(''), 5000);
    }
  };

  return (
    <LoadScript googleMapsApiKey={GOOGLE_API_KEY} libraries={libraries}>
      <div className="booking-page">
        <h2>Book Your Vehicle</h2>
        {popupMessage && <div className="popup-message">{popupMessage}</div>}

        <form onSubmit={handleSubmit} className="booking-form">
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
          {errors.name && <p className="error">{errors.name}</p>}

          <input type="email" name="email" placeholder="Email (Optional)" value={formData.email} onChange={handleChange} />
          {errors.email && <p className="error">{errors.email}</p>}

          <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
          {errors.phone && <p className="error">{errors.phone}</p>}

          <Autocomplete onLoad={auto => setPickupAutocomplete(auto)} onPlaceChanged={() => {
            if (pickupAutocomplete) {
              const place = pickupAutocomplete.getPlace();
              setFormData({ ...formData, pickup: place.formatted_address || formData.pickup });
            }
          }}>
            <input type="text" name="pickup" placeholder="Pickup Location" value={formData.pickup} onChange={handleChange} />
          </Autocomplete>
          {errors.pickup && <p className="error">{errors.pickup}</p>}

          <Autocomplete onLoad={auto => setDropAutocomplete(auto)} onPlaceChanged={() => {
            if (dropAutocomplete) {
              const place = dropAutocomplete.getPlace();
              setFormData({ ...formData, drop: place.formatted_address || formData.drop });
            }
          }}>
            <input type="text" name="drop" placeholder="Drop Location" value={formData.drop} onChange={handleChange} />
          </Autocomplete>
          {errors.drop && <p className="error">{errors.drop}</p>}

          <input type="number" name="weight" placeholder="Goods Weight (kg)" value={formData.weight} onChange={handleChange} />
          {errors.weight && <p className="error">{errors.weight}</p>}

          <select name="goodsType" value={formData.goodsType} onChange={handleChange}>
            <option value="">Select Goods Type</option>
            <option value="Household">Household</option>
            <option value="Industrial">Industrial</option>
            <option value="Fragile">Fragile</option>
          </select>
          {errors.goodsType && <p className="error">{errors.goodsType}</p>}

          <select name="vehicleType" value={formData.vehicleType} onChange={handleChange}>
            <option value="">Select Vehicle Type</option>
            <option value="Small">Small Vehicle</option>
            <option value="Medium">Medium Vehicle</option>
            <option value="Heavy">Heavy Vehicle</option>
          </select>
          {errors.vehicleType && <p className="error">{errors.vehicleType}</p>}

          <button type="submit">Submit Enquiry</button>
        </form>
      </div>
    </LoadScript>
  );
};

export default Booking;
