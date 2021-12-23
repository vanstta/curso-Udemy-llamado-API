const jokeUrl = 'https://api.chucknorris.io/jokes/random'
const urlUsuarios= 'https://reqres.in/api/users?page=2'
const obtenerChiste = async() => {

   try {
   const resp = await fetch (jokeUrl);
    if (!resp.ok) throw'Algo fashó';

    const {icon_url, id, value} = await resp.json()


    return {icon_url, id, value};



} catch(err) {
  
        throw err
    }
}


const obtenerUsuarios = async() => {

    const respuesta= await fetch (urlUsuarios);
    const {data:usuarios} = await respuesta.json();
    return usuarios;



}



export {
    obtenerChiste,
    obtenerUsuarios
}