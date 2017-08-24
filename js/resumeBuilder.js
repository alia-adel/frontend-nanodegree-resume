/*
This is empty on purpose! Your code to build the resume will go here.
 */

<<<<<<< HEAD
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
		twitter: 'aliaadel83',
		location: 'Cairo, Egypt'
	},
	welcomeMessage: 'Welcome to my interactive resume',
	skills: ['Project Management', 'Frontend Development'],
	biopic: './images/Alia.jpg',
	display: function() {
		$('#header').prepend(HTMLheaderRole.replace(DATA_PLACEHOLDER, bio.role));
		$('#header').prepend(HTMLheaderName.replace(DATA_PLACEHOLDER, bio.name));
		// Display the header contacts
		for(let prop in bio.contacts){
			$('#topContacts').append(HTMLcontactGeneric.replace(
				CONTACT_PLACEHOLDER, prop).replace(DATA_PLACEHOLDER, bio.contacts[prop]));
		}

		$('#header').append(HTMLbioPic.replace(DATA_PLACEHOLDER, bio.biopic));
		$('#header').append(HTMLwelcomeMsg.replace(DATA_PLACEHOLDER, bio.welcomeMessage));
		$('#header').append(HTMLskillsStart);

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
			location: 'Cairo, Egypt',
			degree: 'Pre-Master',
			majors: ['Systems Development'],
			dates: 'September 2005 - July 2006',
			url: 'http://www.iti.gov.eg/'
		}, {
			name: 'Information Technology Institute',
			location: 'Cairo, Egypt',
			degree: 'Bachelor',
			majors: ['Information Systems'],
			dates: 'September 2001 - May 2005',
			url: 'http://www.fci.cu.edu.eg/'
		}
	],
	onlineCourses: [
		{
			title : 'Intro to jQuery',
			school  : 'Udacity',
			dates : '2017',
			url : 'https://classroom.udacity.com/courses/ud245'
		}, {
			title : 'Object-Oriented JavaScript',
			school  : 'Udacity',
			dates : '2017',
			url : 'https://classroom.udacity.com/courses/ud015'
		}, {
			title : 'Responsive Web Design Fundamentals',
			school  : 'Udacity',
			dates : '2017',
			url : 'https://classroom.udacity.com/courses/ud893'
		}, {
			title : 'Sass',
			school  : 'tutorialspoint',
			dates : '2017',
			url : 'https://www.tutorialspoint.com/sass/sass_script.htm'
		}, {
			title : 'JavaScript Basics',
			school  : 'Udacity',
			dates : '2017',
			url : 'https://classroom.udacity.com/courses/ud804'
		}, {
			title : 'Intro to HTML and CSS',
			school  : 'Udacity',
			dates : '2017',
			url : 'https://classroom.udacity.com/courses/ud304'
		}, {
			title : 'Project Management Diploma',
			school  : 'RITI',
			dates : '2014',
			url : 'http://www.riti.org/'
		}, {
			title : 'SCJP- Sun Certified Programmer for Java 2 Platform 1.4',
			school  : 'Sun (Currently Known as Oracle)',
			dates : '2006',
			url : 'http://education.oracle.com'
		}
	],
	display: function() {
		console.log('do something else');
	}
};

/* My work info. */
let work = {
	jobs : [
		{
			employer : 'ITWORX',
			title : 'Project Manager',
			location  : 'Cairo, Egypt',
			dates : 'April 2015 - On Going',
			description : 'Managing several support & development projects for a multinational leader in plant bioinformatics and the seeds business.'
		}, {
			employer : 'ITWORX',
			title : 'Team Leader',
			location  : 'Cairo, Egypt',
			dates : 'September 2010 - March 2015',
			description : 'Handling production systems\' support, managing project life cycle & conducting training & handovers to other vendors.'
		}, {
			employer : 'ITWORX',
			title : 'Senior Software Engineer',
			location  : 'Cairo, Egypt',
			dates : 'August 2007 - August 2010',
			description : 'Java Web Developer.'
		}, {
			employer : 'ITWORX',
			title : 'Software Engineer',
			location  : 'Cairo, Egypt',
			dates : 'August 2006 - August 2007',
			description : 'Java Web Developer.'
		}
	],
	display: function() {
		console.log('do something for work');
	}
};

/* My projects' info. */

