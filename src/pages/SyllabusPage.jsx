import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Search, Calendar } from "lucide-react";
import { syllabusData } from "../data/syllabusData";

const SyllabusPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSyllabi = syllabusData.filter((s) =>
    s.examName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-[80vh] bg-gray-50">
      {/* Header */}
      <div className="bg-blue-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-3 mb-1">
            <BookOpen className="h-6 w-6" />
            <h1 className="text-2xl font-bold">Syllabus Portal</h1>
          </div>
          <p className="text-blue-200 text-sm">
            Download detailed syllabus for government & competitive exams
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-6 flex justify-center">
        <div className="w-full max-w-4xl">
          <h1 className="text-2xl font-bold text-blue-800 mb-2 text-center">
            Examination Syllabus
          </h1>

          {/* Search */}
          <div className="bg-white p-4 rounded-lg shadow-md mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by exam name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg 
                           focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                           pl-8 text-sm"
              />
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            </div>
          </div>

          {/* Syllabus List */}
          <div className="space-y-4">
            {filteredSyllabi.map((syllabus) => (
              <div
                key={syllabus.id}
                className="bg-white rounded-lg shadow-md p-5 flex items-center justify-between hover:shadow-lg transition-shadow"
              >
                {/* Exam Info */}
                <Link to={`/syllabus/${syllabus.id}`} className="flex-1">
                  <h3 className="text-blue-700 font-semibold text-sm mb-2 hover:underline">
                    {syllabus.examName}
                  </h3>
                  <div className="flex items-center text-xs text-gray-600">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>Year: {syllabus.year}</span>
                  </div>
                </Link>

                {/* Button */}
                <Link
                  to={`/syllabus/${syllabus.id}`}
                  className="ml-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-xs font-medium"
                >
                  View Syllabus
                </Link>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredSyllabi.length === 0 && (
            <div className="text-center py-12 text-sm text-gray-500">
              <BookOpen className="h-12 w-12 mx-auto mb-2 text-gray-400" />
              <h3 className="font-medium mb-1">No syllabus found</h3>
              <p>Try searching with another keyword.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SyllabusPage;
