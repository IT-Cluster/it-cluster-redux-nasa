export const getPhotos = (page = 1, date) => {
    const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?&api_key=7niVtOpqCrIelskkO8wVI0yfyApdN9d0jqJpI40w';
    return fetch(`${url}&page=${page}&earth_date=${date}`);
}
