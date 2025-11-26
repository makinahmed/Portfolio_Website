import React from 'react';

const ExperienceSec = () => {
    const experiences = [
			{
				year: '2022-2023',
				title: 'Associate Software Engineer',
				company: 'Feather IT',
				type: 'Fulltime',
				description: `Developed a complete Hospital Management System (HMS) desktop application from scratch using Python, Tkinter, and SQLite. Actively participated in project planning and client meetings to gather requirements and provide progress updates. Created comprehensive documentation and conducted research and development to ensure effective and efficient solutions. Collaborated closely with the team while mentoring junior developers to maintain high-quality standards throughout the project`,
			},
			{
				year: '2022-2023',
				title: 'Mentor',
				company: 'Prime University Computer Programming Club',
				type: 'Part-time',
				description:
					'Mentored junior students by providing guidance on programming skills, career planning, and project development. Conducted classes and workshops to help them enhance technical abilities, gather practical experience, and build confidence for future opportunities',
			},
			{
				year: '2023-2024',
				title: 'Team LeaD',
				company: 'JamByte',
				type: 'Fulltime',
				description:
					'Led website development projects, coordinating front-end and back-end teams to ensure timely delivery. Planned sprints, reviewed code, and enforced best practices. Mentored team members and resolved technical challenges. Enjoyed the golden days working with a talented team and building something meaningful together.',
			},
			{
				year: '2024',
				title: 'Software Developer',
				company: 'M360ICT',
				type: 'Fulltime',
				description:
					'Contribued to an Inventory Management System and developed a responsive website using Node.js, React.js, and MySQL. Built scalable front-end architecture with reusable components, integrated REST APIs and third-party tools, and ensured responsive, user-friendly interfaces. Collaborated closely with designers, backend developers, and team members to deliver high-quality, efficient solutions, while managing project planning, documentation, and team coordination.',
			},
			{
				year: '2024-Present',
				title: 'Team Leader & Full Stack Developer',
				company: 'Local & Freelance',
				type: 'Fulltime',
				description:
					'Engaged in diverse local and freelance projects, contributing alongside my team to achieve effective results.',
			},
		];

    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                        <h2>Experience</h2>
                        {/* <p className="text-xl text-primary">( 02 )</p> */}
                    </div>

                    <div className="space-y-7 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative">
                                <div className="">
                                    <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                                    <h4 className="text-lg font-normal">{exp.title}</h4>
                                </div>

                                <div className=" relative">
                                    {index < experiences.length && (
                                        <div className={`absolute left-0 top-3 w-px ${index < experiences.length - 1 ? 'h-40' : 'h-30'} bg-softGray`}></div>
                                    )}

                                    <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                                        <div className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${index === 1 ? 'border-primary' : 'border-black'
                                            }`}>
                                            {index === 1 && (
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="pl-4 lg:pl-7">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xl text-black font-normal">{exp.company}</span>
                                        </div>
                                        <p className="text-base font-normal">{exp.type}</p>
                                    </div>
                                </div>

                                <div className="pl-8 sm:pl-0">
                                    <p className="leading-relaxed text-base">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSec;