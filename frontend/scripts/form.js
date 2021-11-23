function printEducationDetails(event){
    // removing default property of form to prevent page refresh    
    event.preventDefault()
    
    // getting all the filled details and storing it into a temp array
    var data = $(".eduValue");
    let arr = []
    for(let i=0;i<data.length;i++){
        arr.push(data[i].value)
    }

    // arrya destructuring to store details in separeate variable
    let [institute,university,degree,startYear,endYear,percentage] = arr;
     
    //validation before dynamic div creation
    if(!institute || !university || !degree || !startYear || !endYear || !percentage){
        alert("You are missing few fields in education details!")
        return;
    }

    //creating a div to show demo of filled details to user
    let id = Math.random().toString(36).substring(7); //random id

    // setting a ID for each div
    var eduDiv = $("<div>", {"id": id});

    // creating a div inside  eduDemoContainer
    $("#eduDemoContainer").append(eduDiv)

    // applying css on newly created div with random id
    $(`#${id}`).css({"background-color": "#207398",
          "color":"#fff",
          "min-height":"100px",
          "width":"100%",
          "margin-top":"20px",
          "padding":"3px",
          'box-shadow': '5px 5px 10px #a1a1a1',
          'border-radius' : "5px"
        })

    // appending educational details in  newly created div with random id
    $(`#${id}`).append(`<span> <b> ${institute} </b> &nbsp; &nbsp; |  ${startYear}-${endYear} </span>`)
    $(`#${id}`).append(`<br> <hr> <span> ${university} &nbsp; | &nbsp; ${degree}  &nbsp; | &nbsp; ${percentage}% </span>`)


    // clearing form to fill details again
    for(let i=0;i<data.length;i++){
        data[i].value=""
    }

}


function printExperienceDetails(event){
    // removing default property of form to prevent page refresh    
    event.preventDefault()

    // getting all the filled details and storing it into a temp array
    var experienceData = $(".expValue");
    let expArr = []
    for(let i=0;i<experienceData.length;i++){
        expArr.push(experienceData[i].value)
    }

    // arrya destructuring to store details in separeate variable
    let [organisation,jobProfile,skills,startDate,endDate,jobDescription] = expArr;
     
    //validation before dynamic div creation
    if(!organisation || !jobProfile || !skills || !startDate || !endDate || !jobDescription){
        alert("You are missing few fields in professional experience details!")
        return;
    }

    //creating a div to show demo of filled details to user
    let id = Math.random().toString(36).substring(7); //random id

    // setting a ID for each div
    var expDiv = $("<div>", {"id": id});

    // creating a div inside  eduDemoContainer
    $("#experienceDemoContainer").append(expDiv)

    // applying css on newly created div with random id
    $(`#${id}`).css({"background-color": "#207398",
          "color":"#fff",
          "min-height":"100px",
          "width":"100%",
          "margin-top":"20px",
          "padding":"3px",
          'box-shadow': '5px 5px 10px #a1a1a1',
          'border-radius' : "5px"
        })

    // appending educational details in  newly created div with random id
    $(`#${id}`).append(`<span> <b> ${organisation} </b> &nbsp; &nbsp; |  ${startDate} to ${endDate} </span>`)
    $(`#${id}`).append(`<br> <hr> <span> <i> ${jobProfile} </i> </br><hr> <b>Skills : </b>  ${skills}  </br><hr> ${jobDescription} </span>`)


    // clearing form to fill details again
    for(let i=0;i<experienceData.length;i++){
        experienceData[i].value=""
    }

}

