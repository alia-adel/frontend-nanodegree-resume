/*
This is empty on purpose! Your code to build the resume will go here.
 */
const DATA_PLACEHOLDER = '%data%';
const CONTACT_PLACEHOLDER = '%contact%';

/*  My personal bio object */
let bio = {
    name: 'Alia Adel',
    role: 'Projet Manager',
    contacts: {
        mobile: '+2012345678',
        email: 'alia.adel.83@gmail.com',
        github: 'https://github.com/alia-adel',
        twitter: '@aliaadel83',
        location: 'Nasr City, Cairo, Egypt'
    },
    welcomeMessage: 'Welcome to my interactive resume',
    skills: ['Project Management', 'Frontend Development'],
    biopic: './images/Alia.jpg',
    display: function() {
        $('#header').prepend(HTMLheaderRole.replace(DATA_PLACEHOLDER, bio.role));
        $('#header').prepend(HTMLheaderName.replace(DATA_PLACEHOLDER, bio.name));

        // Loop over & display contacts in the header
        Object.keys(bio.contacts).forEach(function(key) {
        	$('#topContacts').append(HTMLcontactGeneric.replace(
                CONTACT_PLACEHOLDER, key).replace(DATA_PLACEHOLDER, bio.contacts[key]));
        });

        $('#header').append(HTMLbioPic.replace(DATA_PLACEHOLDER, bio.biopic));
        $('#header').append(HTMLwelcomeMsg.replace(DATA_PLACEHOLDER, bio.welcomeMessage));

        // Add skills' start <div>
        $('#header').append(HTMLskillsStart);

        // Loop over bio skills
        bio.skills.forEach(function(element) {
            $('#skills').append(HTMLskills.replace(DATA_PLACEHOLDER, element));
        });

        // Display the footer contacts
        $('#footerContacts').append(HTMLmobile.replace(DATA_PLACEHOLDER, bio.contacts.mobile));
        $('#footerContacts').append(HTMLemail.replace(DATA_PLACEHOLDER, bio.contacts.email));
        $('#footerContacts').append(HTMLgithub.replace(DATA_PLACEHOLDER, bio.contacts.github));
        $('#footerContacts').append(HTMLtwitter.replace(DATA_PLACEHOLDER, bio.contacts.twitter));
        $('#footerContacts').append(HTMLlocation.replace(DATA_PLACEHOLDER, bio.contacts.location));
    }
};

/* My education info */
let education = {
    schools: [
	    {
	        name: 'Information Technology Institute',
	        location: 'Giza, Cairo, Egypt',
	        degree: 'Pre-Master',
	        majors: ['Systems Development'],
	        dates: 'September 2005 - July 2006',
	        url: 'http://www.iti.gov.eg/'
	    },
	    {
	        name: 'Information Technology Institute',
	        location: 'Al Dokki, Cairo, Egypt',
	        degree: 'Bachelor',
	        majors: ['Information Systems'],
	        dates: 'September 2001 - May 2005',
	        url: 'http://www.fci.cu.edu.eg/'
	    }
    ],
    onlineCourses: [
	    {
	        title: 'Intro to jQuery',
	        school: 'Udacity',
	        dates: '2017',
	        url: 'https://classroom.udacity.com/courses/ud245'
	    },
	    {
	        title: 'Object-Oriented JavaScript',
	        school: 'Udacity',
	        dates: '2017',
	        url: 'https://classroom.udacity.com/courses/ud015'
	    },
	    {
	        title: 'Responsive Web Design Fundamentals',
	        school: 'Udacity',
	        dates: '2017',
	        url: 'https://classroom.udacity.com/courses/ud893'
	    },
	    {
	        title: 'Sass',
	        school: 'tutorialspoint',
	        dates: '2017',
	        url: 'https://www.tutorialspoint.com/sass/sass_script.htm'
	    },
	    {
	        title: 'JavaScript Basics',
	        school: 'Udacity',
	        dates: '2017',
	        url: 'https://classroom.udacity.com/courses/ud804'
	    },
	    {
	        title: 'Intro to HTML and CSS',
	        school: 'Udacity',
	        dates: '2017',
	        url: 'https://classroom.udacity.com/courses/ud304'
	    },
	    {
	        title: 'Project Management Diploma',
	        school: 'RITI',
	        dates: '2014',
	        url: 'http://www.riti.org/'
	    },
	    {
	        title: 'SCJP- Sun Certified Programmer for Java 2 Platform 1.4',
	        school: 'Sun (Currently Known as Oracle)',
	        dates: '2006',
	        url: 'http://education.oracle.com'
	    }
    ],
    display: function() {
    	//Loop over resume's education
        education.schools.forEach(function(school) {
            $('#education').append(HTMLschoolStart);
            $('.education-entry:last').append(HTMLschoolName.replace(DATA_PLACEHOLDER, school.name) +
                HTMLschoolDegree.replace(DATA_PLACEHOLDER, school.degree));
            $('.education-entry:last').append(HTMLschoolDates.replace(DATA_PLACEHOLDER, school.dates));
            $('.education-entry:last').append(HTMLschoolLocation.replace(DATA_PLACEHOLDER, school.location));
            school.majors.forEach(function(major) {
                $('.education-entry:last').append(HTMLschoolMajor.replace(DATA_PLACEHOLDER, major));
            });
        });

        $('#education').append(HTMLonlineClasses);
		//Loop over resume's online courses
        education.onlineCourses.forEach(function(course) {
            $('#education').append(HTMLschoolStart);
            $('.education-entry:last').append(HTMLonlineTitle.replace(DATA_PLACEHOLDER, course.title) +
                HTMLonlineSchool.replace(DATA_PLACEHOLDER, course.school));
            $('.education-entry:last').append(HTMLonlineDates.replace(DATA_PLACEHOLDER, course.dates));
            $('.education-entry:last').append(HTMLonlineURL.replace(
                DATA_PLACEHOLDER, course.url).replace('#', course.url));
        });
    }
};

