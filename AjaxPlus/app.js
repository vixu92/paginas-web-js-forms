
import { FILE } from './config.js'
import { AjaxService } from './ajax-service.js';

export class App {
    constructor () {
        this.ndBtnDatos = document.querySelector('#btnDatos')
        this.ndOutput = document.querySelector('#output')

        this.ndBtnDatos.addEventListener('click', 
            this.pedirDatos.bind(this))
    }

    pedirDatos(){
        new AjaxService('GET', FILE)
    }
}
  
    function pedirDatos() {
        console.dir(FILE)

        function mostrarDatos() {
            console.log(ajax.readyState)
            let oDatos
            let html

            if(ajax.readyState === 4) {
                console.log(ajax.status)
                if(ajax.status === 200) {
                    oDatos = JSON.parse(ajax.responseText)
                    console.dir(oDatos) 
                    html = '<ul>'
                    for (const key in oDatos) {
                        if (oDatos.hasOwnProperty(key)) {
                            const value = oDatos[key];
                            html += `<li>${key} : ${value}</li>`    
                        }
                    }
                    html += '</ul>'
                    document.querySelector('#output')
                    .innerHTML = html
                } else {
                    document.querySelector('#output')
                    .innerHTML = ajax.status + ' : ' +
                    ajax.statusText
                } 
            }
        }
    }

