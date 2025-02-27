import  axios  from 'axios';
export const CarService = {
    async getAll(){
    const response = await axios.get('http://localhost:3000/cars');
    return response.data;
    },
    async getById(id) {
    const response = await axios.get(`http://localhost:3000/cars/${id}`);
    return response.data;
    },

    async create(data) {
    const response = await axios.post('http://localhost:3000/cars', data);
    return response.data;
    },

}









