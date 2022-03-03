import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async(url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '563165fd77msh712d357bbad73a3p146d2ejsn66cbec4e9173'
        }
    })

    return data;
}