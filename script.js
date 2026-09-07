const teachers = {
    "001": "Prof. Priya Ma'am",
    "002": "Prof. Sneha Ma'am",
    "003": "Prof. Aarti Ma'am",
    "004": "Prof. Pooja Ma'am",
    "005": "Prof. XYZ Ma'am"
};


// Get teacher ID from URL
const urlParams = new URLSearchParams(window.location.search);
const teacherID = urlParams.get("teacher");


// Find teacher name
const teacherName = teachers[teacherID] || "Our Esteemed Teacher";


// Display teacher name
document.getElementById("teacherName").textContent = teacherName;
