let expect = require('expect');

let {generateMessage} = require('./message');

describe('generate message', () => {
    it('should generate the correct message object', () => {
        let from = 'boris@gmail.com';
        let text = 'dje si sto cinis?'
        let message = generateMessage(from, text);
        expect(message.text).toBe(text);
        expect(message.from).toBe(from);
        expect(message.createdAt).toBeA('number');
    })
});