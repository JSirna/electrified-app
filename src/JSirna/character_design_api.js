const baseURL = "hp://localhost:5067/api";
// const URL = "http://localhost:5067/api/get-families";
const button = document.getElementById("get-data");
// const output = document.getElementById("results");
const characterChart = new CharacterChart();


const isValidUrl = (string) => {
    try {
        const newURL = new URL(string)
        return newURL.protocol === "http:" || newURL.protocol === "https:";
    } catch (error) {
        console.error(string + " is not a valid URL: " + error.message);
        return false;
    }
}

const fetchCharacters = async () => {
    let data = {};
    const response = await fetch(`${baseURL}/get-characters`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (!response.ok) {
        console.log(response.status);
        switch (response.status) {
            case 404:
                console.error("Resource not found");
                break;
            case 401:
                console.error("Not authorized to access resource");
                break;
            default:
                console.error("Error fetching resource");
        }
    }
    else
        data = await response.json();
    return data;
}

const fetchCharactersFamilies = async () => {
    let data = {};
    const response = await fetch(`${baseURL}/get-families`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    if (!response.ok) {
        switch (response.status) {
            case 404:
                console.error("Resource not found")
                break;
            case 401:
                console.error("Not authorized to access resource")
                break;
            default:
                console.log("Error fetching resource")
        }
    }
    else
        data = await response.json();
    return data;
}

button.addEventListener('click', async () => {
    // Try fetching the Character info on click
    if (isValidUrl(baseURL)) {
        console.log(isValidUrl(baseURL));
        try {
            const chars = await fetchCharacters();
            console.log("Characters:", chars);
            parseData(chars);
            console.log("Character Chart:", characterChart);
        } catch {
            console.error("Failed to fetch character info.");
        }

        // Try fetching the Character family info on click
        try {
            const fams = await fetchCharactersFamilies();
            console.log("Families:", fams);
        } catch {
            console.error("Failed to fetch character family info.");
        }
    }
    else
        console.error(baseURL + " is not a valid URL.");
    
});

const parseData = (listofObjects) => {
    let listOfCharacters = [];
    console.log(listofObjects)
    for (let i = 0; i < listofObjects.length; i++) {
        characterChart.characterId = listofObjects[i].characterId;
        characterChart.fullName = listofObjects[i].fullName;
        characterChart.reasonForName = listofObjects[i].reasonForName;
        characterChart.nickname = listofObjects[i].nickname;
        characterChart.reasonForNickname = listofObjects[i].reasonForNickname;
        characterChart.birthdate = listofObjects[i].birthdate;
        characterChart.age = listofObjects[i].age;
        characterChart.dateCreated = listofObjects[i].dateCreated ? new Date(listofObjects[i].dateCreated).toDateString() : null;
        listOfCharacters.push(characterChart);
    }
    console.log(listOfCharacters);
    return listOfCharacters;
};