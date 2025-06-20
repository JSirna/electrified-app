class CharacterChart {
    constructor() {
        this.characterId = null;
        this.fullName = null;
        this.reasonForName = null;
        this.nickname = null;
        this.reasonForNickname = null;
        this.birthdate = null;
        this.age = null;
        this.dateCreated = null;
    }
    static fromjson_data(json_data) {
        const chart = new CharacterChart();
        chart.characterId = json_data.characterId || null;
        chart.fullName = json_data.fullName || null;
        chart.reasonForName = json_data.reasonForName || null;
        chart.nickname = json_data.nickname || null;
        chart.reasonForNickname = json_data.reasonForNickname || null;
        chart.birthdate = json_data.birthdate || null;
        chart.age = json_data.age || null;
        chart.dateCreated = json_data.dateCreated ? new Date(json_data.dateCreated) : null;
        return chart;
    }
}