const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const SecondsInputForm = require('SecondsInputForm');

describe('SecondsInputForm', () => {
    it('should exist', () => {
        expect(SecondsInputForm).toExist();
    });

    it('should call onSubmitHandler if valid input', () => {
        var seconds = '109';

        var spy = expect.createSpy();
        var inputForm = TestUtils.renderIntoDocument(<SecondsInputForm onSubmitHandler={spy}/>);
        var $element = $(ReactDOM.findDOMNode(inputForm));

        inputForm.refs.seconds.value = seconds;
        TestUtils.Simulate.submit($element.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(109);
    });
    it('should not been call onSubmitHandler because of invalid input', () => {
        var invalid = ['', 'a'];

        var spy = expect.createSpy();
        var inputForm = TestUtils.renderIntoDocument(<SecondsInputForm onSubmitHandler={spy}/>);
        var $element = $(ReactDOM.findDOMNode(inputForm));

        invalid.forEach(function (item) {
            console.log('test using: "' + item + '"');
            inputForm.refs.seconds.value = item;
            TestUtils.Simulate.submit($element.find('form')[0]);

            expect(spy).toNotHaveBeenCalled();
        })
    });
})
