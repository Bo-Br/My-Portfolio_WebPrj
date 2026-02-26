// #################################################################################################
// ----------------------------- GATHER ALL THE SECTIONS IN VARIABLES ------------------------------
// #################################################################################################



const zoneAbout = document.querySelector("#hero")
const zoneHobbyes = document.querySelector("#hobbyes")
const zoneQuote = document.querySelector("#quote")
const zoneFunFacts = document.querySelector("#fun_facts")
const zoneCountries = document.querySelector("#visited_coutries ")

console.log(zoneCountries)



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

    const hero = DATABASE.about_me[0].hero 
    const hobbyes = DATABASE.about_me[1].hobbyes
    const quote = DATABASE.about_me[2].quote
    const fun_facts = DATABASE.about_me[3].fun_facts
    const countries = DATABASE.about_me[4].visited_countries

// Use all this info to create the page
    
    createHobbiesZone(hobbyes)
    createQuoteZone(quote)
    createFunFactsZone(fun_facts)
    createCountries(countries)
    createHeroZone(hero)
};

// #################################################################################################
// ---------------------------------- SECTION CREATING FUNCTIONS -----------------------------------
// #################################################################################################


function createQuoteZone(quote){
// Adding the quote zone
    zoneQuote.innerHTML += `
            <h3 id = "quote_text"> ${quote} </h3>
        ` ;
};

function createFunFactsZone(fun_facts){
// Adding Fun Facts
    fun_facts.forEach(fact => {
        zoneFunFacts.innerHTML += `
        <div class = "fact-card">
            <h3> ${fact.title} </h3>
            <img src="${fact.image}" alt="">
            <p> ${fact.info_1} </p>
            <p> ${fact.info_2} </p>
        </div>
        ` ;
    });
};


function createCountries(countries){
// Adding visited Countries
    countries.forEach(country => {
        zoneCountries.innerHTML += `
        <div class = "small-card">
            <h3> ${country} </h3>
        </div>
        ` ;
    });
};

function createHeroZone(hero){
    // Adding the Hero Zone
    zoneAbout.innerHTML += `
    <div id = "imageAndText" class = "cardBox">
        <img src="${hero.photo}" alt="">
        <div>
            <h3> Who am I? </h3>
            <p> ${hero.fast_description} </p>
        </div>
    </div>
        ` ;
};

function createHobbiesZone(hobbyes){
// adding the hobbyes
    hobbyes.forEach(element => {
        zoneHobbyes.innerHTML += `
        <div class = "small-card">
            <h3> ${element} </h3>
        </div>
        ` ;
    });
};
