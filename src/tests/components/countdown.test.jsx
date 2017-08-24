const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const Countdown = require('Countdown');

describe('Countdown', () => {
    it('should exist', () => {
        expect(Countdown).toExist();
    });

    it('test onSecondsInputFormSubmit() - positive number', (done) => {
        var countdown = TestUtils.renderIntoDocument(<Countdown/>);
        countdown.onSecondsInputFormSubmit(10);

        expect(countdown.state.count).toBe(10);
        expect(countdown.state.status).toBe('started');

        setTimeout(() => {
            expect(countdown.state.count).toBe(9);
            done();
        }, 1001);
    });
    it('test onSecondsInputFormSubmit() - nagative number', (done) => {
        var countdown = TestUtils.renderIntoDocument(<Countdown/>);
        countdown.onSecondsInputFormSubmit(3);

        setTimeout(() => {
            expect(countdown.state.count).toBe(0);
            expect(countdown.state.status).toBe('stopped');
            done();
        }, 4001);
    });
})
