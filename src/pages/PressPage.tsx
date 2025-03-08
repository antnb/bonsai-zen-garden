
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SectionTitle from '../components/ui/SectionTitle';
import { ChevronRight, Download, ExternalLink, Calendar, Newspaper } from 'lucide-react';

const PressPage = () => {
  const pressReleases = [
    {
      id: 1,
      title: "Indo Cipanas Bonsai Opens New European Distribution Center in Rotterdam",
      date: "June 15, 2025",
      excerpt: "Indo Cipanas Bonsai announces the opening of a new European distribution center in Rotterdam, Netherlands, to better serve the growing European market for premium bonsai and tropical plants.",
      category: "Company News",
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 2,
      title: "New Sustainability Initiative Launches with Community Reforestation Project",
      date: "May 3, 2025",
      excerpt: "Indo Cipanas Bonsai announces a major sustainability initiative, partnering with local communities in West Java to launch a reforestation project that will plant 10,000 native trees over the next year.",
      category: "Sustainability",
      image: "https://images.unsplash.com/photo-1621704902088-78369b9209a0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 3,
      title: "Record-Breaking Bonsai Shipment Marks Expansion into North American Market",
      date: "April 12, 2025",
      excerpt: "Indo Cipanas Bonsai completes its largest single shipment to date, sending over 200 premium bonsai specimens to a new distribution partner in North America, marking a significant expansion into the region.",
      category: "Business",
      image: "https://images.unsplash.com/photo-1508597370841-2ba2a52b966a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
  ];

  const mediaAppearances = [
    {
      id: 1,
      title: "The Future of Global Plant Trade: Indonesian Exporters Lead the Way",
      publication: "Horticultural Business Journal",
      date: "May 2025",
      type: "Feature Article",
      link: "#",
      logo: "https://via.placeholder.com/100x30?text=HBJ"
    },
    {
      id: 2,
      title: "How Indo Cipanas Bonsai is Revolutionizing Plant Export Logistics",
      publication: "Global Trade Magazine",
      date: "April 2025",
      type: "Interview",
      link: "#",
      logo: "https://via.placeholder.com/100x30?text=GTM"
    },
    {
      id: 3,
      title: "The Art of Bonsai: Indonesian Traditions Meet Global Markets",
      publication: "Fine Gardening",
      date: "March 2025",
      type: "Photo Essay",
      link: "#",
      logo: "https://via.placeholder.com/100x30?text=FineGardening"
    },
    {
      id: 4,
      title: "Exporting Natural Beauty: The Success Story of Indo Cipanas",
      publication: "Asian Entrepreneur",
      date: "February 2025",
      type: "Profile",
      link: "#",
      logo: "https://via.placeholder.com/100x30?text=AE"
    },
  ];

  const companyFactsMilestones = [
    { year: "2005", event: "Founding of Indo Cipanas Bonsai by Bambang Wijaya in Cipanas, West Java" },
    { year: "2010", event: "First international export to Singapore and Malaysia" },
    { year: "2015", event: "Expanded nursery facilities to 5 hectares" },
    { year: "2018", event: "Received CITES certification and began exports to Europe" },
    { year: "2020", event: "Launched tropical plants division" },
    { year: "2022", event: "Established strategic partnerships with botanical gardens in 5 countries" },
    { year: "2024", event: "Reached milestone of 10,000 export-grade bonsai specimens in cultivation" },
    { year: "2025", event: "Opened European distribution center in Rotterdam" },
  ];

  return (
    <div className="pt-24">
      <Navbar />
      <main className="min-h-screen">
        {/* Breadcrumbs */}
        <div className="bg-bonsai-beige/50 py-3">
          <div className="container-custom mx-auto">
            <div className="flex items-center text-sm text-gray-600">
              <Link to="/" className="hover:text-bonsai-dark-green transition-colors">Home</Link>
              <ChevronRight size={14} className="mx-2" />
              <span className="text-bonsai-dark-green font-medium">Press & Media</span>
            </div>
          </div>
        </div>

        <div className="container-custom mx-auto py-12">
          <SectionTitle 
            subtitle="NEWS & MEDIA" 
            title="Press & Media Resources"
            description="Discover the latest news, media coverage, and resources about Indo Cipanas Bonsai."
          />
          
          {/* Media Contact */}
          <div className="bg-bonsai-beige/20 p-8 rounded-lg mt-12">
            <h2 className="font-playfair text-2xl font-bold text-bonsai-dark-green mb-4">Media Contact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-700 mb-4">
                  For press inquiries, interview requests, and additional information, please contact our media relations team:
                </p>
                <div className="space-y-2">
                  <p><span className="font-medium">Contact Person:</span> Maya Suryadi</p>
                  <p><span className="font-medium">Title:</span> Media Relations Manager</p>
                  <p><span className="font-medium">Email:</span> <a href="mailto:press@indocipanasbonsai.com" className="text-bonsai-olive hover:underline">press@indocipanasbonsai.com</a></p>
                  <p><span className="font-medium">Phone:</span> +62 21 5555 8888</p>
                </div>
              </div>
              <div>
                <p className="text-gray-700 mb-4">
                  Our media team responds to all inquiries within 24 hours during business days. We can provide:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  <li>High-resolution images and footage</li>
                  <li>Executive interviews and statements</li>
                  <li>Facility tours for journalists (by appointment)</li>
                  <li>Expert commentary on industry trends</li>
                  <li>Background information and fact sheets</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Press Releases */}
          <div className="mt-16">
            <h2 className="font-playfair text-2xl font-bold text-bonsai-dark-green mb-8">Press Releases</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pressReleases.map((press) => (
                <div key={press.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={press.image} 
                      alt={press.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      <Calendar size={14} className="text-bonsai-olive mr-2" />
                      <span className="text-sm text-gray-500">{press.date}</span>
                      <span className="mx-2 text-gray-300">|</span>
                      <span className="text-sm text-bonsai-olive">{press.category}</span>
                    </div>
                    
                    <h3 className="font-playfair font-bold text-xl text-bonsai-dark-green leading-tight mb-3">{press.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{press.excerpt}</p>
                    
                    <div className="flex items-center">
                      <a href="#" className="btn-sm-primary flex items-center">
                        Read Full Release
                        <ExternalLink size={14} className="ml-2" />
                      </a>
                      
                      <a href="#" className="ml-4 text-bonsai-olive hover:text-bonsai-dark-green flex items-center">
                        <Download size={14} className="mr-1" />
                        PDF
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <a href="#" className="text-bonsai-olive hover:text-bonsai-dark-green font-medium">
                View All Press Releases →
              </a>
            </div>
          </div>
          
          {/* Media Coverage */}
          <div className="mt-16">
            <h2 className="font-playfair text-2xl font-bold text-bonsai-dark-green mb-8">Media Coverage</h2>
            
            <div className="bg-white rounded-lg shadow">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="px-6 py-4 text-bonsai-dark-green font-medium">Publication</th>
                      <th className="px-6 py-4 text-bonsai-dark-green font-medium">Title</th>
                      <th className="px-6 py-4 text-bonsai-dark-green font-medium">Date</th>
                      <th className="px-6 py-4 text-bonsai-dark-green font-medium">Type</th>
                      <th className="px-6 py-4 text-bonsai-dark-green font-medium">Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mediaAppearances.map((item, index) => (
                      <tr key={item.id} className={`border-b border-gray-100 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <img src={item.logo} alt={item.publication} className="h-6 mr-3" />
                            <span className="font-medium text-gray-700">{item.publication}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-gray-700">{item.title}</td>
                        <td className="px-6 py-4 text-gray-500">{item.date}</td>
                        <td className="px-6 py-4">
                          <span className="px-2 py-1 bg-bonsai-beige/30 text-bonsai-dark-green text-xs rounded-full">
                            {item.type}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <a href={item.link} className="text-bonsai-olive hover:text-bonsai-dark-green">
                            <ExternalLink size={16} />
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          {/* Company Facts & Timeline */}
          <div className="mt-16">
            <h2 className="font-playfair text-2xl font-bold text-bonsai-dark-green mb-8">Company Facts & Timeline</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1 glass-card p-6">
                <h3 className="font-playfair text-xl text-bonsai-dark-green mb-4">Company Facts</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-bonsai-olive">Founding</h4>
                    <p className="text-gray-700">Founded in 2005 by Bambang Wijaya</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-bonsai-olive">Headquarters</h4>
                    <p className="text-gray-700">Cipanas, West Java, Indonesia</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-bonsai-olive">Facilities</h4>
                    <p className="text-gray-700">5 hectares of nursery space with specialized growing environments</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-bonsai-olive">Employees</h4>
                    <p className="text-gray-700">85+ staff including horticulturists, bonsai masters, and export specialists</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-bonsai-olive">Global Presence</h4>
                    <p className="text-gray-700">Exports to 28 countries across Europe, Asia, North America, and Oceania</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-bonsai-olive">Product Range</h4>
                    <p className="text-gray-700">Over 200 species of bonsai and tropical plants</p>
                  </div>
                </div>
              </div>
              
              <div className="md:col-span-2 glass-card p-6">
                <h3 className="font-playfair text-xl text-bonsai-dark-green mb-4">Company Timeline</h3>
                
                <div className="relative">
                  <div className="absolute left-4 top-0 h-full w-0.5 bg-bonsai-beige"></div>
                  <div className="space-y-8">
                    {companyFactsMilestones.map((milestone, index) => (
                      <div key={index} className="flex">
                        <div className="relative flex items-center justify-center min-w-8 z-10">
                          <div className="h-8 w-8 rounded-full bg-bonsai-olive flex items-center justify-center text-white text-xs">
                            {milestone.year.slice(2)}
                          </div>
                        </div>
                        <div className="ml-6">
                          <div className="font-bold text-bonsai-dark-green">{milestone.year}</div>
                          <div className="text-gray-600">{milestone.event}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Media Assets */}
          <div className="mt-16">
            <h2 className="font-playfair text-2xl font-bold text-bonsai-dark-green mb-8">Downloadable Media Assets</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="flex items-center text-bonsai-dark-green mb-4">
                  <Newspaper className="h-6 w-6 mr-3 text-bonsai-olive" />
                  <h3 className="font-playfair font-bold text-lg">Company Profile</h3>
                </div>
                <p className="text-gray-600 text-sm mb-6">
                  Comprehensive information about our history, mission, facilities, and leadership team.
                </p>
                <a href="#" className="btn-sm-outline flex items-center justify-center">
                  <Download size={16} className="mr-2" />
                  Download PDF (3.2 MB)
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="flex items-center text-bonsai-dark-green mb-4">
                  <Newspaper className="h-6 w-6 mr-3 text-bonsai-olive" />
                  <h3 className="font-playfair font-bold text-lg">Press Kit</h3>
                </div>
                <p className="text-gray-600 text-sm mb-6">
                  Complete media package including fact sheets, executive bios, and high-resolution logos.
                </p>
                <a href="#" className="btn-sm-outline flex items-center justify-center">
                  <Download size={16} className="mr-2" />
                  Download ZIP (15.8 MB)
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="flex items-center text-bonsai-dark-green mb-4">
                  <Newspaper className="h-6 w-6 mr-3 text-bonsai-olive" />
                  <h3 className="font-playfair font-bold text-lg">Photo Gallery</h3>
                </div>
                <p className="text-gray-600 text-sm mb-6">
                  High-resolution images of our nursery, products, and export operations.
                </p>
                <a href="#" className="btn-sm-outline flex items-center justify-center">
                  <Download size={16} className="mr-2" />
                  Download ZIP (42.5 MB)
                </a>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-gray-600 text-sm">
                For additional media assets or custom requests, please contact our media relations team.
              </p>
            </div>
          </div>
          
          {/* CTA */}
          <div className="mt-16 bg-bonsai-beige/30 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-playfair font-bold text-bonsai-dark-green mb-4">Media Inquiry</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              For interview requests, press information, or to arrange a visit to our facilities, please contact our media team.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="mailto:press@indocipanasbonsai.com" className="btn-primary">
                Contact Press Team
              </a>
              <Link to="/contact" className="btn-outline">
                Visit Contact Page
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PressPage;
