export const formatDateOfBirth = (rawDate: string| number | Date) => {
    let date = new Date(rawDate);

    let year = date.getFullYear();
    let month: number | string | Date = date.getMonth() + 1;
    let day: number | string | Date = date.getDate();

    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;

    return `${day}.${month}.${year}`;
};