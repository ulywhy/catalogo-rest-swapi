export class RestDriver {

    /*
     * constructor
     * recibe la url del endpoint para conectarse
     */
    constructor(endpoint = 'https://swapi.dev/api') {
        //endpoint de la base de datos del catalogo
        this.endpoint = endpoint
            //headers para usar como defaults en los requests
        this.defaultHeader = { 'Content-Type': 'application/json' }
    }

    doGet(route, params = '', headers = this.defaultHeader) {
        console.log(route)
        route = 'https://swapi.dev/api/starships'
        return fetch(this.endpoint + route + (params != '' ? '?' + params : ''), {
                method: 'GET',
                mode: 'cors',
                headers: headers
            })
            .then(response => response.json())
            .then(json => {
                console.log(json)
                return json
            })
            .catch(err => console.log(err))
    }
}