class FrontEndDEveloper {
    constructor(name){
        this.name = name
        this.type= 'fronted dev'
    }
}

class BackEndDEveloper {
    constructor(name){
        this.name = name
        this.type= 'backend dev'
    }
}

class DeveloperFactory {
    create(name, type) {
        switch(type) {
            case 1:
                return new FrontEndDEveloper(name)

            break;

            case 2:
                return new BackEndDEveloper(name)
        }
    }
}

const developerFactory = new DeveloperFactory()
const developers = []

developers.push(developerFactory.create('Guillermo', 1));
developers.push(developerFactory.create('René', 2));

console.log(developers);