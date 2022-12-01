// This uses destructuring of input parameter. 
// So, you have to pass it a parameter object that has properties: 
// prompt, objList, selected.
function MakeRadio( {prompt, list, selected} ) {

    // Then you can reference variables: prompt, objList, selected.
    // objects in objList should have these properties: showOption and value



    // MakeTag: htmlTag (req'd). Optional: innerHTML, cssClass, src, type, name, value, parent.
    var frm = MakeTag({
        htmlTag: "form",
        cssClass: "radio"
    });

    frm.appendChild(MakeTag({
        htmlTag: "span",
        innerHTML: prompt || "Unknown prompt"
    }));


    if (!list || !list[0]) {
        alert("MakeRadio needs an list with at least one element inside");
        return frm;
    }

    selected = selected || ""; // if not provided, no radio option will be pre-selected

    // "for .. of" is easier way to iterate over objList without needing to use an index
    for (var ele of list) {
        var para = MakeTag({
            htmlTag: "p",
            innerHTML: ele,
            parent: frm
        });
        var option = MakeTag({
            htmlTag: "input",
            type: "radio",
            name: "radName", // doesnt matter what this is (but must match code in getValue)
            value: ele,
            parent: para
        });
        if (selected === ele) {
            option.checked = "checked";
        }
    }

    frm.getValue = function () {
        // console.log("value: "+ frm.radName.value);
        return frm.radName.value;
    };

    return frm;
}