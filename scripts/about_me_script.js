// 
const main_container = document.querySelector("#main_page_container"); // the container of th edivs on the main page
const dataURL = "/data/database.json"; // json database local URL

// On page loaded this function takes all the info from the json database and loads the main page
addEventListener("DOMContentLoaded", async() =>{
    try{

        const response = await fetch(dataURL); //Standart fetch of the database
        const data = await response.json(dataURL); // standart "json-ification" if the fetched data

        return mainPageCreateDivs(data); // Here it is executing the function to load the divs on the main page
        

    }catch(err){ // Standart error catching and loging
        console.log("Error with json database :" + err);
    };
});


//Function to create the About me page
function AboutMeCreatePage(DATABASE){
    DATABASE.about_me.forEach(element => { //For each element in the start_page data of the database

    main_container.innerHTML += `
        <div class = "main_page_card">
            <h2>${element.title}</h2>
            <img src="" alt="">
            <p>${element.description}</p>
        </div>` ; // Creating the div and adding it into the HTML file

    });

};