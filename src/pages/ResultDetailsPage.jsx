import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Building, 
  Calendar, 
  FileText, 
  ExternalLink,
  Download,
  Home,
  ChevronRight,
  Award
} from 'lucide-react';
import { resultsData } from '../data/resultsData';


const ResultDetailsPage = () => {
  const { id } = useParams();
  const result = resultsData.find(r => r.id === id);

  if (!result) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Result Not Found</h2>
          <Link 
            to="/results"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Results
          </Link>
        </div>
      </div>
    );
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Published': return 'bg-green-100 text-green-800';
      case 'Awaited': return 'bg-yellow-100 text-yellow-800';
      case 'Updated': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link 
              to="/"
              className="flex items-center hover:text-blue-600 transition-colors"
            >
              <Home className="h-4 w-4 mr-1" />
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link 
              to="/results"
              className="hover:text-blue-600 transition-colors"
            >
              Results
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-800 font-medium truncate">{result.examName}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link 
          to="/results"
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 mb-6 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Results</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">{result.examName}</h1>
              <div className="flex items-center space-x-2 mb-2">
                <Building className="h-5 w-5 text-gray-500" />
                <span className="text-gray-700">{result.organization}</span>
              </div>
              <p className="text-gray-600 mb-3">{result.department}</p>
              <div className="flex items-center space-x-2">
                <span className={`text-sm font-medium px-3 py-1 rounded-full ${getStatusColor(result.status)}`}>
                  {result.status}
                </span>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  {result.category}
                </span>
              </div>
            </div>


   {/* importantDates */}

   {result.importantDates && (
  <div className="bg-white rounded-lg shadow-md p-6">
    <h2 className="text-xl font-bold text-gray-800 mb-4">Important Dates</h2>
    <ul className="space-y-2 text-gray-700">
      {Object.entries(result.importantDates).map(([key, value]) => (
        <li key={key} className="flex justify-between border-b py-1">
          <span className="capitalize">
            {key
              .replace(/([A-Z])/g, " $1") // CamelCase ko "Camel Case" banata hai
              .replace(/^./, (str) => str.toUpperCase())}:
          </span>
          <span className="font-medium">{value}</span>
        </li>
      ))}
    </ul>
    Applicants should verify the details from the official website before proceeding.
  </div>
)}


