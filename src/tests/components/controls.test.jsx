const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const Controls = require('Controls');

describe('Controls', () => {
    it('should exist', () => {
        expect(Controls).toExist();
    });

    describe('render', () => {
        it('should render pause button when started', () => {
            var controls = TestUtils.renderIntoDocument(<Controls status="started"/>);
            var $element = $(ReactDOM.findDOMNode(controls));
            var $pauseButton = $element.find('button:contains(Pause)');

            expect($pauseButton.length).toBe(1);
        });
        it('should render start button when paused', () => {
            var controls = TestUtils.renderIntoDocument(<Controls status="paused"/>);
            var $element = $(ReactDOM.findDOMNode(controls));
            var $stoppedButton = $element.find('button:contains(Start)');

            expect($stoppedButton.length).toBe(1);
        });
    })
});
