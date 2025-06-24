// src/components/Financing.jsx

import React, { useState } from 'react';
import {
  Calculator,
  DollarSign,
  CreditCard,
  FileText,
  TrendingUp,
  Shield,
  Clock
} from 'lucide-react';

// Vite env var or fallback, without trailing slash
const API_BASE = import.meta.env.VITE_API_URL?.replace(/\/+$/, '') || 'http://localhost:5000/api/v1';

const zipRegex = /^[0-9]{5}(?:-[0-9]{4})?$/;
const emailRegex = /^\S+@\S+\.\S+$/;
const phoneRegex = /^\+?[0-9]{7,15}$/;

const Financing = () => {
  // --- Calculator state ---
  const [loanAmount, setLoanAmount]     = useState(20000);
  const [downPayment, setDownPayment]   = useState(2000);
  const [tradeValue, setTradeValue]     = useState(0);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm]         = useState(60);

  const calculatePayment = () => {
    const principal   = loanAmount - downPayment - tradeValue;
    const monthlyRate = interestRate / 100 / 12;
    return (
      principal *
      (monthlyRate * Math.pow(1 + monthlyRate, loanTerm)) /
      (Math.pow(1 + monthlyRate, loanTerm) - 1)
    );
  };
  const monthlyPayment = calculatePayment();

  // --- Pre-Approval form state ---
  const [firstName, setFirstName]           = useState('');
  const [lastName, setLastName]             = useState('');
  const [email, setEmail]                   = useState('');
  const [phone, setPhone]                   = useState('');
  const [annualIncome, setAnnualIncome]     = useState('');
  const [employmentStatus, setEmploymentStatus] = useState('');
  const [street, setStreet]                 = useState('');
  const [city, setCity]                     = useState('');
  const [stateCode, setStateCode]           = useState('');
  const [zipCode, setZipCode]               = useState('');
  const [errors, setErrors]                 = useState({});
  const [submitting, setSubmitting]         = useState(false);

  // Frontend validation
  const validate = () => {
    const errs = {};
    if (!firstName.trim() || firstName.trim().length < 2) {
      errs.firstName = 'First name must be at least 2 characters.';
    }
    if (!lastName.trim() || lastName.trim().length < 2) {
      errs.lastName = 'Last name must be at least 2 characters.';
    }
    if (!emailRegex.test(email.trim())) {
      errs.email = 'Please enter a valid email.';
    }
    if (!phoneRegex.test(phone.trim())) {
      errs.phone = 'Please enter a valid phone number.';
    }
    if (
      annualIncome === '' ||
      isNaN(Number(annualIncome)) ||
      Number(annualIncome) <= 0
    ) {
      errs.annualIncome = 'Annual income must be a positive number.';
    }
    if (!employmentStatus) {
      errs.employmentStatus = 'Employment status is required.';
    }
    if (!street.trim()) {
      errs.street = 'Street address is required.';
    }
    if (!city.trim()) {
      errs.city = 'City is required.';
    }
    if (!stateCode.trim() || stateCode.trim().length < 2) {
      errs.stateCode = 'State code must be at least 2 characters.';
    }
    if (!zipRegex.test(zipCode.trim())) {
      errs.zipCode = 'Please enter a valid ZIP code (e.g. 90210).';
    }
    return errs;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setSubmitting(true);

    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      setSubmitting(false);
      return;
    }
    setErrors({});

    const payload = {
      firstName,
      lastName,
      email,
      phone,
      annualIncome: Number(annualIncome),
      employmentStatus,
      address: { street, city, state: stateCode, zipCode }
    };

    console.log('📤 Sending payload to:', `${API_BASE}/preapprovals`, payload);

    try {
      const res = await fetch(`${API_BASE}/preapprovals`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const contentType = res.headers.get('content-type') || '';
      let body;
      if (contentType.includes('application/json')) {
        body = await res.json();
      } else {
        const text = await res.text();
        console.error('🛑 Non-JSON response from server:', text);
        throw new Error(`Server returned HTML/text instead of JSON:\n${text}`);
      }

      if (!res.ok) {
        throw new Error(typeof body === 'string' ? body : body.error || JSON.stringify(body));
      }

      alert('✅ Pre-approval submitted successfully!');
      // clear form
      setFirstName(''); setLastName('');
      setEmail(''); setPhone('');
      setAnnualIncome(''); setEmploymentStatus('');
      setStreet(''); setCity(''); setStateCode(''); setZipCode('');
    } catch (err) {
      console.error('🔥 Submission error:', err);
      alert(`❌ Error: ${err.message}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-900 via-slate-900 to-green-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Auto Financing</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Get pre-approved and calculate your payments with our easy tools
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12">
        {/* Payment Calculator */}
        <div className="bg-white rounded-2xl shadow-lg p-10">
          <div className="flex items-center mb-8">
            <div className="bg-blue-100 p-3 rounded-xl mr-4">
              <Calculator className="h-8 w-8 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Payment Calculator</h2>
          </div>
          <div className="space-y-8">
            {/* Loan Amount */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Vehicle Price: ${loanAmount.toLocaleString()}
              </label>
              <input
                type="range"
                min="5000"
                max="80000"
                step="1000"
                value={loanAmount}
                onChange={e => setLoanAmount(+e.target.value)}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>$5,000</span>
                <span>$80,000</span>
              </div>
            </div>
            {/* Down Payment */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Down Payment: ${downPayment.toLocaleString()}
              </label>
              <input
                type="range"
                min="0"
                max="20000"
                step="500"
                value={downPayment}
                onChange={e => setDownPayment(+e.target.value)}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>$0</span>
                <span>$20,000</span>
              </div>
            </div>
            {/* Trade-In Value */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Trade-In Value: ${tradeValue.toLocaleString()}
              </label>
              <input
                type="range"
                min="0"
                max="30000"
                step="1000"
                value={tradeValue}
                onChange={e => setTradeValue(+e.target.value)}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>$0</span>
                <span>$30,000</span>
              </div>
            </div>
            {/* Interest Rate */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Interest Rate: {interestRate}%
              </label>
              <input
                type="range"
                min="2"
                max="15"
                step="0.5"
                value={interestRate}
                onChange={e => setInterestRate(+e.target.value)}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>2%</span>
                <span>15%</span>
              </div>
            </div>
            {/* Loan Term */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Loan Term: {loanTerm} months
              </label>
              <select
                value={loanTerm}
                onChange={e => setLoanTerm(+e.target.value)}
                className="w-full p-4 border rounded-xl"
              >
                {[36, 48, 60, 72, 84].map(n => (
                  <option key={n} value={n}>
                    {n} months ({n / 12} years)
                  </option>
                ))}
              </select>
            </div>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-8 text-center">
              <DollarSign className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-lg font-semibold text-blue-800 mb-1">
                Estimated Monthly Payment
              </div>
              <div className="text-5xl font-bold text-blue-900 mb-2">
                ${isNaN(monthlyPayment) ? '0' : monthlyPayment.toFixed(0)}
              </div>
              <div className="text-lg text-blue-600">
                Total financed: ${(loanAmount - downPayment - tradeValue).toLocaleString()}
              </div>
            </div>
          </div>
        </div>

        {/* Pre-Approval Form */}
        <div className="bg-white rounded-2xl shadow-lg p-10">
          <div className="flex items-center mb-8">
            <div className="bg-green-100 p-3 rounded-xl mr-4">
              <FileText className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Get Pre-Approved</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* First / Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                  className="w-full p-4 border rounded-xl"
                  placeholder="Enter first name"
                />
                {errors.firstName && (
                  <p className="text-red-600 text-sm mt-1">{errors.firstName}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                  className="w-full p-4 border rounded-xl"
                  placeholder="Enter last name"
                />
                {errors.lastName && (
                  <p className="text-red-600 text-sm mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full p-4 border rounded-xl"
                placeholder="Enter email address"
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm	font-semibold text-gray-700 mb-2">
                Phone
              </label>
              <input
                type="tel"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                className="w-full p-4 border rounded-xl"
                placeholder="Enter phone number"
              />
              {errors.phone && (
                <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            {/* Income / Employment */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Annual Income
                </label>
                <input
                  type="number"
                  min="0"
                  value={annualIncome}
                  onChange={e => setAnnualIncome(e.target.value)}
                  className="w-full p-4 border rounded-xl"
                  placeholder="Enter annual income"
                />
                {errors.annualIncome && (
                  <p className="text-red-600 text-sm mt-1">{errors.annualIncome}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Employment Status
                </label>
                <select
                  value={employmentStatus}
                  onChange={e => setEmploymentStatus(e.target.value)}  
                  className="w-full p-4 border rounded-xl"
                >
                  <option value="">Select status</option>
                  <option>Full-time Employee</option>
                  <option>Part-time Employee</option>
                  <option>Self-employed</option>
                  <option>Student</option>
                  <option>Retired</option>
                  <option>Military</option>
                </select>
                {errors.employmentStatus && (
                  <p className="text-red-600 text-sm mt-1">{errors.employmentStatus}</p>
                )}
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Street Address
              </label>
              <input
                type="text"
                value={street}
                onChange={e => setStreet(e.target.value)}
                className="w-full p-4 border rounded-xl"
                placeholder="Enter street address"
              />
              {errors.street && (
                <p className="text-red-600 text-sm mt-1">{errors.street}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  City
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={e => setCity(e.target.value)}
                  className="w-full p-4 border rounded-xl"
                  placeholder="City"
                />
                {errors.city && (
                  <p className="text-red-600 text-sm mt-1">{errors.city}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  State
                </label>
                <input
                  type="text"
                  value={stateCode}
                  onChange={e => setStateCode(e.target.value)}
                  className="w-full p-4 border rounded-xl"
                  placeholder="State code"
                />
                {errors.stateCode && (
                  <p className="text-red-600 text-sm mt-1">{errors.stateCode}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">ZIP Code</label>
                <input
                  type="text"
                  value={zipCode}
                  onChange={e => setZipCode(e.target.value)}
                  className="w-full p-4 border rounded-xl"
                  placeholder="90210 or 90210-1234"
                />
                {errors.zipCode && (
                  <p className="text-red-600 text-sm mt-1">{errors.zipCode}</p>
                )}
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={submitting}
              className={`w-full py-5 rounded-xl font-semibold flex items-center justify-center text-lg transition-transform duration-300
                ${
                  submitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-green-600 to-green-700 hover:scale-105'
                } text-white shadow-lg hover:shadow-xl`}
            >
              <CreditCard className="h-6 w-6 mr-3" />
              {submitting ? 'Submitting...' : 'Apply for Pre-Approval'}
            </button>
          </form>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="mt-20 bg-white rounded-2xl shadow-lg p-12">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Why Get Pre-Approved?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-center group">
            <div className="bg-green-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Know Your Budget</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Get a clear picture of what you can afford before you shop, making the process stress-free
            </p>
          </div>
          <div className="text-center group">
            <div className="bg-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Shield className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Negotiate Better</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Pre-approval gives you negotiating power at the dealership and shows you're a serious buyer
            </p>
          </div>
          <div className="text-center group">
            <div className="bg-purple-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <Clock className="h-10 w-10 text-purple-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Save Time</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Streamline the buying process with pre-approved financing and drive home faster
            </p>
          </div>
        </div>
      </div>

      {/* Financing Options */}
      <div className="mt-20 bg-gradient-to-r from-blue-900 via-slate-900 to-green-900 text-white rounded-3xl p-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">Financing Options Available</h2>
          <p className="text-xl text-gray-200">We work with multiple lenders to get you the best rates</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">2.9%</div>
            <div className="text-gray-200">Starting APR</div>
            <div className="text-sm text-gray-300 mt-1">For qualified buyers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">84</div>
            <div className="text-gray-200">Max Months</div>
            <div className="text-sm text-gray-300 mt-1">Extended terms available</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">$0</div>
            <div className="text-gray-200">Down Payment</div>
            <div className="text-sm text-gray-300 mt-1">Options available</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">24hr</div>
            <div className="text-gray-200">Approval Time</div>
            <div className="text-sm text-gray-300 mt-1">Fast processing</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Financing;
