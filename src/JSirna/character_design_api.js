const baseURL = "http://localhost:5067/api";


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
    const response = await fetch(`${baseURL}/character`, {
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
    else {
        data = await response.json();
        console.log(data);
        document.getElementById('results').textContent = JSON.stringify(data);
    }
    return data;
}

const fetchCharactersFamilies = async () => {
    let data = {};
    const response = await fetch(`${baseURL}/family`, {
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

function saveCharacter() {
    let data = {};
    /* DATA */
    let fullname = document.getElementById('fullname').value;
    let reasonName = document.getElementById('reasonName').value;
    let nickname = document.getElementById('nickname').value;
    let reasonNickname = document.getElementById('reasonNickname').value;
    let bdate = document.getElementById('bdate').value;

    /*****/
    data = {
        fullname: fullname,
        reasonName: reasonName,
        nickname: nickname,
        reasonNickname: reasonNickname,
        birthdate: bdate
    };
    return data;
}

async function postCharacterChart() {
    const URL = 'https://localhost:7100/api/character';
    const data = saveCharacter();
    try {
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Indicate the type of data being sent
            },
            body: JSON.stringify(data)
        });
        if (response.ok) {
            const responseData = await response.json(); // Parse the JSON response
            console.log('Success:', responseData);
            return responseData;
        }
    } catch (error) {
        console.log(error.message);
    }
}

// TODO: Calculate Age
const calculateAge = () => {
    //calculate here
};