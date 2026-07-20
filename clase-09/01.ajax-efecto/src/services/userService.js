import httpClient from "../utils/http-client"


const url = 'https://jsonplaceholder.typicode.com/users/'

// CRUD REST API

// getUsers -> GET ALL
// getByID -> GET ONE
// createUser -> POST
// updateUser -> PUT
// deleteUser -> DELETE

const userService = () => {

    const getUsers = async () => {

         try {
      
            const usuariosjsonp = await httpClient(url)
            //console.log(usuariosjsonp)
            return usuariosjsonp
            
        } catch (error) {
            console.error(error)
        }

    }

    const getByID = () => {

    }

    const createUser = () => {

    }

    return {
        getUsers,
        getByID,
        createUser
    }

  }

export default userService