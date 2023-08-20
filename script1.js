document.getElementById("generate-card").addEventListener("click", function() {
    var name = document.getElementById("name").value;
    var college = document.getElementById("college").value;
    var course = document.getElementById("course").value;
    var photoFile = document.getElementById("image").files[0];
    if (name && college && course && photoFile) {
    var reader = new FileReader();
    reader.onload = function(event) {
    var photoUrl = event.target.result;
    displayCard(name, college, course, photoUrl);
    };
    reader.readAsDataURL(photoFile);
    } else {
    alert("Please fill in all the fields and upload a photo.");
    }
    });
    function displayCard(name, college, course, photoUrl) {
    var card = document.getElementById("id-card");
    var photoElement = document.getElementById("photo-image");
    var nameElement = document.getElementById("student-name");
    var collegeElement = document.getElementById("student-college");
    var courseElement = document.getElementById("student-course");
    photoElement.style.backgroundImage = "url(" + photoUrl + ")";
    nameElement.textContent = "Name: " + name;
    collegeElement.textContent = "College: " + college;
    courseElement.textContent = "Course: " + course;
    card.style.display = "block";
    }    