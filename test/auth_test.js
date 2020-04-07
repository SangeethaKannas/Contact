const auth = require('../middleware/auth');

describe('auth', (){
    it('Should exist', () {
        expect(auth).toBeDefined();
    });
    it('Should be a function', () {
        expect(typeof auth).toBe('function');
    })
});