let projects = {
	projects : [
		{
			'title' : 'Syngenta',
			'dates' : 'November 2013 - On Going',
			'description' : 'Managing different support & project teams for several applications '
				+ 'for a multinational leader in plant bioinformatics and the seeds business.',
			'project_img' : './images/Syngenta.png'
		}, {
			'title' : 'Vodafone Capacity Management Tool',
			'dates' : 'February 2013 - April 2014',
			'description' : 'ETL for different types of files.',
			'project_img' : './images/Vodafone.png'
		}, {
			'title' : 'EITC du Selfcare',
			'dates' : 'November 2006 - October 2011',
			'description' : 'eCare portal for Dubai second telecom company \'du\'',
			'project_img' : './images/du.jpg'
		}
	],
	display: function() {
		console.log('do something for projects');
	}
};

bio.display();
education.display();
work.display();
projects.display();
=======
// Variables
var bio = {
  "name" : "Alia Adel",
  "role" : "Frontend Developer",
  "contacts" : {
    "mobile"  : "+2012345678",
    "email" : "alia.adel.83@gmail.com",
    "twitter" :   "aliaadel83",
    "github" : "alia-adel",
    "location" : "Cairo-Egypt"
  },
  "bioPic_URL" : "./images/Alia.png",
  "welcome_msg" : "Welcome to my interactive JavaScript Resume",
  "skills" : ["Management", "Team Leading", "Web Development"],
  "jobs" : [
    {
      "employer" : "ITWORX",
      "title" : "Project Leader",
      "location"  : "Cairo-Egypt",
      "dates" : "April 2015 - On Going",
      "description" : "Managing several support & development projects for a multinational leader in plant bioinformatics and the seeds business."
    },{
      "employer" : "ITWORX",
      "title" : "Team Leader",
      "location"  : "Cairo-Egypt",
      "dates" : "September 2010 - March 2015",
      "description" : "Handling production systems' support, managing project life cycle & conducting training & handovers to other vendors."
    },{
      "employer" : "ITWORX",
      "title" : "Senior Software Engineer",
      "location"  : "Cairo-Egypt",
      "dates" : "August 2007 - August 2010",
      "description" : "Java Web Developer."
    },{
      "employer" : "ITWORX",
      "title" : "Software Engineer",
      "location"  : "Cairo-Egypt",
      "dates" : "August 2006 - August 2007",
      "description" : "Java Web Developer."
    }
  ],
  "projects"  : [
    {
      "title" : "Vodafone Capacity Management Tool",
      "dates" : "February 2013 - April 2014",
      "description" : "ETL for different types of files.",
      "project_img" : "./images/vodafone.jpg"
    },{
      "title" : "EITC du Selfcare",
      "dates" : "November 2006 - October 2011",
      "description" : "eCare portal for Dubai second telecom company 'du'",
      "project_img" : "./images/du.jpg"
    }
  ],
  "education" : {
    "schools" : [
      {
        "name"  : "Information Technology Institute",
        "location"  : "Cairo-Egypt",
        "degree"  : "Pre-Master",
        "majors"  : ["Systems Development"],
        "dates" : "September 2005 - July 2006",
        "url" : "http://www.iti.gov.eg/"
      },
      {
        "name"  : "Faculty of Computers & Information",
        "location"  : "Cairo-Egypt",
        "degree"  : "Bachelor",
        "majors"  : ["Information Systems"],
        "dates" : "September 2001 - May 2005",
        "url" : "http://www.fci.cu.edu.eg/"
      }
    ],
    "onlineCourses" : [
      {
        "title" : "Intro to jQuery",
        "school"  : "Udacity",
        "dates" : "2017",
        "url" : "https://classroom.udacity.com/courses/ud245"
      },
      {
        "title" : "Object-Oriented JavaScript",
        "school"  : "Udacity",
        "dates" : "2017",
        "url" : "https://classroom.udacity.com/courses/ud015"
      },
      {
        "title" : "Responsive Web Design Fundamentals",
        "school"  : "Udacity",
        "dates" : "2017",
        "url" : "https://classroom.udacity.com/courses/ud893"
      },
      {
        "title" : "Sass",
        "school"  : "tutorialspoint",
        "dates" : "2017",
        "url" : "https://www.tutorialspoint.com/sass/sass_script.htm"
      },
      {
        "title" : "JavaScript Basics",
        "school"  : "Udacity",
        "dates" : "2017",
        "url" : "https://classroom.udacity.com/courses/ud804"
      },
      {
        "title" : "Intro to HTML and CSS",
        "school"  : "Udacity",
        "dates" : "2017",
        "url" : "https://classroom.udacity.com/courses/ud304"
      },
      {
        "title" : "Project Management Diploma",
        "school"  : "RITI",
        "dates" : "2014",
        "url" : "http://www.riti.org/"
      },
      {
        "title" : "SCJP- Sun Certified Programmer for Java 2 Platform 1.4",
        "school"  : "Sun (Currently Known as Oracle)",
        "dates" : "2006",
        "url" : "http://education.oracle.com"
      }
    ]
  },
  fill_jobs : function () {
    var formattedEmployer, formattedTitle;
    for(job in bio.jobs){
      $("#workExperience").append(HTMLworkStart);
      formattedEmployer = HTMLworkEmployer.replace('%data%', bio.jobs[job].employer);
      formattedTitle = HTMLworkTitle.replace('%data%', bio.jobs[job].title);
      $(".work-entry:last").append(formattedEmployer + formattedTitle);
      $(".work-entry:last").append(HTMLworkDates.replace('%data%', bio.jobs[job].dates));
      $(".work-entry:last").append(HTMLworkLocation.replace('%data%', bio.jobs[job].location));
      $(".work-entry:last").append(HTMLworkDescription.replace('%data%', bio.jobs[job].description));
    }
  },
  fill_projects : function () {
    for(project in bio.projects){
      $("#projects").append(HTMLprojectStart);
      $(".project-entry:last").append(HTMLprojectTitle.replace('%data%', bio.projects[project].title));
      $(".project-entry:last").append(HTMLprojectDates.replace('%data%', bio.projects[project].dates));
      $(".project-entry:last").append(HTMLprojectDescription.replace('%data%', bio.projects[project].description));
      $(".project-entry:last").append(HTMLprojectImage.replace('%data%', bio.projects[project].project_img));
    }
  },
  fill_education  : function () {
    for(school in bio.education.schools){
      $("#education").append(HTMLschoolStart);
      $(".education-entry:last").append(HTMLschoolName.replace("%data%", bio.education.schools[school].name).replace("#", bio.education.schools[school].url)
        +HTMLschoolDegree.replace("%data%", bio.education.schools[school].degree));
      $(".education-entry:last").append(HTMLschoolDates.replace("%data%", bio.education.schools[school].dates));
      $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", bio.education.schools[school].location));
      $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", bio.education.schools[school].majors));
    }
    $("#education").append(HTMLonlineClasses);
    for(course in bio.education.onlineCourses){
      $("#education").append(HTMLschoolStart);
      $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", bio.education.onlineCourses[course].title).replace("#", bio.education.onlineCourses[school].url)
        + HTMLonlineSchool.replace("%data%", bio.education.onlineCourses[course].school));
      $(".education-entry:last").append(HTMLonlineDates.replace("%data%", bio.education.onlineCourses[course].dates));
      $(".education-entry:last").append(HTMLonlineURL.replace("%data%", bio.education.onlineCourses[course].url).
        replace("#", bio.education.onlineCourses[course].url));
    }
  }
};


