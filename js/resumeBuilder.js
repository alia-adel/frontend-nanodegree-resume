/*
This is empty on purpose! Your code to build the resume will go here.
 */

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
      "dates" : "April 2014 - On Going",
      "description" : "Managing several support & development projects for a multinational leader in plant bioinformatics and the seeds business."
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
  }
};

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

/*  workExperience Manipulation */
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

/*  end of workExperience Manipulation */
