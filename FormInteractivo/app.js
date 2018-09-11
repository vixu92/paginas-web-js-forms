export class App {
    constructor() {
        this.dom = {
            formInicio : document.querySelector('#formInicio'),
            formFinal : document.querySelector('#formFinal'),
            cbMas : document.querySelector('#mas'),
            slGenero : document.querySelector('#genero')
        }
        this.aGeneros = [
            {value:'', label: ''},
            {value:'P', label: 'Policiaco'},
            {value:'SF', label: 'Ciencia Ficcion'},
            {value:'F', label: 'Fantasia'}
        ]
        this.generosFirst = true
        this.defineHandlers()
        this.crearSelect()
    }

    defineHandlers () {
        this.dom.cbMas.addEventListener('change',
                this.setFormFinal.bind(this))
        this.dom.slGenero.addEventListener('change',
                this.changeGenero.bind(this))
    }

    setFormFinal () {
        this.dom.formFinal.classList.toggle('hide')
    }

    crearSelect() {
        let html = ''
        this.aGeneros.forEach( (item) => {
            html += `<option value="${item.value}">
                        ${item.label}</option>`
        })
        this.dom.slGenero.innerHTML =  html
    }

    changeGenero() {
        if (this.generosFirst) {
            this.aGeneros.shift()
            this.crearSelect()
            this.generosFirst = false
        }
    }
}
