export class Tarea {

    constructor(data) {
        this.name = data.name
        this.isComplete = data.isComplete
        this.nodoCheck = document.querySelector('#isCompleta')
        this.nodoBorrar = document.querySelector('#btnBorrar')
        console.log(this.nodoCheck, this.nodoBorrar )
    }

    renderTarea() {

        
        let htmlView = `
            <li>
            <input type="checkbox" name="isCompleta" id="isCompleta"
                ${this.isComplete ? 'checked' : '' }>
            <span class="nombreTarea">${this.name}</span>
            <span id="btnBorrar" class="borrarTarea">🗑️</span>
            </li>
        `
        return htmlView
    }
}