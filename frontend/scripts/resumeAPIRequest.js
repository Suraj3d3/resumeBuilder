// getting create resume button from form.html and adding event listener on that
let createResumeBtn = document.getElementById("formSubmitBtn");

createResumeBtn.addEventListener("click", () => {
  const data = JSON.stringify(resumeDetails);
  document.getElementById("ResumeDetailsHiddenInp").value = data;
  document.getElementById("resumeDetailsSubmitForm").action =
    "http://127.0.0.1:5000/resume?templateId=" + localStorage.templateID;

  localStorage.clear();
  $("#resumeDetailsSubmitForm").submit();
  // sendResumeObject();
});

function sendResumeObject() {
  //getting resumeDetails variable from form.js (combineAllDetails method)
  const data = resumeDetails;

  fetch("http://127.0.0.1:5000/api/resume", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.text())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
