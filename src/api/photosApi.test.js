import { getPhotos } from './photosApi';

describe("Photos API", () => {
    beforeEach(() => {
        jest.spyOn(global, "fetch").mockImplementation(() => {
            return new Promise(resolve => {
                setTimeout(() => resolve({bar: 'foo'}), 5);
            });
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe("check fetch url", () => {

        it("should pass correct params to fetch for page = 1", () => {
            getPhotos(1, 'some_date');
            expect(global.fetch).toHaveBeenCalledTimes(1);
            expect(global.fetch).toHaveBeenCalledWith(
                'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?&api_key=7niVtOpqCrIelskkO8wVI0yfyApdN9d0jqJpI40w&page=1&earth_date=some_date'
            );
        });

        it("should pass correct params to fetch page = 2", () => {
            getPhotos(2, 'some_date');
            expect(global.fetch).toHaveBeenCalledTimes(1);
            expect(global.fetch).toHaveBeenCalledWith(
                'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?&api_key=7niVtOpqCrIelskkO8wVI0yfyApdN9d0jqJpI40w&page=2&earth_date=some_date'
            );
        });
    });

    describe("check API response", () => {

        it("should return correct data (test with async)", async () => {
            const result = await getPhotos(1, 'some_date');
            expect(result).toEqual({bar: 'foo'});
        });

        it("should return correct data (test with resolve)", () => {
            const result = getPhotos(1, 'some_date');
            return expect(result).resolves.toEqual({bar: 'foo'});
        });
    });
});
