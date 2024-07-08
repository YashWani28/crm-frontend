
export const convert = (apiDateString)=>{

    const formatDate = (date) => {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero indexed
        const year = date.getFullYear();
        return `${year}-${month}-${day}`;
    };

    const apiDate = new Date(apiDateString);

    const formattedApiDate = formatDate(apiDate);
    return formattedApiDate;
}







