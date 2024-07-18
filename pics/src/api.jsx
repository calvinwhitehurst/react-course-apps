import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID vZ2kE4Ii4EyK_MW55RwJwuohkBg9uUvs8nluPmVcHsQ',
        },
        params: {
            query: term,
        },
    });
    return response.data.results;
};

export default searchImages;