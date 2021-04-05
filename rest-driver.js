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
        let url = route.includes('http') ? route : this.endpoint + route
        url = this.forceHttps(url.toLowerCase())
        console.log('fetching ' + url)
        return fetch(url + (url.includes('?') ? '' : (params != '' ? '?' + params : '')), {
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

    forceHttps(url) {
        if (url.includes('https')) {
            return url
        } else {
            return url.replace('http', 'https')
        }
    }
}