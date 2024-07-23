const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
let usuarios =[
    {id: 1, nombre: 'Roberth'},
    {id: 2, nombre: 'Ana'}
]
app.get('/usuarios', (req,res) =>{
    res.json(usuarios)
})

app.post('/agregar', (req,res) =>{
    const {nombre} = req.body;
    const nuevoUsuairo = {id: usuarios.length + 1, nombre};
    usuarios.push(nuevoUsuairo);
    res.status(201).json(nuevoUsuairo)

})

app.put('/usuarios/:id', (req,res) =>{
    const {id} = req.params;
    const {nombre} = req.body;
    const usuario = usuarios.find(u => u.id == id)
    
    if(usuario){
        usuario.nombre = nombre;
        res.json(usuario)
    }else{
        res.status(404).send('Usuario no encontrado')
    }
})

app.delete('/usuarios/:id', (req,res) =>{
    const {id} = req.params;
    usuarios = usuarios.filter(u => u.id != id)
    res.status(204).send();
})


app.listen(port, () =>{
    console.log('Servidor esta siendo escucnado');
})