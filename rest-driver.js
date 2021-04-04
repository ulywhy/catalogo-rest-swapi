export class RestDriver {

    /*
     * constructor
     * recibe la url del endpoint para conectarse
     */
    constructor(endpoint = 'https://swapi.dev/api') {
        //endpoint de la base de datos del catalogo
        this.endpoint = endpoint
    }

    doGet(route, params = '') {
        return fetch(this.endpoint + route + (params != '' ? '?' + params : ''), {
                method: 'GET',
                mode: 'cors'
            })
            .then(response => response.json())
            .then(json => {
                console.log(json)
                return json
            })
            .catch(err => {
                return fetch(this.endpoint + route + (params != '' ? '?' + params : ''), {
                        method: 'GET',
                        mode: 'cors',
                        headers: { 'Access-Control-Allow-Origin': '*' }
                    })
                    .then(response => response.json())
                    .then(json => {
                        console.log(json)
                        return json
                    })
                    .catch(err => console.log(err))
            })
    }
}