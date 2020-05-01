/*
 * Globalize Culture sr-RS
 *
 * https://raw.githubusercontent.com/nikgraf/jquery-global/master/globinfo/Globalization.de.js
 *
 */

(function( window, undefined ) {

var Globalize;

if ( typeof require !== "undefined" &&
	typeof exports !== "undefined" &&
	typeof module !== "undefined" ) {
	// Assume CommonJS
	Globalize = require( "globalize" );
} else {
	// Global variable
	Globalize = window.Globalize;
}

Globalize.addCultureInfo("de", "default", {
    name: "de",
    englishName: "German (Germany)",
    nativeName: "Deutsch (Deutschland)",
    language: "de",
    numberFormat: {
        ',': ".",
        '.': ",",
        percent: {
            pattern: ["-n%","n%"],
            ',': ".",
            '.': ","
        },
        currency: {
            pattern: ["-n $","n $"],
            ',': ".",
            '.': ",",
            symbol: "€"
        }
    },
    calendars: {
        standard: {
            '/': ".",
            firstDay: 1,
            days: {
                names: ["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"],
                namesAbbr: ["So","Mo","Di","Mi","Do","Fr","Sa"],
                namesShort: ["So","Mo","Di","Mi","Do","Fr","Sa"]
            },
            months: {
                names: ["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember",""],
                namesAbbr: ["Jan","Feb","Mrz","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez",""]
            },
            AM: null,
            PM: null,
            eras: [{"name":"n. Chr.","start":null,"offset":0}],
            patterns: {
                d: "dd.MM.yyyy",
                D: "dddd, d. MMMM yyyy",
                t: "HH:mm",
                T: "HH:mm:ss",
                f: "dddd, d. MMMM yyyy HH:mm",
                F: "dddd, d. MMMM yyyy HH:mm:ss",
                M: "dd MMMM",
                Y: "MMMM yyyy"
            }
        }
    }
});

}(this));