{/* Application Fee Section */}
{result.applicationFee && (
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
        {result.applicationFee.map((item, index) => (
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



{/* Total Posts */}
{result.totalPosts && (
  <div className="bg-white rounded-lg shadow-md p-6">
    <h2 className="text-xl font-bold text-gray-800 mb-4">Total Posts</h2>
    <p className="text-2xl font-bold text-red-600">{result.totalPosts}</p>
  </div>
)}


     {/* Salary */}

   
   {result.Salary && (
  <div className="bg-white rounded-lg shadow-md p-6 overflow-x-auto">
    <h2 className="text-xl font-bold mb-4 text-center text-pink-600">
    Post-wise Salary Structure
    </h2>
    <table className="w-full border border-gray-200">
      <thead>
        <tr className="bg-gray-100 text-left">
          <th className="p-3 font-bold text-purple-700">Post Name</th>
          <th className="p-2.8 font-bold text-purple-700">Level </th>
          <th className="p-3 font-bold text-purple-700">Initial Pay</th>
        </tr>
      </thead>
      <tbody>
        {result.Salary.map((item, index) => (
          <tr key={index} className="border-t hover:bg-gray-50">
            <td className="p-3">{item.postName}</td>
            <td className="p-3">{item.level}</td>
            <td className="p-3">{item.initialPay}</td>
          </tr>
        ))}
      </tbody>
    </table>
    For detailed post-wise salary and allowances, please refer to the official notification
  </div>
)}


{/* Detailed Salary Section */}
{result.salaryDetails && (
  <div className="bg-white rounded-lg shadow-md p-6 overflow-x-auto">
    <h2 className="text-xl font-bold mb-4 text-center text-pink-600">
    {result.examNameS}
    </h2>
    <table className="w-full border border-gray-200">
      <thead>
        <tr className="bg-gray-100 text-left">
          <th className="p-3 font-bold text-purple-700">Allowance</th>
          <th className="p-3 font-bold text-purple-700">Amount (₹)</th>
        </tr>
      </thead>
      <tbody>
        {result.salaryDetails.map((item, index) => (
          <tr key={index} className="border-t hover:bg-gray-50">
            <td className="p-3 font-semibold">{item.allowance}</td>
            <td className="p-3">{item.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
    For complete details, refer to the official exam notification 2025
  </div>
)}




{/* Vacancy Table */}


{result.vacancy && (
  <div className="bg-white rounded-lg shadow-md p-6 overflow-x-auto">
    <h2 className="text-xl font-bold mb-4 text-center text-green-600">
      {result.examvacancy}
    </h2>
    <table className="w-full border border-gray-200">
      <thead>
  <tr className="bg-gray-100 text-left">
    {Object.keys(result.vacancy[0]).map((key, index) => (
      <th key={index} className="p-3 font-bold text-purple-700">
        {key === "postName"
          ? "Post Name"
          : key === "category"
          ? "Category"
          : key === "total"
          ? "Total"
          : key === "eligibility"
          ? "Eligibility"
          : key}
      </th>
    ))}
  </tr>
</thead>

      <tbody>
        {result.vacancy.map((item, index) => (
          <tr key={index} className="border-t hover:bg-gray-50">
            <td className="p-3">{item.postName}</td>
            {item.category && ( <td className="p-3">{item.category}</td>)}
            <td className="p-3">{item.total}</td>
            <td className="p-3">{item.eligibility}</td>
          </tr>
        ))}
      </tbody>
    </table>
    For complete details, refer to the official exam notification 
  </div>
)}







            {/* Cutoff Information */}
            {result.cutoff && (
  <div className="bg-white rounded-lg shadow-md p-6 overflow-x-auto">
    <h2 className="text-xl font-bold  mb-4 text-center text-pink-600">
    Category-wise Cut Off
    </h2>
    <table className="w-full border border-gray-200">
      <thead>
        <tr className="bg-gray-100 text-left">
          <th className="p-3 font-bold text-purple-700">Category</th>
          <th className="p-3 font-bold text-purple-700"> Cut-off </th>
        </tr>
      </thead>
      <tbody>
        {result.cutoff.map((item, index) => (
          <tr key={index} className="border-t hover:bg-gray-50">
            <td className="p-3">{item.category}</td>
            <td className="p-3">{item.range}</td>
          </tr>
        ))}
      </tbody>
    </table>
    For complete details, refer to the official exam result 
  </div>
)}





            {/* Result Details */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <FileText className="h-5 w-5 mr-2" />
                Result Details
              </h2>
              <p className="text-gray-700 leading-relaxed">{result.resultDetails}</p>
            </div>
            
 {/* RRB Zone Wise Result Section */}

 {result.rrbResultsData && (
        <>
          <h2 className="text-xl font-semibold mt-6 mb-2">
             RRB Zone Wise Results
          </h2>
          <table className="w-full border border-gray-300 text-left">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-3 py-2">RRB Zone</th>
                <th className="border px-3 py-2">Exam</th>
                <th className="border px-3 py-2">Status</th>
                <th className="border px-3 py-2">Links</th>
              </tr>
            </thead>
            <tbody>
              {result.rrbResultsData.map((zone, idx) => (
                <tr key={idx}>
                  <td className="border px-3 py-2">{zone.name}</td>
                  <td className="border px-3 py-2">{zone.exam}</td>
                  <td className="border px-3 py-2">{zone.status}</td>
                  <td className="border px-3 py-2">
                    {zone.statusLink ? (
                      <a
                        href={zone.statusLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        Download Result
                      </a>
                    ) : (
                      "Not Available"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
          )}

            {/* Important Links */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Important Links</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                  href={result.downloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  <Download className="h-5 w-5" />
                  <span>Download Result</span>
                </a>
                <a
                  href={result.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-3 bg-green-600 text-white px-6 py-4 rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  <ExternalLink className="h-5 w-5" />
                  <span>Official Website</span>
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Information</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-600">Category</p>
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2 py-1 rounded-full">
                    {result.category}
                  </span>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Organization</p>
                  <p className="font-semibold text-gray-800">{result.organization}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Status</p>
                  <span className={`text-sm font-medium px-2 py-1 rounded-full ${getStatusColor(result.status)}`}>
                    {result.status}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            {/* <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-medium text-blue-800 mb-3">Quick Actions</h4>
              <div className="space-y-2">
                <a
                  href={result.downloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium text-center"
                >
                  Download Result
                </a>
                <a
                  href={result.officialWebsite}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium text-center"
                >
                  Official Website
                </a>
              </div>
            </div> */}
           
           


          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultDetailsPage;