// ################################################################

/*  Header Manipulation */

//Add my formatted role
var formattedRole = HTMLheaderRole.replace('%data%',bio.role);
$("#header").prepend(formattedRole);

// Add my formatted name
var formattedName = HTMLheaderName.replace('%data%',bio.name);
$("#header").prepend(formattedName);


// Add contacts
$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

// Add my profile pic
$("#header").append(HTMLbioPic.replace('%data%', bio.bioPic_URL));

// Add the Welcome message
$("#header").append(HTMLwelcomeMsg.replace('%data%', bio.welcome_msg));

// Add my Skills
if(bio.skills != null && bio.skills.length > 0){
  $("#header").append(HTMLskillsStart);
  var skillsFormatted = "";
  for(var i=0; i< bio.skills.length; i++){
    $("#skills").append(HTMLskills.replace('%data%', bio.skills[i]));
  }
}
/*  end of Header Manipulation */
// ################################################################
/*  workExperience Manipulation */
bio.fill_jobs();
/*  end of workExperience Manipulation */
// ################################################################
/*  projects Manipulation */
bio.fill_projects();
/*  end of projects Manipulation */
// ################################################################

/* education Manipulation */
bio.fill_education();

/* end of education Manipulation */
// ################################################################

/* mapDiv section */
$("#mapDiv").append(googleMap);

function collectLocations() {
  var locations = [];
  for(job in bio.jobs){
    locations.push(bio.jobs[job].location);
  }
  for(school in bio.education.schools){
    locations.push(bio.education.schools[school].location);
  }
  return locations;
}
/* end of mapDiv section */
// ################################################################

/* Footer section */
$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
$("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
/* end of Footer section */
>>>>>>> e48b343b28be33591eea9d52efc9b4d081709d88
