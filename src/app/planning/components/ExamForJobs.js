import React, { useState } from "react";
import { Search, BookOpen, Filter } from "lucide-react";
import { DataCompetitiveExams } from "@/app/data/CompititiveExam";

const CompetitiveExamsDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedExam, setSelectedExam] = useState(null);

  const competitiveExams = DataCompetitiveExams;
  const filteredExams = competitiveExams.filter((exam) =>
    exam.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-blue-50 font-sans">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
            Competitive Exams Guide
          </h1>
          <p className="text-blue-600 max-w-2xl mx-auto">
            Your comprehensive resource for competitive exam preparation
          </p>
        </header>

        {/* Search and Filter Section */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search exams..."
              className="w-full p-3 pl-10 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" />
          </div>
        </div>

        {/* Exam List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExams.map((exam) => (
            <div
              key={exam.name}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedExam(exam)}
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-blue-800">
                    {exam.name}
                  </h2>
                  <BookOpen className="text-blue-500" />
                </div>
                <p className="text-blue-600 mb-4 line-clamp-3">
                  {exam.description}
                </p>
                <div className="flex items-center text-blue-700">
                  <Filter className="mr-2" size={16} />
                  <span className="text-sm">Click to view details</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Exam Details */}
        {selectedExam && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
              <div className="p-6 bg-blue-800 text-white rounded-t-lg">
                <h2 className="text-2xl font-bold">{selectedExam.name}</h2>
                <p className="text-blue-200">{selectedExam.fullForm}</p>
              </div>
              <div className="p-6">
                <section className="mb-6">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">
                    Description
                  </h3>
                  <p className="text-blue-700">{selectedExam.description}</p>
                </section>

                <section className="mb-6">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">
                    Resources
                  </h3>
                  <ul className="list-disc list-inside text-blue-700">
                    {selectedExam.resources.map((resource, index) => (
                      <li key={index} className="mb-2">
                        {resource}
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">
                    Preparation Tips
                  </h3>
                  <ul className="list-disc list-inside text-blue-700">
                    {selectedExam.tips.map((tip, index) => (
                      <li key={index} className="mb-2">
                        {tip}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
              <div className="p-4 bg-blue-50 text-right">
                <button
                  onClick={() => setSelectedExam(null)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompetitiveExamsDashboard;
