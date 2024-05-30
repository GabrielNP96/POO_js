//classe para salvar herois

class hero {
    name;
    codename;
    coreTeam;
    nationality;

    constructor(name, codename, coreTeam, nationality) {
        this.name = name;
        this.codename = codename;
        this.coreTeam = coreTeam;
        this.nationality = nationality;
    }

    CharacterSheet() {
        console.log(`Nome: ${this.name} \n`)
    }
}