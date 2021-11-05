import nanny from '../images/nannypoppins.png'
import tracker from '../images/employeetracker.png'
import readme from '../images/readme.png'

const work = [
  {
    title: "Tech Blog",
    githubRepo: "https://github.com/janetiqal/Tech-Blog",
    photo: "https://user-images.githubusercontent.com/84414488/137014528-51c02354-173e-4b16-bf6f-50b43292e8b0.png",
    deployedApp: `https://tech-blog-ji.herokuapp.com/`,
    subheader:'Main Developer',
    description: `This is a CMS style blog that was built using the MVC framework. Tech-blog allows user to sign in or signup and view all posts, comment or view comments on a post, as well as create, edit and delete their own blog posts.`,
  },
  {
    title: "Nanny Poppins",
    githubRepo: "https://github.com/janetiqal/nanny-poppins",
    photo: nanny,
    deployedApp: `https://nanny-poppins.herokuapp.com/`,
    subheader:'Team Project, Back End Developer',
    description: `An app where parents can search for nanny's that would be the perfect fit for their family, and an app where Nanny's can go to look for employment by creating profiles that showcase their credentials.`,
  },
  {
    title: "Loc-Ale",
    githubRepo: "https://github.com/janetiqal/loc-ale",
    photo: "https://user-images.githubusercontent.com/80427770/127078788-bbf25aa9-228c-4341-ad8e-1602a2671edd.jpg",
    deployedApp: `https://br-through.github.io/loc-ale/`,
    subheader:'Team Project, Google Maps page including the API and OPEN Brewery API',
    description: `Loc-Ale is a tool for finding breweries when a user searches for a city (google maps), it includes national news on breweries across the U.S and gives users local brewery information and classifications.`,
  },
 
  {
    title: "Employee Tracker",
    githubRepo: "https://github.com/janetiqal/Employee-Tracker",
    photo: tracker,
    deployedApp: `https://drive.google.com/file/d/1lsDQfH1z14tTmk58cnVdslAOiplH_YND/view`,
    subheader:'Main Developer',
    description: `This is a CLI Application that uses Node.js, MySQL, and the Inquirer package. It allows users to manage their employee database by being able to view and update, departments, roles, and employees in various formats.`,
  },
  {
    title: "Weather Dashboard",
    githubRepo: "https://github.com/janetiqal/Weather-Dashboard",
    photo: "https://user-images.githubusercontent.com/84414488/126261596-629fc3cd-f30e-4d18-8870-f39bbd512ef9.png",
    deployedApp: `https://janetiqal.github.io/Weather-Dashboard/`,
    subheader:'Main Developer',
    description:"The Weather Dashboard allows a user to search a city and data is giving information on current weather conditions and a 5 day forecast. The user can also see previous searches they made and click on those past searches and see the weather data again. The app uses the Open Weather API--both the One Call API and the 5 Day/ 3 Hour Forecast API's. Data is generated dynamically using JavaScript."
  },
  {
    title: "README.md Generator",
    githubRepo: "https://github.com/janetiqal/README.md-Generator",
    photo: readme,
    subheader:'Main Developer',
    deployedApp: `https://drive.google.com/file/d/1PlXUMDcurqYXWeG7o9UWpkgmEQNtXiTE/view`,
    description: `A CLI app that generates a README.md. This app was built using Node.js and the Inquirer package, usage of arrow functions, validation, and ternerary operators.`,
  },
  {
    title: "Password Generator",
    githubRepo: "https://github.com/janetiqal/Password-Generator",
    photo:'https://user-images.githubusercontent.com/84414488/123009667-c50b6680-d382-11eb-9263-09e72e46444a.png',
    deployedApp: `https://janetiqal.github.io/Password-Generator/`,
    subheader:'Main Developer',
    description: `Password Generator app involves JavaScript where a user is prompted to answer a few questions with what kind of characters they would like to include in a randomly generated password. User is then presented with that password.`,
  },
  {
    title: "Code Quiz",
    githubRepo: "https://github.com/janetiqal/Code-Quiz",
    photo:'https://user-images.githubusercontent.com/84414488/124057003-56668280-d9ec-11eb-9c8c-e663f9529e44.png',
    subheader:'Main Developer',
    deployedApp: `https://janetiqal.github.io/Code-Quiz/`,
    description: 'This app loops through questions after they have been answered, keeps time and deducts time when users answer questions incorrectly. At the end of the quiz, users are given their score and are able to store their initials and score via local storage. This was one of my first apps and taught me the power of JavaScript and how it can be used to manipulate the DOM.',
  }
];

export default work;