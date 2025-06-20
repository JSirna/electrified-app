const baseURL = "http://localhost:5067/api";
// const URL = "http://localhost:5067/api/get-families";
const button = document.getElementById("get-data");
// const output = document.getElementById("results");
const characterChart = new CharacterChart();

const fetchCharacters = async () => {
    let data = {};
    try {
        const response = await fetch(`${baseURL}/get-characters`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        data = await response.json();
        return data;
    }
    catch (error) {
        console.error("Error fetching characters:", error.message);
    }
}

const fetchCharactersFamilies = async () => {
    let data = {};
    try {
        const response = await fetch(`${baseURL}/get-families`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        data = await response.json();
        return data;
    }
    catch (error) {
        console.error("Error fetching characters:", error.message);
    }
}

button.addEventListener('click', async () => {
    try {
        const fams = await fetchCharactersFamilies();
        const chars = await fetchCharacters();
        console.log("Characters:", chars);
        console.log("Families:", fams);
        parseData(chars);
        console.log("Character Chart:", characterChart);
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
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