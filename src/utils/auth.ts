import axios from "axios";

export const baseUrl = 'https://hanzol-dash-backend.herokuapp.com/api/';
export const baseStorageUrl = 'https://hanzol-dash-backend.herokuapp.com/storage/';
// export const baseUrl = 'http://hanzol-dash-backend.herokuapp.com/api/';

export const headers = (token: string) => {
    return { 'headers': { 'Accept': 'Application/json', 'Authorization': token } };
}

export const userType = async (token: string) => {

    const res = await axios.get(baseUrl + 'user', headers(token));

    return res.data.type;

}

export const currentUser = async (token: string) => {
    const res = await axios.get(baseUrl + 'user', headers(token));

    return res;
}

export const currentTime = () => {
    let currentDate = new Date();
    let cDay = '' + currentDate.getDate();
    let cMonth = '' + (currentDate.getMonth() + 1)
    let cYear = '' + currentDate.getFullYear()

    if (cDay.length < 2) {
        cDay = '0' + cDay;
    }
    if (cMonth.length < 2) {
        cMonth = '0' + cMonth;
    }

    return `${cYear}-${cMonth}-${cDay}`
}

export const subtractTime = (created: string) => {
    const MS_PER_DAY = 1000 * 60 * 60 * 24;
    const now = new Date();
    const pubCreated = new Date(created);
    let difference = Math.abs(now.getTime() - pubCreated.getTime());
    let days = Math.floor(difference / MS_PER_DAY);
    return days === 0 ? 'Recente' : `${days} dias atrás`;
}