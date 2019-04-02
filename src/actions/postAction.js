//CREATE A FUNCTION THAT RETURN AN ACTION
export const deletePost = (id) =>{
    return {
        type: 'DELETE_POST',
        id: id
    }
}