import React from 'react';

const teamMembers = [
  {
    name: 'Ava Taylor',
    position: 'Supervisor',
    image: '/path/to/ava-taylor.jpg', // Replace with actual image URLs
    description: 'Ava ensures every event runs smoothly and efficiently, bringing her extensive experience to the team.',
    social: {
      twitter: '#',
      facebook: '#',
      google: '#',
      instagram: '#',
    }
  },
  {
    name: 'Kethy Hilton',
    position: 'Events Manager',
    image: '/path/to/kethy-hilton.jpg', // Replace with actual image URLs
    description: 'Kethy coordinates all aspects of event planning and execution, ensuring every detail is perfect.',
    social: {
      twitter: '#',
      facebook: '#',
      google: '#',
      instagram: '#',
    }
  },
  {
    name: 'Charles Hasman',
    position: 'Founder & Director',
    image: '/path/to/charles-hasman.jpg', // Replace with actual image URLs
    description: 'Charles founded our company with a vision to create unforgettable events for every client.',
    social: {
      twitter: '#',
      facebook: '#',
      google: '#',
      instagram: '#',
    }
  },
  {
    name: 'Anna Sydney',
    position: 'Events Manager',
    image: '/path/to/anna-sydney.jpg', // Replace with actual image URLs
    description: 'Anna brings creativity and meticulous attention to detail to every event she manages.',
    social: {
      twitter: '#',
      facebook: '#',
      google: '#',
      instagram: '#',
    }
  }
];

const skills = [
  { name: 'Birthday Parties', progress: '70%' },
  { name: 'Wedding Events', progress: '60%' },
  { name: 'Corporate Events', progress: '50%' },
  { name: 'Proposal Arrange', progress: '80%' },
  { name: 'Social Seminars', progress: '90%' },
];

const whyChooseUsItems = [
  { text: 'Expert Team', icon: () => <span className="material-icons">group</span>, color: 'text-blue-500' },
  { text: 'Personalized Service', icon: () => <span className="material-icons">person</span>, color: 'text-green-500' },
  { text: 'Affordable Pricing', icon: () => <span className="material-icons">attach_money</span>, color: 'text-yellow-500' },
  { text: '24/7 Support', icon: () => <span className="material-icons">support</span>, color: 'text-red-500' },
];

const AboutUs = () => {
  return (
    <div className="container mx-auto p-4">
        <section className='aboutUs-banner py-16 flex items-center justify-center '>
            <div className="border-t">
                <h1 className='font-semibold text-4xl mb-8'>Events</h1>
                <p className='text-2xl font-semibold'>
                    <span className='text-cyan-500'>Home</span> / Events
                </p>
            </div>
        </section>
      {/* Team Members Section */}
      <h1 className="text-3xl font-bold text-center my-8">Meet Our Team</h1>
      <p className="text-center mb-8">We make your events smart & impactful with personalized event management services.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex items-center">
            <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-4"/>
            <div className="text-left">
              <h2 className="text-xl font-bold">{member.name}</h2>
              <p className="text-gray-600">{member.position}</p>
              <p className="text-gray-700 mt-4">{member.description}</p>
              <div className="flex mt-4 space-x-2">
                <a href={member.social.twitter} className="text-blue-400"><i className="fab fa-twitter"></i></a>
                <a href={member.social.facebook} className="text-blue-600"><i className="fab fa-facebook"></i></a>
                <a href={member.social.google} className="text-red-500"><i className="fab fa-google"></i></a>
                <a href={member.social.instagram} className="text-pink-600"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center my-8">
          <span className="text-orange-600">Our</span> Skills
        </h1>
        <p className="text-center mb-8">
          We excel in a wide range of event management services, ensuring your event is handled with the utmost care and expertise.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="text-orange-600 mr-2">✓</span>
                Dedicated and professional team
              </li>
              <li className="flex items-center">
                <span className="text-orange-600 mr-2">✓</span>
                Personalized event planning
              </li>
              <li className="flex items-center">
                <span className="text-orange-600 mr-2">✓</span>
                Attention to detail in every event
              </li>
              <li className="flex items-center">
                <span className="text-orange-600 mr-2">✓</span>
                Comprehensive event management
              </li>
            </ul>
          </div>
          <div>
            {skills.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.progress}</span>
                </div>
                <div className="w-full bg-gray-200 h-1.5 rounded">
                  <div
                    className="bg-orange-600 h-1.5 rounded"
                    style={{ width: skill.progress }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-20 px-8 md:px-24 bg-zinc-50">
        {/* Why Choose Us Section */}
        <section className="mb-12 col-span-2">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose Us</h2>
          <div className="w-full">
            {whyChooseUsItems.map((item, index) => (
              <div key={index} className="collapse collapse-plus bg-base-200 mb-4 rounded-lg shadow-md">
                <input type="radio" name="why-choose-us-accordion" defaultChecked={index === 0} />
                <div className="collapse-title text-xl font-medium flex items-center">
                  <item.icon className={`mr-2 ${item.color}`} />
                  {item.text}
                </div>
                <div className="collapse-content">
                  <p className="text-gray-600 p-4">
                    We excel in {item.text.toLowerCase()}, ensuring that every event is a success.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div>
          {/* Our Goals Section */}
          <section className="mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Goals</h2>
            <p className="text-gray-600 mx-auto">
              Our goal is to revolutionize event management with exceptional services, making every event memorable and stress-free for our clients.
            </p>
          </section>

          {/* Our Vision Section */}
          <section className="mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Vision</h2>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
              <div className="flex items-center space-x-4">
                <p className="text-gray-600">
                  Our vision is to become the leading event management company worldwide, recognized for creativity, innovation, and unmatched service.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
