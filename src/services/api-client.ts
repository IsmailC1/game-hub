import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '64da6728c9b04d659cd86dc761ee0d92'
    }
})