function printInternshipDetails(event){
    // removing default property of form to prevent page refresh    
    event.preventDefault()

    // getting all the filled details and storing it into a temp array
    var internshipData = $(".internshipsValue");
    let internArr = []
    for(let i=0;i<internshipData.length;i++){
        internArr.push(internshipData[i].value)
    }

    // arrya destructuring to store details in separeate variable
    let [organisation,role,skills,startDate,endDate,jobDescription] = internArr;
     
    //validation before dynamic div creation
    if(!organisation || !role || !skills || !startDate || !endDate || !jobDescription){
        alert("You are missing few fields in internship details!")
        return;
    }

    //creating a div to show demo of filled details to user
    let id = Math.random().toString(36).substring(7); //random id

    // setting a ID for each div
    var internDiv = $("<div>", {"id": id});

    // creating a div inside  eduDemoContainer
    $("#internshipDemoContainer").append(internDiv)

    // applying css on newly created div with random id
    $(`#${id}`).css({"background-color": "#207398",
          "color":"#fff",
          "min-height":"100px",
          "width":"100%",
          "margin-top":"20px",
          "padding":"3px",
          'box-shadow': '5px 5px 10px #a1a1a1',
          'border-radius' : "5px"
        })

    // appending educational details in  newly created div with random id
    $(`#${id}`).append(`<span> <b> ${organisation} </b> &nbsp; &nbsp; |  ${startDate} to ${endDate} </span>`)
    $(`#${id}`).append(`<br> <hr> <span> <i> ${role} </i> </br><hr> <b>Skills : </b>  ${skills}  </br><hr> ${jobDescription} </span>`)


    // clearing form to fill details again
    for(let i=0;i<internshipData.length;i++){
        internshipData[i].value=""
    }

}



function printProjectDetails(event){
    // removing default property of form to prevent page refresh    
    event.preventDefault()

    // getting all the filled details and storing it into a temp array
    var projectData = $(".projectValue");
    let projectArr = []
    for(let i=0;i<projectData.length;i++){
      projectArr.push(projectData[i].value)
    }


    // arrya destructuring to store details in separeate variable
    let [projectTitle,technologies,projectDescription] = projectArr;
     

    //validation before dynamic div creation
    if(!projectTitle || !technologies || !projectDescription ){
        alert("You are missing few fields in project details!")
        return;
    }

    //creating a div to show demo of filled details to user
    let id = Math.random().toString(36).substring(7); //random id

    // setting a ID for each div
    var projectDiv = $("<div>", {"id": id});

    // creating a div inside  eduDemoContainer
    $("#projectDemoContainer").append(projectDiv)

    // applying css on newly created div with random id
    $(`#${id}`).css({"background-color": "#207398",
          "color":"#fff",
          "min-height":"100px",
          "width":"100%",
          "margin-top":"20px",
          "padding":"3px",
          'box-shadow': '5px 5px 10px #a1a1a1',
          'border-radius' : "5px"
        })

    // appending educational details in  newly created div with random id
    $(`#${id}`).append(`<span> <b> ${projectTitle} </b> </span>`)
    $(`#${id}`).append(`<br> <hr> <span> <i> ${projectDescription} </i> <br> <hr> <b>Technologies : </b>  ${technologies} </span>`)


    // clearing form to fill details again
    for(let i=0;i<projectData.length;i++){
      projectData[i].value=""
    }

}

function printCertificateDetails(event){
    // removing default property of form to prevent page refresh    
    event.preventDefault()

    // getting all the filled details and storing it into a temp array
    var certData = $(".certValue");
    let certArr = []
    for(let i=0;i<certData.length;i++){
      certArr.push(certData[i].value)
    }

    // arrya destructuring to store details in separeate variable
    let [certName,certOrganisation,validTill,certDescription] = certArr;

    //validation before dynamic div creation
    if(!certName || !certOrganisation || !validTill || !certDescription ){
        alert("You are missing few fields in certification details!")
        return;
    }

    //creating a div to show demo of filled details to user
    let id = Math.random().toString(36).substring(7); //random id

    // setting a ID for each div
    var certDiv = $("<div>", {"id": id});

    // creating a div inside  eduDemoContainer
    $("#certificationDemoContainer").append(certDiv)

    // applying css on newly created div with random id
    $(`#${id}`).css({"background-color": "#207398",
          "color":"#fff",
          "min-height":"100px",
          "width":"100%",
          "margin-top":"20px",
          "padding":"3px",
          'box-shadow': '5px 5px 10px #a1a1a1',
          'border-radius' : "5px"
        })

    // appending educational details in  newly created div with random id
    $(`#${id}`).append(`<span> <b> ${certName} </b> &nbsp; &nbsp;   valid till: ${validTill} </span>`)
    $(`#${id}`).append(`<br> <span> <i> ${certOrganisation} </i> </br> <hr> <b>Skills : </b>  ${certDescription}  </span>`)


    // clearing form to fill details again
    for(let i=0;i<certData.length;i++){
      certData[i].value=""
    }

}