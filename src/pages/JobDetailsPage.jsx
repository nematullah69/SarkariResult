import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Building, 
  MapPin, 
  Users, 
  Calendar, 
  GraduationCap, 
  ExternalLink,
  DollarSign,
  CheckCircle,
  FileText,
  Home,
  ChevronRight,
  Link2
} from 'lucide-react';
import { jobsData } from '../data/jobsData';

const JobDetailsPage = () => {
  const { id } = useParams();
  const job = jobsData.find(j => j.id === id);

  if (!job) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Job Not Found</h2>
          <Link 
            to="/jobs"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Jobs
          </Link>
        </div>
      </div>
    );
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Closed': return 'bg-red-100 text-red-800';
      case 'Coming Soon': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-2">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="flex items-center hover:text-blue-600 transition-colors">
              <Home className="h-4 w-4 mr-1" /> Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/jobs" className="hover:text-blue-600 transition-colors">Jobs</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-800 font-medium truncate">{job.title}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        {/* Back Button */}
        <Link to="/jobs" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 mb-4 transition-colors">
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Jobs</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Job Header */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h1 className="text-xl font-bold text-gray-800 mb-1">{job.title}</h1>
                  <div className="flex items-center space-x-2 text-sm mb-1">
                    <Building className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-700">{job.organization}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-700">{job.location}</span>
                  </div>
                </div>
                <div className="flex flex-col items-end space-y-1">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${getStatusColor(job.status)}`}>{job.status}</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">{job.category}</span>
                </div>
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-blue-600" />
                  <div>
                    <p className="text-xs text-gray-600">Vacancies</p>
                    <p className="font-semibold text-gray-800 text-sm">{job.vacancies}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-4 w-4 text-green-600" />
                  <div>
                    <p className="text-xs text-gray-600">Salary</p>
                    <p className="font-semibold text-gray-800 text-sm">{job.salary}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Job Description */}
            <div className="bg-white rounded-lg shadow-md p-5">
              <h2 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                <FileText className="h-5 w-5 mr-2" /> Job Description 
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">{job.description}</p>
              <div>
                <h3 className="text-md font-semibold text-gray-800 mb-2">Department/Organization</h3>
                <p className="text-gray-700">{job.department}</p>
              </div>
            </div>

            {/* Responsibilities */}
            <div className="bg-white rounded-lg shadow-md p-5">
              <h2 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" /> Key Responsibilities
              </h2>
              <ul className="space-y-1">
                {job.responsibilities.map((r, i) => (
                  <li key={i} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Selection Process */}
            <div className="bg-white rounded-lg shadow-md p-5">
              <h2 className="text-lg font-bold text-gray-800 mb-3">Selection Process</h2>
              <div className="space-y-2">
                {job.selectionProcess.map((step, i) => (
                  <div key={i} className="flex items-start space-x-2">
                    <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded-full min-w-[20px] flex items-center justify-center">{i + 1}</div>
                    <span className="text-gray-700 text-sm">{step}</span>
                  </div>
                ))}
              </div>
            </div>


            {job.eligibility && (
  <div className="mt-6">
    <h3 className="text-lg font-semibold text-blue-600 mb-2">Eligibility</h3>
    <p className="text-gray-700">{job.eligibility}</p>
  </div>
)}


            {/* Vacancy Table */}
{job.vacancy && (
  <div className="bg-white rounded-lg shadow-md p-6 overflow-x-auto">
    <h2 className="text-xl font-bold mb-4 text-center text-green-600">
      {job.examvacancy1}
    </h2>

    <table className="w-full border border-gray-200">
      <thead>
        <tr className="bg-gray-100 text-left">
          <th className="p-3 font-bold text-purple-700">Post Name</th>
          <th className="p-3 font-bold text-purple-700">Category</th>
          <th className="p-3 font-bold text-purple-700">Total</th>
        </tr>
      </thead>

      <tbody>
        {job.vacancy.map((item, index) => (
          <tr key={index} className="border-t hover:bg-gray-50">
            <td className="p-3">{item.postName}</td>
            <td className="p-3">{item.category}</td>
            <td className="p-3">{item.total}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}

{job.Salary && (
  <div className="bg-white rounded-lg shadow-md p-6 overflow-x-auto">
    <h2 className="text-xl font-bold mb-4 text-center text-pink-600">
      Post-wise Salary Structure
    </h2>
    <table className="w-full border border-gray-200">
      <thead>
        <tr className="bg-gray-100 text-left">
          <th className="p-3 font-bold text-purple-700">Post Name</th>
          <th className="p-3 font-bold text-purple-700">Level</th>
          <th className="p-3 font-bold text-purple-700">Initial Pay</th>
        </tr>
      </thead>
      <tbody>
        {job.Salary.map((item, index) => (
          <tr key={index} className="border-t hover:bg-gray-50">
            <td className="p-3">{item.postName}</td>
            <td className="p-3">{item.level}</td>
            <td className="p-3">{item.initialPay}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}

{/* Total Posts */}
{job.vacancies && (
  <div className="bg-white rounded-lg shadow-md p-6">
    <h2 className="text-xl font-bold text-gray-800 mb-4">Total Posts</h2>
    <p className="text-2xl font-bold text-red-600">{job.vacancies}</p>
  </div>
)}

{/* Detailed Salary Section */}
{job.salaryDetails && (
  <div className="bg-white rounded-lg shadow-md p-6 overflow-x-auto">
    <h2 className="text-xl font-bold mb-4 text-center text-pink-600">
    {job.examNameS}
    </h2>
    <table className="w-full border border-gray-200">
      <thead>
        <tr className="bg-gray-100 text-left">
          <th className="p-3 font-bold text-purple-700">Allowance</th>
          <th className="p-3 font-bold text-purple-700">Amount (₹)</th>
        </tr>
      </thead>
      <tbody>
        {job.salaryDetails.map((item, index) => (
          <tr key={index} className="border-t hover:bg-gray-50">
            <td className="p-3 font-semibold">{item.allowance}</td>
            <td className="p-3">{item.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}



             {/* Importantdate */}
            {job.importantDates && (
  <div className="bg-white rounded-lg shadow-md p-6">
    <h2 className="text-xl font-bold text-gray-800 mb-4">Important Dates</h2>
    <ul className="space-y-2 text-gray-700">
      {Object.entries(job.importantDates).map(([key, value]) => (
        <li key={key} className="flex justify-between border-b py-1">
          <span className="capitalize">
            {key
              .replace(/([A-Z])/g, " $1") // CamelCase → "Camel Case"
              .replace(/^./, (str) => str.toUpperCase())}:
          </span>
          <span className="font-medium">{value}</span>
        </li>
      ))}
    </ul>
  </div>
)}

{/* Application Fee Section */}
{job.applicationFee && (
  <div className="bg-white rounded-lg shadow-md p-6 overflow-x-auto">
    <h2 className="text-xl font-bold mb-4 text-center text-pink-600">
      Application Fee
    </h2>
    <table className="w-full border border-gray-200">
      <thead>
        <tr className="bg-gray-100 text-left">
          <th className="p-3 font-bold text-purple-700">Category</th>
          <th className="p-3 font-bold text-purple-700">Fee (₹)</th>
        </tr>
      </thead>
      <tbody>
        {job.applicationFee.map((item, index) => (
          <tr key={index} className="border-t hover:bg-gray-50">
            <td className="p-3">{item.category}</td>
            <td className="p-3">{item.fee}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p className="text-gray-600 mt-3 text-sm">
      Pay the Examination Fee through Credit Card, Debit Card, Net Banking, 
      or Offline through E-Challan.
    </p>
  </div>
)}


              {/* Important Links */}
              <div className="bg-white rounded-lg shadow-md p-5">
              <h3 className="text-md font-bold text-gray-800 mb-3 flex items-center">
                <Link2 className="h-5 w-5 mr-2" /> Important Links
              </h3>
              <div className="space-y-2 text-sm">
                {job.importantLinks && job.importantLinks.length > 0 ? (
                  job.importantLinks.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between bg-blue-50 hover:bg-blue-100 text-blue-700 px-3 py-2 rounded-md transition-colors"
                    >
                      <span>{link.label}</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  ))
                ) : (
                  <p className="text-gray-600">No links available</p>
                )}
              </div>
            </div>



            
          
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Important Dates */}
            <div className="bg-white rounded-lg shadow-md p-5">
              <h3 className="text-md font-bold text-gray-800 mb-3 flex items-center">
                <Calendar className="h-5 w-5 mr-2" /> Important Dates
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-gray-600">Application Start</p>
                  <p className="font-semibold text-gray-800">{job.applicationStart}</p>
                </div>
                <div>
                  <p className="text-gray-600">Application End</p>
                  <p className="font-semibold text-red-600">{job.applicationEnd}</p>
                </div>
                <div>
                  <p className="text-gray-600">Published Date</p>
                  <p className="font-semibold text-gray-800">{job.publishedDate}</p>
                </div>
              </div>
            </div>

    

         
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsPage;
