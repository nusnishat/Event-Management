import React from 'react';


const AboutUs = () => {
    const teamMembers = [
        {
          name: 'Ava Taylor',
          position: 'Supervisor',
          image: "https://demo.ovatheme.com/dvents/wp-content/uploads/2017/06/4-3.jpg", 
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
          image: "https://demo.ovatheme.com/dvents/wp-content/uploads/2017/06/2-5.jpg", 
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
          image: 'https://demo.ovatheme.com/dvents/wp-content/uploads/2017/06/2-5.jpg', 
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
          image: 'https://demo.ovatheme.com/dvents/wp-content/uploads/2017/06/3-3.jpg', 
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
        { text: 'The Events Specialists', icon: () => <span className="material-icons">group</span>, color: 'text-blue-500' },
        { text: 'Dedicated Venues & Arrangements', icon: () => <span className="material-icons">person</span>, color: 'text-green-500' },
        { text: 'Affordable Pricing', icon: () => <span className="material-icons">attach_money</span>, color: 'text-yellow-500' },
        { text: 'All Types of Events', icon: () => <span className="material-icons">support</span>, color: 'text-red-500' },
      ];
  return (
    <div className="leading-loose text-justify">
        <section className='event-banner py-16 flex items-center justify-center '>
            <div className="border-t">
                <h1 className='font-semibold text-4xl mb-8'>About Us</h1>
                <p className='text-2xl font-semibold'>
                    <span className='text-cyan-500'>Home</span> / About Us
                </p>
            </div>
        </section>
      {/* Team Members Section */}
      <h1 className="text-3xl px-8 md:px-24 font-bold text-center mt-12 mb-4 "><span className='text-cyan-500'>DVENTS</span> Team Members</h1>
      <p className="text-center px-8 md:px-24 text-xl mb-8">We make your events smart & impactful with personalized event management services.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 px-8 md:px-24  text-zinc-500 my-20">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex items-center space-y-4">
            <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-4"/>
            <div className="text-left">
              <h2 className="text-xl font-semibold">{member.name}</h2>
              <p className="text-gray-600">{member.position}</p>
              <p className="text-gray-700 text-sm mt-4">{member.description}</p>
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
      <div className="mx-auto bg-zinc-50 px-8 md:px-24 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h1 className="text-3xl font-bold my-8 ">
            <span className=" text-cyan-500">DVENTS</span> Skills
            </h1>
            <p className="mb-8 text-xl">
            We excel in a wide range of event management services, ensuring your event is handled with the utmost care and expertise.
            </p>
            <ul className="space-y-4 text-zinc-500 font-semibold">
              <li className="flex items-center">
                <span className="text-cyan-500 mr-2">✓</span>
                Dedicated and professional team
              </li>
              <li className="flex items-center">
                <span className="text-cyan-500 mr-2">✓</span>
                Personalized event planning
              </li>
              <li className="flex items-center">
                <span className="text-cyan-500 mr-2">✓</span>
                Attention to detail in every event
              </li>
              <li className="flex items-center">
                <span className="text-cyan-500 mr-2">✓</span>
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
                    className="bg-cyan-500 h-1.5 rounded"
                    style={{ width: skill.progress }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-20 py-20 px-8 md:px-24 ">
        {/* Why Choose Us Section */}
        <section className="mb-12 col-span-2">
          <h2 className="text-3xl font-bold  mb-6">Why Choose <span className=" text-cyan-500">DVENTS</span></h2>
          <div className="w-full mt-12">
            {whyChooseUsItems.map((item, index) => (
              <div key={index} className="collapse collapse-plus bg-base-200 mb-4 rounded-lg shadow-md">
                <input type="radio" name="why-choose-us-accordion" defaultChecked={index === 0} />
                <div className="collapse-title text-xl font-medium flex items-center">
                  {/* <item.icon className={`mr-2 ${item.color}`} /> */}
                  {item.text}
                </div>
                <div className="collapse-content">
                  <p className="text-gray-600 p-4">
                  Sit amet consectetur elit sed lusm tempor incidant temdore labore dolore lorem ipsum consectetur adipisicing elit sed do eiusmod tempor incididunt.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div>
          {/* Our Goals Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold  mb-6"><span className=" text-cyan-500">DVENTS </span> Goals</h2>
            <p className="text-gray-600 mx-auto">
              Our goal is to revolutionize event management with exceptional services, making every event memorable and stress-free for our clients.
            </p>
          </section>

          {/* Our Vision Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold  mb-6"><span className=" text-cyan-500">DVENTS </span>Vision</h2>
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
