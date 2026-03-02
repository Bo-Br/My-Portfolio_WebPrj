// #################################################################################################
// ----------------------------- GATHER ALL THE SECTIONS IN VARIABLES ------------------------------
// #################################################################################################



const zoneHero = document.querySelector("#hero")
const zoneDegrees = document.querySelector("#degrees")
const zoneCapabilities = document.querySelector("#capabilities")
const zoneWeb = document.querySelector("#webTech")
const zoneLinks = document.querySelector("#links ")

console.log(zoneDegrees)



// #################################################################################################
// ------------------------------------ DATABASE DATA GATHERING ------------------------------------
// #################################################################################################

const dataURL = "/data/database.json"; // json database local URL

// On page loaded this function takes all the info from the json database and loads the main page
addEventListener("DOMContentLoaded", async() =>{
    try{

        const response = await fetch(dataURL); //Standart fetch of the database
        const data = await response.json(dataURL); // standart "json-ification" of the fetched data


        return AboutMeCreatePage(data); // Here it is executing the function to entirely load the page


    }catch(err){ // Standart error catching and loging
        console.log("Error with json database :" + err);
    };
});


//Function to create the About me page
function AboutMeCreatePage(DATABASE){
// Take all the info and put it inside variables

    const degrees = DATABASE.about_tech.stack.degrees;
    const capabilities = DATABASE.about_tech.capabilities;
    const webCards = DATABASE.about_tech.stack.tech
    console.log(webCards);
    createDegrees(degrees);
    createCapabilities(capabilities);
    createWebCards(webCards);
// Use all this info to create the page
    

};

// #################################################################################################
// ---------------------------------- SECTION CREATING FUNCTIONS -----------------------------------
// #################################################################################################

function createDegrees(degrees){
    degrees.forEach(element => {
        zoneDegrees.innerHTML += `
        <div>
            <p>- ${element}</p>
        </div>
        `
    });
}


function createCapabilities(capabilities){
    capabilities.forEach(element => {
        zoneCapabilities.innerHTML += `
        <div>
            <p>- ${element}</p>
        </div>
        `
    });
}

function createWebCards(webCards){
    webCards.forEach(element => {
        zoneWeb.innerHTML += `
        <div class = "fact-card">
            <h3>${element.name}</h3>
            <p>${element.notes}</p>
        </div>
        `
    });
}