import { FILE } from './config.js'

function main () {
    document.querySelector('#btnDatos')
    .addEventListener('click', pedirDatos)

    /* document.querySelector('#btnDatos')
        .onclick = pedirDatos*/

    function pedirDatos() {
        console.dir(FILE)

        let ajax = new XMLHttpRequest()
        console.dir(ajax)
        ajax.onreadystatechange = mostrarDatos

        ajax.open('GET',FILE)
        ajax.send(null)

        function mostrarDatos() {
            console.log(ajax.readyState)

            if(ajax.readyState === 4) {
                console.log(ajax.status)
                if(ajax.status === 200){
                    console.log(ajax.responseText) 
                    document.querySelector('#output').innerHTML = ajax.responseText

                }
            }
        }

    }
}

document.addEventListener('DOMContentLoaded', main)