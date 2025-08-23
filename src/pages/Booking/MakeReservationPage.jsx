import React, { useState } from 'react';
import { ChevronLeft, ChevronDown, Calendar } from 'lucide-react';

const MakeReservationPage = () => {
  const [currentStep, setCurrentStep] = useState('booking');
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: '',
    lastName: '',
    gender: '',
    phoneNumber: '',
    countryCode: '+234',
    townCity: '',
    country: '',
    adults: '',
    children: '',
    checkIn: '',
    checkOut: '',
    
    // Next of Kin
    nextOfKinName: '',
    nextOfKinPhone: '',
    nextOfKinCountryCode: '+234',
    nextOfKinTownCity: '',
    nextOfKinCountry: '',
    remark: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNext = () => {
    // Navigate to Choose Room page
    console.log('Navigate to Choose Room page');
  };

  const handlePrevious = () => {
    // Navigate back to previous page
    console.log('Navigate back to previous page');
  };

  const steps = [
    { id: 'booking', name: 'Booking Info', active: true },
    { id: 'room', name: 'Choose Room', active: false },
    { id: 'confirmation', name: 'Confirmation', active: false },
    { id: 'payment', name: 'Payment', active: false }
  ];

  return (
    <div className="min-h-screen">
      {/* Header with Background */}
      <div 
  className="relative h-48 bg-cover bg-center"
  style={{
    backgroundImage: `url('/assets/images/comp.png')`
  }}
>
  <div className="absolute inset-0 bg-black/60"></div>
  <div className="relative z-10 flex items-center justify-between h-full px-8">
    {/* Logo */}
    <div className="flex items-center space-x-4">
      <button 
        onClick={handlePrevious}
        className="text-white hover:text-gray-300 transition-colors"
      >
        <ChevronLeft size={24} />
      </button>
    </div>
    
    {/* Title */}
    <h1 className="text-3xl lg:text-4xl font-bold text-white font-serif">
      Make Reservation
    </h1>
    
    {/* Logo */}
    <div>
      <img 
        src="/assets/images/ft-logo.png" 
        alt="Winners Portal Logo" 
        className="w-12 h-12 object-contain"
      />
    </div>
  </div>
</div>

      {/* Progress Steps */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex items-center space-x-8 py-4">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`text-lg font-medium ${
                  step.active ? 'text-red-600 border-b-2 border-red-600 pb-2' : 'text-gray-400'
                }`}>
                  {step.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="max-w-6xl mx-auto px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* First Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First name"
                className="w-full px-4 py-3 border bg-red-50 border-red-600 rounded-lg outline-none transition-colors focus:border-red-500 focus:bg-red-100 hover:border-red-400 focus:ring-red-200"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last name"
                className="w-full px-4 py-3 border bg-red-50 border-red-600 rounded-lg outline-none transition-colors focus:border-red-500 focus:bg-red-100 hover:border-red-400 focus:ring-red-200"
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gender
              </label>
              <div className="relative">
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border bg-red-50 border-red-600 rounded-lg outline-none transition-colors focus:border-red-500 focus:bg-red-100 hover:border-red-400 focus:ring-red-200"
                >
                  <option value="">Male or Female</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleInputChange}
                  placeholder="+234"
                  className="w-20 px-3 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                />
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="(239) 555-0108"
                  className="w-full px-4 py-3 border bg-red-50 border-red-600 rounded-lg outline-none transition-colors focus:border-red-500 focus:bg-red-100 hover:border-red-400 focus:ring-red-200"
                />
              </div>
            </div>

            {/* Town/City */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Town/City
              </label>
              <input
                type="text"
                name="townCity"
                value={formData.townCity}
                onChange={handleInputChange}
                placeholder="Town"
                className="w-full px-4 py-3 border bg-red-50 border-red-600 rounded-lg outline-none transition-colors focus:border-red-500 focus:bg-red-100 hover:border-red-400 focus:ring-red-200"
              />
            </div>

            {/* Country */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Country
              </label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                placeholder="Country"
                className="w-full px-4 py-3 border bg-red-50 border-red-600 rounded-lg outline-none transition-colors focus:border-red-500 focus:bg-red-100 hover:border-red-400 focus:ring-red-200"
              />
            </div>

            {/* Adults */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Adults
              </label>
              <div className="relative">
                <select
                  name="adults"
                  value={formData.adults}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border bg-red-50 border-red-600 rounded-lg outline-none transition-colors focus:border-red-500 focus:bg-red-100 hover:border-red-400 focus:ring-red-200"
                >
                  <option value="">Select</option>
                  <option value="1">1 Adult</option>
                  <option value="2">2 Adults</option>
                  <option value="3">3 Adults</option>
                  <option value="4">4 Adults</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Children */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Children
              </label>
              <div className="relative">
                <select
                  name="children"
                  value={formData.children}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border bg-red-50 border-red-600 rounded-lg outline-none transition-colors focus:border-red-500 focus:bg-red-100 hover:border-red-400 focus:ring-red-200"
                >
                  <option value="">Select</option>
                  <option value="0">0 Children</option>
                  <option value="1">1 Child</option>
                  <option value="2">2 Children</option>
                  <option value="3">3 Children</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-red-600 pointer-events-none" />
              </div>
            </div>

            {/* Check In */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Check in
              </label>
              <div className="relative">
                <input
                  type="date"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border bg-red-50 border-red-600 rounded-lg outline-none transition-colors focus:border-red-500 focus:bg-red-100 hover:border-red-400 focus:ring-red-200"
                />
                <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-red-600 pointer-events-none" />
              </div>
            </div>

            {/* Check Out */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Check out
              </label>
              <div className="relative">
                <input
                  type="date"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border bg-red-50 border-red-600 rounded-lg outline-none transition-colors focus:border-red-500 focus:bg-red-100 hover:border-red-400 focus:ring-red-200"
                />
                <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-red-600 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Next of Kin Section */}
          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-lg font-medium text-gray-800 mb-6">Next of Kin information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Next of Kin Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full name
                </label>
                <input
                  type="text"
                  name="nextOfKinName"
                  value={formData.nextOfKinName}
                  onChange={handleInputChange}
                  placeholder="Next of Kin (full name)"
                  className="w-full px-4 py-3 border bg-red-50 border-red-600 rounded-lg outline-none transition-colors focus:border-red-500 focus:bg-red-100 hover:border-red-400 focus:ring-red-200"
                />
              </div>

              {/* Next of Kin Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    name="nextOfKinCountryCode"
                    value={formData.nextOfKinCountryCode}
                    onChange={handleInputChange}
                    placeholder="+234"
                    className="w-20 px-3 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                  />
                  <input
                    type="tel"
                    name="nextOfKinPhone"
                    value={formData.nextOfKinPhone}
                    onChange={handleInputChange}
                    placeholder="(801) 122-3344"
                    className="w-full px-4 py-3 border bg-red-50 border-red-600 rounded-lg outline-none transition-colors focus:border-red-500 focus:bg-red-100 hover:border-red-400 focus:ring-red-200"
                  />
                </div>
              </div>

              {/* Next of Kin Town/City */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Town/City
                </label>
                <input
                  type="text"
                  name="nextOfKinTownCity"
                  value={formData.nextOfKinTownCity}
                  onChange={handleInputChange}
                  placeholder="Town"
                  className="w-full px-4 py-3 border bg-red-50 border-red-600 rounded-lg outline-none transition-colors focus:border-red-500 focus:bg-red-100 hover:border-red-400 focus:ring-red-200"
                />
              </div>

              {/* Next of Kin Country */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Country
                </label>
                <input
                  type="text"
                  name="nextOfKinCountry"
                  value={formData.nextOfKinCountry}
                  onChange={handleInputChange}
                  placeholder="Country"
                  className="w-full px-4 py-3 border bg-red-50 border-red-600 rounded-lg outline-none transition-colors focus:border-red-500 focus:bg-red-100 hover:border-red-400 focus:ring-red-200"
                />
              </div>
            </div>

            {/* Remark */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Remark
              </label>
              <textarea
                name="remark"
                value={formData.remark}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border bg-red-50 border-red-600 rounded-lg outline-none transition-colors focus:border-red-500 focus:bg-red-100 hover:border-red-400 focus:ring-red-200 resize-none"
                placeholder="Additional information or special requests..."
              />
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-6">
            <button
              onClick={handlePrevious}
              className="flex items-center space-x-2 px-6 py-3 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft size={20} />
              <span>Previous</span>
            </button>

            <button
              onClick={handleNext}
              className="flex items-center space-x-2 px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold"
            >
              <span>Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeReservationPage;