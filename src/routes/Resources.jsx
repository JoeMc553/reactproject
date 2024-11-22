import React from 'react'
import Navbar from '../components/Navbar'
import {GraduationCap, Book, Video, FileText, Globe, Calculator, Beaker, Users, Calendar } from 'lucide-react'

const resources = [
  {
    category: 'campus',
    icon: <GraduationCap className="h-6 w-6" />,
    links: [
      { title: 'University Career Center', url: 'https://www.depts.ttu.edu/careercenter/' },
      { title: 'Academic Support', url: 'https://www.ttu.edu/majors-and-colleges/academic-support.php' },
      { title: 'Writing Center', url: 'https://www.depts.ttu.edu/provost/uwc/' },
    ],
  },
  {
    category: 'Online Courses',
    icon: <Globe className="h-6 w-6" />,
    links: [
      { title: 'Coursera', url: 'https://www.coursera.org/' },
      { title: 'edX', url: 'https://www.edx.org/' },
      { title: 'figma', url: 'https://www.figma.com/' },
    ],
  },
  {
    category: 'Textbooks',
    icon: <Book className="h-6 w-6" />,
    links: [
      { title: 'OpenStax', url: 'https://openstax.org/' },
      { title: 'Project Gutenberg', url: 'https://www.gutenberg.org/' },
      { title: 'LibreTexts', url: 'https://libretexts.org/' },
    ],
  },
  {
    category: 'Video Tutorials',
    icon: <Video className="h-6 w-6" />,
    links: [
      { title: 'MIT OpenCourseWare', url: 'https://ocw.mit.edu/' },
      { title: 'TED-Ed', url: 'https://ed.ted.com/' },
    ],
  },
  {
    category: 'Practice Problems',
    icon: <FileText className="h-6 w-6" />,
    links: [
      { title: 'LeetCode', url: 'https://leetcode.com/' },
      { title: 'Project Euler', url: 'https://projecteuler.net/' },
      { title: 'HackerRank', url: 'https://www.hackerrank.com/' },
    ],
  },
  {
    category: 'Study Tools',
    icon: <Calculator className="h-6 w-6" />,
    links: [
      { title: 'Wolfram Alpha', url: 'https://www.wolframalpha.com/' },
      { title: 'Desmos Graphing Calculator', url: 'https://www.desmos.com/calculator' },
      { title: 'Quizlet', url: 'https://quizlet.com/' },
      { title: 'Notion', url: 'https://www.notion.so/' },

    ],
  },
  {
    category: 'Research Databases',
    icon: <Beaker className="h-6 w-6" />,
    links: [
      { title: 'Google Scholar', url: 'https://scholar.google.com/' },
      { title: 'JSTOR', url: 'https://www.jstor.org/' },
      { title: 'PubMed', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
      { title: 'Web of Science', url: 'https://mjl.clarivate.com/home' },
    ],
  },
  {
    category: 'campus',
    icon: <GraduationCap className="h-6 w-6" />,
    links: [
      { title: 'University Career Center', url: 'https://www.depts.ttu.edu/careercenter/' },
      { title: 'Academic Support', url: 'https://www.ttu.edu/majors-and-colleges/academic-support.php' },
      { title: 'Writing Center', url: 'https://www.depts.ttu.edu/provost/uwc/' },
    ],
  },
  {
    category: 'Academic Calendar',
    icon: <Calendar className="h-6 w-6" />,
    links: [
      { title: 'Exam Schedules', url: 'https://www.depts.ttu.edu/officialpublications/class_schedule/final_exams.php' },
      
      { title: 'ttu calendar', url: 'https://www.depts.ttu.edu/parentrelations/resources/1pagecalendarenglish2425.pdf' },
    ],
  },
]



const Resources = () => {
  return (
    <div>
      <Navbar/>
      <div className="min-h-screen bg-white-100 py-8 px-4 sm:px-6 lg:px-4 mb-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center bg-white py-1 ">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Student Resources</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((category, index) => (
            <div key={index} className="bg-white overflow-hidden shadow rounded-lg">
              <div className=" bg-[var(--primaryB-light)] px-4 py-5 sm:p-6">
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h2 className="ml-3 text-lg font-medium text-gray-900">{category.category}</h2>
                </div>
                <ul className="space-y-3">
                  {category.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.url}
                        className="text-blue-600 hover:text-blue-800 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
      </div>
  )
}

export default Resources