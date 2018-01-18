// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict'

var React = require('react')
var ReasonReact = require('reason-react/src/ReasonReact.js')

var component = ReasonReact.statelessComponent('QA')

function qStr(q) {
    return 'Q: ' + q
}

function aStr(a) {
    return 'A: ' + a
}

function make(question, answer, _) {
    var newrecord = component.slice()
    newrecord[/* render */ 9] = function() {
        return React.createElement(
            'div',
            {
                className: 'qa-item',
            },
            React.createElement(
                'h4',
                {
                    className: 'question',
                },
                'Q: ' + question,
            ),
            React.createElement(
                'div',
                {
                    className: 'answer',
                },
                'A: ' + answer,
            ),
        )
    }
    return newrecord
}

exports.component = component
exports.qStr = qStr
exports.aStr = aStr
exports.make = make
/* component Not a pure module */
