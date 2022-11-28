"use strict";
/* 
 * MakeEditArea expects a parameter object with the following inputs: 
 *     inputSpecs: array of objects (one object per field the user is supposed to type in)
 *     successCallBack:  consumer function to be called if the user clicks submit and all 
 *         inputs pass validation (Provider code will pass an object full of user inputs -- 
 *         to the consumer successCallBack function). 
 *     cancelCallBack: consumer function to be called if the user clicks cancel. 
 *     editObj: if provided, the input tags of the edit area will be prefilled with the 
 *         values from editObj (and updated with validated user input upon submit).
 * 
 * MakeEditArea returns a div that contains a prompt, an input box, and a 
 * possible error message for each field it is supposed to get from the user. 
 * It also has a submit button, a cancel button, and a record level message. 
 * 
 * Here are the properties expected in inputSpec objects (example object):
 *    "prompt": "User Email: ",      --> prompt for the input tag
 *    "fieldName": "userEmail",      --> fieldName for the input tag
 *    "dataType": "string",          --> dataType (string, date, number, or integer)
 *    "minLen": 1, // required field --> minLen 0 means optional, else means required
 *    "maxLen": 50                   --> maxLen will be checked if provided              
 *    
 * NOTE: MakeEditArea does not expect any particular field names. It can edit any object
 * based on the field names defined (in input parameter 'inputSpecs'). 
 */

function MakeEditArea(params) {

    // defensive (provider style) programming. First check if params has everything we need...
    if (!params.inputSpecs || !params.inputSpecs[0]) {
        var errorMsg = "MakeEditArea did not receive a parameter property named 'inputSpecs'\n" +
                "that has at least one object (that defines one input field).";
        alert(errorMsg); // this would generally be a programmer error, not user error
        throw errorMsg;
        return;
    }
    var inputSpecs = params.inputSpecs;


    if (!params.successCallBack || !(params.successCallBack instanceof Function)) {
        var errorMsg = "MakeEditArea did not receive a parameter property named 'successCallBack',\n" +
                "a Consumer function that will be called (passing an object full of user entered data)\n" +
                "if the user clicks 'Submit' and all the inputs validate.";
        alert(errorMsg); // this would generally be a programmer error, not user error
        throw errorMsg;
        return;
    }
    var successCallBack = params.successCallBack;


    if (!params.cancelCallBack || !(params.cancelCallBack instanceof Function)) {
        var errorMsg = "MakeEditArea did not receive a parameter property named 'cancelCallBack',\n" +
                "a Consumer function that will be called if the user clicks 'Cancel'.\n" +
                "(no input will be passed to the cancel call back function).";
        alert(errorMsg); // this would generally be a programmer error, not user error
        throw errorMsg;
        return;
    }
    var cancelCallBack = params.cancelCallBack;


    // Now that input params have been checked (with any issues throwing an
    // exception and halting execution), begin making the editArea div.
    var editDiv = MakeTag({
        htmlTag: "div",
        cssClass: "editArea"
    }); // MakeTag req'd property: htmlTag, opt'l properties: innerHTML, cssClass, src, parent

    // create one row per input field. This row shall contain prompt, 
    // input box, and possible error msg.
    for (var spec of inputSpecs) {
        // Above line of code (for...of) is like saying this: 
        // for (var i=0; i<inputSpecs.length; i++) {
        //   var spec=inputSpecs[i];

        /* Example properties of spec: 
         *    "prompt": "User Email: ",      --> prompt for the input tag
         *    "fieldName": "userEmail",      --> fieldName for the input tag
         *    "dataType": "string",          --> dataType (string, date, decimal, or integer)
         *    "minLen": 1, // required field --> minLen 0 means optional, else means required
         *    "maxLen": 50                   --> maxLen will be checked if provided             */

        // add row to hold the prompt, input, and error message. Style this as flexbox
        // for responsive design (single col in mobile, multi-col in desktop).
        var rowDiv = MakeTag({
            htmlTag: "div",
            parent: editDiv,
            cssClass: "row"
        });
        
        // Add prompt for field...
        MakeTag({// dont need a reference to this span tag.
            htmlTag: "span",
            cssClass: "prompt",
            innerHTML: spec.prompt,
            parent: rowDiv
        });

        // Add input tag for field. We need to access later, so save it right into the inputSpecs 
        // object that it relates to.
        spec.inputTag = MakeTag({
            htmlTag: "input",
            parent: rowDiv
        });

        // Pre-populate the input tags of the edit area with editObj values (if editObj was supplied). 
        if (params.editObj) {
            spec.inputTag.value = params.editObj[spec.fieldName];
        }

        // Add span tag to hold error Msg for this field. We need to access this later, so save it
        // right into the inputSpecs object that it relates to.
        spec.errorMsg = MakeTag({
            htmlTag: "span",
            cssClass: "error",
            innerHTML: "&nbsp;", // a blank, keeps it's space vertically
            parent: rowDiv
        });
    } //  for (var spec of inputSpecs

    // Add a new line before the submit and cancel buttons
    MakeTag({// dont need a reference to this tag (so not saving MakeTag's return value).
        htmlTag: "br",
        parent: editDiv
    });

    var submitButton = MakeTag({
        htmlTag: "button",
        innerHTML: "Submit",
        parent: editDiv
    });

    var cancelButton = MakeTag({
        htmlTag: "button",
        innerHTML: "Cancel",
        parent: editDiv
    });

    editDiv.recordLevelMsg = MakeTag({
        htmlTag: "span",
        cssClass: "recLevelMsg",
        parent: editDiv
    });

    submitButton.onclick = function () {
        // Here, you must add code tO validate each input tag (check that it matches the specs 
        // provided, e.g., correct data type). (The code currently only checks that each input 
        // is as long as the minimum length requirement.) For every bad input, put an error 
        // message (in that row). If any row has bad input, set the record level message like 
        // "Please try again". 
        var allGood = true;
        for (var spec of inputSpecs) {
            if (spec.inputTag.value.length < spec.minLen) {
                spec.errorMsg.innerHTML = "Error: input must have at least " + spec.minLen + " character(s).";
                allGood = false;
            } else {
                spec.errorMsg.innerHTML = "&nbsp;"; // wipe any previous error message that might be there.
            }
        }
        if (!allGood) {
            editDiv.recordLevelMsg.innerHTML = "Please Try Again";
            return;
        }

        editDiv.recordLevelMsg.innerHTML = "Data Accepted !";

        // if no editObj was passed in initially (e.g., the consumer wanted insert rather 
        // than update), create an editObj to hold the newly validated input.
        if (!params.editObj) {
            params.editObj = {};
        }

        // Put user's validated input the editObj (the same object that may have been passed in). 
        for (var spec of inputSpecs) {
            params.editObj[spec.fieldName] = spec.inputTag.value;
        }

        // call the success call back function, passing to it the validated user input (in an object). 
        successCallBack(params.editObj);
    }; // submit onclick function 

    function clearAll() {
        // Blank out all input tags and also the record level message.
        for (var spec of inputSpecs) {
            spec.inputTag.value = "";
        }
        editDiv.recordLevelMsg.innerHTML = "";
    }

    cancelButton.onclick = function () {
        // Since the user is cancelling, clear out all inputs and record level msg. 
        clearAll();

        // inform the consumer that the user cancelled (let them do what they want about that). 
        cancelCallBack();
    };

    return editDiv;
}