/* My work info. */
let work = {
    jobs: [
	    {
	        employer: 'ITWORX',
	        title: 'Project Manager',
	        location: 'FreeZone, Nasr City, Cairo, Egypt',
	        dates: 'April 2015 - On Going',
	        description: 'Managing several support & development projects for '
	        	+ 'a multinational leader in plant bioinformatics and the seeds business.'
	    },
	    {
	        employer: 'ITWORX',
	        title: 'Team Leader',
	        location: 'FreeZone, Nasr City, Cairo, Egypt',
	        dates: 'September 2010 - March 2015',
	        description: 'Handling production systems\' support, managing project life cycle'
	        	+ ' & conducting training & handovers to other vendors.'
	    },
	    {
	        employer: 'ITWORX',
	        title: 'Senior Software Engineer',
	        location: 'FreeZone, Nasr City, Cairo, Egypt',
	        dates: 'August 2007 - August 2010',
	        description: 'Java Web Developer.'
	    },
	    {
	        employer: 'ITWORX',
	        title: 'Software Engineer',
	        location: 'FreeZone, Nasr City, Cairo, Egypt',
	        dates: 'August 2006 - August 2007',
	        description: 'Java Web Developer.'
	    }
    ],
    display: function() {

        //loop over resume's jobs
        work.jobs.forEach(function(element) {
            $('#workExperience').append(HTMLworkStart);
            $('.work-entry:last').append(HTMLworkEmployer.replace(DATA_PLACEHOLDER, element.employer)
            	+ HTMLworkTitle.replace(DATA_PLACEHOLDER, element.title))
                .append(HTMLworkDates.replace(DATA_PLACEHOLDER, element.dates))
                .append(HTMLworkLocation.replace(DATA_PLACEHOLDER, element.location))
                .append(HTMLworkDescription.replace(DATA_PLACEHOLDER, element.description));
        });

    }
};

/* My projects' info. */

let projects = {
    projects: [
	    {
	        title: 'Syngenta',
	        dates: 'November 2013 - On Going',
	        description: 'Managing different support & project teams for several applications ' +
	            'for a multinational leader in plant bioinformatics and the seeds business.',
	        images: ['./images/Syngenta.png']
	    },
	    {
	        title: 'Vodafone Capacity Management Tool',
	        dates: 'February 2013 - April 2014',
	        description: 'ETL for different types of files.',
	        images: ['./images/Vodafone.png']
	    },
	    {
	        title: 'EITC du Selfcare',
	        dates: 'November 2006 - October 2011',
	        description: 'eCare portal for Dubai second telecom company \'du\'',
	        images: ['./images/du.jpg']
	    }
    ],
    display: function() {

    	//Loop over resume's projects
        projects.projects.forEach(function(element) {
            $('#projects').append(HTMLprojectStart);
            $('.project-entry:last').append(HTMLprojectTitle.replace(DATA_PLACEHOLDER, element.title));
            $('.project-entry:last').append(HTMLprojectDates.replace(DATA_PLACEHOLDER, element.dates));
            $('.project-entry:last').append(HTMLprojectDescription.replace(DATA_PLACEHOLDER, element.description));
            element.images.forEach(function(image) {
                $('.project-entry:last').append(HTMLprojectImage.replace(DATA_PLACEHOLDER, image));
            });
        });
    }
};


/**
* @description: Add the map <div> to the page
*/
function displayMap() {
    $('#mapDiv').append(googleMap);
};

/* Resume filling calls */
bio.display();
education.display();
work.display();
projects.display();
displayMap();
