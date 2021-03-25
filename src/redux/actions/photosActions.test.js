import { getPhotosSuccess } from './photosActions';

describe('Photos actions', () => {
   it('returns getPhotosSuccess', () => {
       const result = getPhotosSuccess({foo: 'bar'});
       expect(result).toEqual({type: 'FETCH_PHOTOS_SUCCESS', payload: {foo: 'bar'}})
   });
});
