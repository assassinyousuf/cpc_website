import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { bloodService } from "../lib/appwriteService";
import { useAuth } from "../hooks/useAuth";

const BloodDonation = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("donate");
  const [loading, setLoading] = useState(false);
  const [donors, setDonors] = useState([]);
  const [donationRequests, setDonationRequests] = useState([]);
  const [selectedBloodGroup, setSelectedBloodGroup] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bloodGroup: "",
    lastDonation: "",
    medicalConditions: "",
    location: ""
  });
  const [requestForm, setRequestForm] = useState({
    name: "",
    phone: "",
    bloodGroup: "",
    units: 1,
    hospital: "",
    urgency: "medium",
    reason: ""
  });

  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

  // Load data when component mounts
  useEffect(() => {
    loadDonors();
    loadBloodRequests();
  }, []);

  const loadDonors = async (bloodGroup = null) => {
    try {
      setLoading(true);
      const donorList = await bloodService.getDonors(bloodGroup);
      setDonors(donorList);
    } catch (error) {
      console.error('Failed to load donors:', error);
      setDonors([]);
    } finally {
      setLoading(false);
    }
  };

  const loadBloodRequests = async () => {
    try {
      setLoading(true);
      const requests = await bloodService.getRequests("active");
      setDonationRequests(requests);
    } catch (error) {
      console.error('Failed to load requests:', error);
      setDonationRequests([]);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRequestInputChange = (e) => {
    setRequestForm({
      ...requestForm,
      [e.target.name]: e.target.value
    });
  };

  const handleRegisterDonor = async (e) => {
    e.preventDefault();
    if (!user) {
      alert('Please login to register as a donor');
      return;
    }
    
    try {
      setLoading(true);
      await bloodService.registerDonor({
        userId: user.id,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        bloodGroup: formData.bloodGroup,
        lastDonation: formData.lastDonation,
        medicalConditions: formData.medicalConditions,
        location: formData.location
      });
      
      alert('Successfully registered as blood donor!');
      setFormData({
        name: user.name || "",
        email: user.email || "",
        phone: "",
        bloodGroup: "",
        lastDonation: "",
        medicalConditions: "",
        location: ""
      });
      loadDonors();
    } catch (error) {
      console.error('Failed to register donor:', error);
      alert('Failed to register as donor. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateRequest = async (e) => {
    e.preventDefault();
    if (!user) {
      alert('Please login to create a blood request');
      return;
    }
    
    try {
      setLoading(true);
      await bloodService.createRequest({
        userId: user.id,
        name: requestForm.name,
        phone: requestForm.phone,
        bloodGroup: requestForm.bloodGroup,
        units: parseInt(requestForm.units),
        hospital: requestForm.hospital,
        urgency: requestForm.urgency,
        reason: requestForm.reason
      });
      
      alert('Blood request created successfully!');
      setRequestForm({
        name: "",
        phone: "",
        bloodGroup: "",
        units: 1,
        hospital: "",
        urgency: "medium",
        reason: ""
      });
      loadBloodRequests();
      setActiveTab("requests");
    } catch (error) {
      console.error('Failed to create request:', error);
      alert('Failed to create blood request. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleFilterDonors = (bloodGroup) => {
    setSelectedBloodGroup(bloodGroup);
    loadDonors(bloodGroup || null);
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case "critical": return "badge-error";
      case "urgent": return "badge-warning";
      default: return "badge-success";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-8 font-inter">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">
          <span className="blood-highlight">🩸 Blood Donation Hub</span>
        </h1>
        <p className="text-lg text-gray-300">
          Save lives by donating blood or finding donors in your community
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="stat bg-red-50 rounded-lg">
          <div className="stat-title text-red-600">Total Donors</div>
          <div className="stat-value text-red-700">{donors.length}</div>
          <div className="stat-desc text-red-500">Registered donors</div>
        </div>
        <div className="stat bg-green-50 rounded-lg">
          <div className="stat-title text-green-600">Available</div>
          <div className="stat-value text-green-700">{donors.filter(d => d.status === 'available').length}</div>
          <div className="stat-desc text-green-500">Ready to donate</div>
        </div>
        <div className="stat bg-blue-50 rounded-lg">
          <div className="stat-title text-blue-600">Active Requests</div>
          <div className="stat-value text-blue-700">{donationRequests.length}</div>
          <div className="stat-desc text-blue-500">Need blood now</div>
        </div>
        <div className="stat bg-yellow-50 rounded-lg">
          <div className="stat-title text-yellow-600">Blood Groups</div>
          <div className="stat-value text-yellow-700">{bloodGroups.length}</div>
          <div className="stat-desc text-yellow-500">All types available</div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="tabs tabs-lifted mb-8">
        <button 
          className={`tab tab-lg ${activeTab === "donate" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("donate")}
        >
          🩸 Become a Donor
        </button>
        <button 
          className={`tab tab-lg ${activeTab === "create-request" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("create-request")}
        >
          ➕ Create Request
        </button>
        <button 
          className={`tab tab-lg ${activeTab === "requests" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("requests")}
        >
          🆘 View Requests
        </button>
        <button 
          className={`tab tab-lg ${activeTab === "donors" ? "tab-active" : ""}`}
          onClick={() => setActiveTab("donors")}
        >
          👥 Our Donors
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "donate" && (
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Registration Form */}
          <div className="card bg-gray-800/50 border border-red-500/30 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-red-600 mb-4">Register as Blood Donor</h3>
              <form onSubmit={handleRegisterDonor} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Full Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="input input-bordered"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="input input-bordered"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Phone Number</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="input input-bordered"
                      placeholder="+1234567890"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Blood Group</span>
                    </label>
                    <select
                      name="bloodGroup"
                      value={formData.bloodGroup}
                      onChange={handleInputChange}
                      className="select select-bordered"
                      required
                    >
                      <option value="">Select Blood Group</option>
                      {bloodGroups.map((group) => (
                        <option key={group} value={group}>{group}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Last Blood Donation (if any)</span>
                    </label>
                    <input
                      type="date"
                      name="lastDonation"
                      value={formData.lastDonation}
                      onChange={handleInputChange}
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Location</span>
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="input input-bordered"
                      placeholder="Your area/campus"
                    />
                  </div>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Medical Conditions (if any)</span>
                  </label>
                  <textarea
                    name="medicalConditions"
                    value={formData.medicalConditions}
                    onChange={handleInputChange}
                    className="textarea textarea-bordered"
                    placeholder="List any medical conditions or medications..."
                    rows="3"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className={`btn btn-error w-full ${loading ? 'loading' : ''}`}
                  disabled={loading}
                >
                  {loading ? 'Registering...' : 'Register as Donor'}
                </button>
              </form>
            </div>
          </div>

          {/* Donation Guidelines */}
          <div className="space-y-6">
            <div className="card bg-red-50 shadow-lg">
              <div className="card-body">
                <h3 className="card-title text-red-600">Donation Guidelines</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Age: 18-65 years
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Weight: Minimum 50 kg
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Good health condition
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    3 months gap between donations
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-red-500">✗</span>
                    No recent illness or surgery
                  </li>
                </ul>
              </div>
            </div>

            <div className="card bg-blue-50 shadow-lg">
              <div className="card-body">
                <h3 className="card-title text-blue-600">Blood Compatibility</h3>
                <div className="overflow-x-auto">
                  <table className="table table-xs">
                    <thead>
                      <tr>
                        <th>Blood Group</th>
                        <th>Can Donate To</th>
                        <th>Can Receive From</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="font-bold">O-</td>
                        <td>Everyone</td>
                        <td>O-</td>
                      </tr>
                      <tr>
                        <td className="font-bold">O+</td>
                        <td>O+, A+, B+, AB+</td>
                        <td>O+, O-</td>
                      </tr>
                      <tr>
                        <td className="font-bold">A-</td>
                        <td>A-, A+, AB-, AB+</td>
                        <td>A-, O-</td>
                      </tr>
                      <tr>
                        <td className="font-bold">AB+</td>
                        <td>AB+</td>
                        <td>Everyone</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "create-request" && (
        <div className="max-w-3xl mx-auto">
          <div className="card bg-gray-800/50 border border-red-500/30 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-red-600 mb-4">Create Blood Request</h3>
              <form onSubmit={handleCreateRequest} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white">Patient Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={requestForm.name}
                      onChange={handleRequestInputChange}
                      className="input input-bordered bg-gray-700 text-white"
                      placeholder="Patient name"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white">Contact Phone</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={requestForm.phone}
                      onChange={handleRequestInputChange}
                      className="input input-bordered bg-gray-700 text-white"
                      placeholder="+1234567890"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white">Blood Group</span>
                    </label>
                    <select
                      name="bloodGroup"
                      value={requestForm.bloodGroup}
                      onChange={handleRequestInputChange}
                      className="select select-bordered bg-gray-700 text-white"
                      required
                    >
                      <option value="">Select</option>
                      {bloodGroups.map((group) => (
                        <option key={group} value={group}>{group}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white">Units Needed</span>
                    </label>
                    <input
                      type="number"
                      name="units"
                      value={requestForm.units}
                      onChange={handleRequestInputChange}
                      className="input input-bordered bg-gray-700 text-white"
                      min="1"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white">Urgency</span>
                    </label>
                    <select
                      name="urgency"
                      value={requestForm.urgency}
                      onChange={handleRequestInputChange}
                      className="select select-bordered bg-gray-700 text-white"
                      required
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                      <option value="critical">Critical</option>
                    </select>
                  </div>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Hospital/Location</span>
                  </label>
                  <input
                    type="text"
                    name="hospital"
                    value={requestForm.hospital}
                    onChange={handleRequestInputChange}
                    className="input input-bordered bg-gray-700 text-white"
                    placeholder="Hospital name and location"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-white">Reason/Details</span>
                  </label>
                  <textarea
                    name="reason"
                    value={requestForm.reason}
                    onChange={handleRequestInputChange}
                    className="textarea textarea-bordered bg-gray-700 text-white h-24"
                    placeholder="Why blood is needed, any additional information..."
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-error w-full"
                  disabled={loading}
                >
                  {loading ? 'Creating Request...' : 'Create Blood Request 🆘'}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {activeTab === "requests" && (
        <div>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-red-600">Current Blood Requests</h3>
            <button 
              onClick={() => setActiveTab("create-request")}
              className="btn btn-error"
            >
              + Create Request
            </button>
          </div>

          {loading ? (
            <div className="text-center py-8">
              <span className="loading loading-spinner loading-lg text-error"></span>
            </div>
          ) : donationRequests.length === 0 ? (
            <div className="card bg-gray-800/50 border border-gray-700 p-8 text-center">
              <p className="text-gray-400">No active blood requests at the moment.</p>
              <button 
                onClick={() => setActiveTab("create-request")}
                className="btn btn-error mt-4"
              >
                Create First Request
              </button>
            </div>
          ) : (
            <div className="grid gap-4">
              {donationRequests.map((request) => (
                <div key={request.$id} className="card bg-gray-800/50 border border-red-500/30 shadow-lg">
                  <div className="card-body">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-white">{request.name}</h4>
                        <div className="flex gap-4 text-sm text-gray-300 mt-2">
                          <span>🏥 {request.hospital}</span>
                          <span>📞 {request.phone}</span>
                        </div>
                        <p className="text-sm text-gray-300 mt-2">
                          {request.reason}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          Posted: {new Date(request.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-red-600 mb-1">
                          {request.bloodGroup}
                        </div>
                        <div className={`badge ${getUrgencyColor(request.urgency)}`}>
                          {request.urgency.toUpperCase()}
                        </div>
                        <div className="text-sm text-gray-300 mt-1">
                          {request.units} {request.units > 1 ? 'units' : 'unit'} needed
                        </div>
                      </div>
                    </div>
                    <div className="card-actions justify-end mt-4">
                      <a href={`tel:${request.phone}`} className="btn btn-outline btn-sm text-white">
                        📞 Call
                      </a>
                      <button 
                        className="btn btn-error btn-sm"
                        onClick={() => alert(`Contact: ${request.phone}\nPlease call them directly to arrange donation.`)}
                      >
                        I Can Donate 💉
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {activeTab === "donors" && (
        <div>
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
            <h3 className="text-2xl font-bold text-red-600">Our Hero Donors</h3>
            <div className="flex gap-2 flex-wrap">
              <select 
                className="select select-bordered select-sm bg-gray-700 text-white" 
                value={selectedBloodGroup}
                onChange={(e) => handleFilterDonors(e.target.value)}
              >
                <option value="">All Blood Groups</option>
                {bloodGroups.map((group) => (
                  <option key={group} value={group}>{group}</option>
                ))}
              </select>
              <button 
                onClick={() => handleFilterDonors("")}
                className="btn btn-sm btn-outline text-white"
              >
                Clear Filter
              </button>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-8">
              <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
          ) : donors.length === 0 ? (
            <div className="card bg-gray-800/50 border border-gray-700 p-8 text-center">
              <p className="text-gray-400">
                {selectedBloodGroup 
                  ? `No donors found for blood group ${selectedBloodGroup}` 
                  : 'No donors registered yet. Be the first to register!'}
              </p>
              <button 
                onClick={() => setActiveTab("donate")}
                className="btn btn-error mt-4"
              >
                Register as Donor
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {donors.map((donor) => (
                <div key={donor.$id} className="card bg-gray-800/50 border border-blue-500/30 shadow-lg">
                  <div className="card-body">
                    <div className="flex items-center gap-4">
                      <div className="avatar placeholder">
                        <div className="bg-red-600 text-white rounded-full w-16">
                          <span className="text-2xl">{donor.bloodGroup}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg text-white">{donor.name}</h4>
                        <p className="text-sm text-gray-300">{donor.location}</p>
                        <p className="text-xs text-gray-400">{donor.email}</p>
                      </div>
                    </div>
                    <div className="divider my-2"></div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-gray-400">Status:</span>
                        <div className={`badge badge-sm ml-1 ${donor.status === 'available' ? 'badge-success' : 'badge-warning'}`}>
                          {donor.status}
                        </div>
                      </div>
                      <div>
                        <span className="text-gray-400">Donations:</span>
                        <span className="ml-1 text-white font-semibold">{donor.totalDonations || 0}</span>
                      </div>
                    </div>
                    {donor.lastDonation && (
                      <p className="text-xs text-gray-400 mt-2">
                        Last donation: {new Date(donor.lastDonation).toLocaleDateString()}
                      </p>
                    )}
                    <div className="card-actions justify-end mt-3">
                      <a 
                        href={`mailto:${donor.email}`}
                        className="btn btn-sm btn-outline text-white"
                      >
                        📧 Email
                      </a>
                      <a 
                        href={`tel:${donor.phone}`}
                        className="btn btn-sm btn-error"
                      >
                        📞 Call
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      </div>
    </div>
  );
};

export default BloodDonation;
