import React from 'react';
import 'daisyui/dist/full.css';

const Services = () => {
    const eventDetails = {
        title: "Birthday Party",
        pricing: "$500 - $2000",
        description: "Celebrate your special day with a memorable birthday party! We offer a range of packages to fit your needs, from intimate gatherings to grand celebrations.",
        whatWeDo: [
            "Venue decoration",
            "Catering services",
            "Entertainment and music",
            "Photography and videography",
            "Custom cake and desserts",
            "Party favors and games"
        ],
        howToBook: "Booking your birthday party with us is simple! Follow these steps to ensure a smooth and enjoyable process:",
        bookingSteps: [
            "Contact us via phone or email to discuss your event details.",
            "Choose your preferred package and customize it to fit your needs.",
            "Sign the contract and make the initial deposit.",
            "Our team will work with you on the final arrangements.",
            "Enjoy your birthday party!"
        ],
        additionalInfo: "Our team will work with you to customize every detail of your birthday party to ensure it’s a day you and your guests will never forget. Contact us for a personalized quote.",
        packages: [
            {
                name: "Basic Package",
                price: "$500",
                features: [
                    "Up to 50 guests",
                    "Basic venue decoration",
                    "Buffet-style catering",
                    "Standard entertainment"
                ]
            },
            {
                name: "Standard Package",
                price: "$1000",
                features: [
                    "Up to 100 guests",
                    "Themed venue decoration",
                    "Full-service catering",
                    "Live music",
                    "Photo booth"
                ]
            },
            {
                name: "Premium Package",
                price: "$2000",
                features: [
                    "Up to 200 guests",
                    "Luxury venue decoration",
                    "Gourmet catering",
                    "Live band or DJ",
                    "Professional photography",
                    "Custom cake and desserts",
                    "Party favors"
                ]
            },
        ],
        "image": "https://i.postimg.cc/C1QnCzGV/concert.jpg"
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <img src="" alt="" />
            <h1 className="text-4xl font-bold mb-6 text-center text-blue-700">{eventDetails.title}</h1>
            
            <section className="mb-8">
                <h2 className="text-3xl font-semibold mb-4 text-gray-800">Pricing</h2>
                <p className="text-xl text-gray-600">{eventDetails.pricing}</p>
            </section>
            
            <section className="mb-8">
                <h2 className="text-3xl font-semibold mb-4 text-gray-800">Description</h2>
                <p className="text-lg text-gray-700">{eventDetails.description}</p>
            </section>
            
            <section className="mb-8">
                <h2 className="text-3xl font-semibold mb-4 text-gray-800">What We Do</h2>
                <ul className="list-disc pl-5 space-y-2 text-lg text-gray-700">
                    {eventDetails.whatWeDo.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </section>
            
            <section className="mb-8">
                <h2 className="text-3xl font-semibold mb-4 text-gray-800">How to Book</h2>
                <p className="text-lg text-gray-700 mb-4">{eventDetails.howToBook}</p>
                <ol className="list-decimal pl-5 space-y-2 text-lg text-gray-700">
                    {eventDetails.bookingSteps.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                </ol>
            </section>
            
            <section className="mb-8">
                <h2 className="text-3xl font-semibold mb-4 text-gray-800">Packages</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {eventDetails.packages.map((pkg, index) => (
                        <div key={index} className={` ${index!=1? 'bg-zinc-100':'bg-base-100' }  shadow-lg  border border-gray-200`}>
                            <div className="card-body">
                                <h3 className="text-2xl font-bold mb-2 text-blue-600">{pkg.name}</h3>
                                <p className="text-xl font-semibold mb-4 text-gray-800">{pkg.price}</p>
                                <ul className="list-disc pl-5 space-y-2 text-lg text-gray-700">
                                    {pkg.features.map((feature, idx) => (
                                        <li key={idx}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            
            <section>
                <h2 className="text-3xl font-semibold mb-4 text-gray-800">Additional Information</h2>
                <p className="text-lg text-gray-700">{eventDetails.additionalInfo}</p>
            </section>
        </div>
    );
};

export default Services;
