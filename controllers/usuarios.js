const{response, request}=require('express');

const usuariosGet=(req=request, res=response)=> {
    //res.send('Hello Worldddd')
    const {q, nombre='no name',limit}=req.query;   // ej http://localhost:4000/api/usuarios?q=hola&nombre=susto
    res.json({
         msg:'get Api - controlador',
         q,nombre,limit
    });
  }

  const usuariosPut=(req, res=response)=> {

    const {id}=req.params;  //nos devuelve el valor puesto de parametro en url ej: usuarios/api/1
    res.json({
         msg:'put Api - controlador',
         id
   });
 }

  const usuariosPost=(req, res=response)=> {
    const{nombre, edad}=req.body;
    res.json({
                msg:'post Api - controlador',
                nombre, edad
    });
  }

  const usuariosDelete=(req, res=response)=> {
    res.json({
         msg:'delete Api - controlador'
   });
 }

 const usuariosPatch=(req, res=response)=> {
    res.json({
         msg:'patch Api - controlador'
   });
 }

  module.exports={
      usuariosGet,
      usuariosPut,
      usuariosPost,
      usuariosDelete,
      usuariosPatch
  }