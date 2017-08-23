const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const Clock = require('Clock');

describe('Clock', () => {
    it('should exist', () => {
        expect(Clock).toExist();
    });

    describe('Format Seconds', () => {
        it('should format seconds', () => {
            var clock = TestUtils.renderIntoDocument(<Clock/>);
            var seconds = 615;
            var expected = '10:15';
            var actual = clock.formatSeconds(seconds);

            expect(actual).toBe(expected);
        });
        it('should format seconds when minutes is less than 10', () => {
            var clock = TestUtils.renderIntoDocument(<Clock/>);
            var seconds = 81;
            var expected = '01:21';
            var actual = clock.formatSeconds(seconds);
            expect(actual).toBe(expected);
        });
        it('should format seconds when seconds is less than 10', () => {
            var clock = TestUtils.renderIntoDocument(<Clock/>);
            var seconds = 3001;
            var expected = '50:01';
            var actual = clock.formatSeconds(seconds);
            expect(actual).toBe(expected);
        });
        it('should format seconds when minutes and seconds are less than 10', () => {
            var clock = TestUtils.renderIntoDocument(<Clock/>);
            var seconds = 61;
            var expected = '01:01';
            var actual = clock.formatSeconds(seconds);
            expect(actual).toBe(expected);
        });
    });
});
