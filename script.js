//Get referwncea to the foem and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
//Handle form submission 
form.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    //collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experiance = document.getElementById('experiance').value;
    var skills = document.getElementById('skills').value;
    // generate the resume content dynamically
    var resumeHTML = "\n     <h2><b>Resume</b></h2>\n     <h3>Personal Information</h3>\n     <p><b>Name</b>".concat(name, "</p>\n      <p><b>Email</b>").concat(email, "</p>\n       <p><b>Phone</b>").concat(phone, "</p>\n        <p><b>Education</b>").concat(education, "</p>\n        <p><b>Experiance</b>").concat(experiance, "</p>\n        <p><b>Skills</b>").concat(skills, "</p>\n        ");
    //Display the genrated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("The resume display element is missing");
    }
});
