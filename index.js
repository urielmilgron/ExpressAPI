//requerimos el framework como siempre
const express = require('express')

const app = express()
const morganFreeman = require('morgan')
const PUERTO = 3000
//Configuraciones o setting
app.set('port', process.env.PORT || PUERTO) //Seteamos el puerto del hosting y si no hay, ponemos el 3000.
app.use(express.static('public'));
//Middlewares son funciones que procesan la info antes de lanzarla al sv
app.use(morganFreeman('dev')) //Le damos un parámetro, estos te dan diferentes respuestas en consola sobre la request.
app.use(express.json()) //Nos permite utilizar json y hacer que el sv entienda este formato, Analiza las solicitudes entrantes con cargas JSON y se basa en body-parser .
app.use(express.urlencoded({extended:false})) //es un método incorporado en Express para reconocer el objeto de solicitud entrante como cadenas o matrices

//Routes
app.get(require('./src/routes/route'))


//localhost:3000 => Para escuchar ver si funca el server.
app.listen(app.get('port'), () => { //app.get => obtiene el puerto que creamos en set.
console.log(`Mira como prendió esta maquinola en el puerto iguazú`)
})