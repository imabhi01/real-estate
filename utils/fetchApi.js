import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async(url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'f0b22c6ed4mshc435b622fa144fcp111eeajsn99015e070a78'
        }
    });

    return data;
}