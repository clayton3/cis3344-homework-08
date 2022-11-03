"use strict";

function MakeTable(title, objList, sortOrderPropName, sortIcon) {
    let count = 0;
    function isToShow(obj, searchKey) {

        // show the object if searchKey is empty
        if (!searchKey || searchKey.length === 0) {
            return true;
        }

        // convert search key to upper case (will convert values also to upper case before comparing).
        const searchKeyUpper = searchKey.toUpperCase();

        for (const prop in obj) {

            // Do not try to find a match for Table cells that hold images.
            if (prop[0] !== "_") {

                // pull out the innerHTML because all properties of obj are actually <td> tags, not just text.
                const propVal = obj[prop].innerHTML; // associative array, using property name as if index.
                const propValUpper = propVal.toUpperCase(); // convert to upper case to match searchKey.

                console.log("checking if " + searchKeyUpper + " is in " + propValUpper);

                if (propValUpper.startsWith(searchKeyUpper) || searchKeyUpper === "") {
                    console.log("Yes it is inside");
                    return true;
                }
            } // excluding image tds
        }
        console.log("no it is not inside");
        return false;
    } // isToShow

    function jsSort(objList, byProperty) {
        if (!objList || !objList[0]) {
            let message = "Cannot sort. Need an objList with at least one object";
            console.log(message);
            alert(message);
            return;
        }

        const obj = objList[0];
        if (!obj[byProperty]) {
            let message = "objList does not have property " + byProperty + " -- cannot sort by that property.";
            console.log(message);
            alert(message);
            return;
        }

        if (!obj[byProperty].sortOrder || obj[byProperty].sortOrder === null) {
            let message = "Cannot sort objList by property " + byProperty +
                " because this property never had it's sortOrder set (by a method in SortableTableUtils.js).";
            console.log(message);
            alert(message);
            return;
        }

        objList.sort(function (q, z) {
            const qVal = q[byProperty].sortOrder;
            const zVal = z[byProperty].sortOrder;


            let c = 0;
            if (qVal > zVal) {
                c = 1;
            } else if (qVal < zVal) {
                c = -1;
            }
            console.log("comparing " + qVal + " to " + zVal + " is " + c);
            return c;
        });

        if(count % 2 != 0)
            objList.reverse();
    }

    function addTableBody(table, list, sortOrderPropName, filterValue) {
        const oldBody = table.getElementsByTagName("tbody");
        if (oldBody[0]) {
            console.log("ready to remove oldBody");
            table.removeChild(oldBody[0]);
        }

        jsSort(list, sortOrderPropName);

        const tableBody = document.createElement("tbody");
        table.appendChild(tableBody);

        for (const i in objList) {
            if(isToShow(objList[i], filterValue)) {
                const tableRow = document.createElement("tr");
                tableBody.appendChild(tableRow);

                const obj = objList[i];
                for (const prop in obj) {
                    tableRow.appendChild(obj[prop]);
                }
            }
        }

    }

    function makeHeader (propName, sortIcon) {

        const headingCell = document.createElement("th");

        let headingText = propName.replace("_", " ");

        if (propName[0] !== "_") {
            headingText = "<img src='" + sortIcon + "'/> " + headingText;
            headingCell.onclick = function () {
                console.log("WILL SORT ON " + propName);
                addTableBody(newTable, objList, propName);
                count++;
            };
        }
        headingCell.innerHTML = headingText;
        return headingCell;
    }

    const container = document.createElement("div");
    container.classList.add("clickSort");

    const heading = document.createElement("h3");
    heading.innerHTML = title;
    container.appendChild(heading);

    const searchInput = document.createElement("input");
    container.appendChild(searchInput);

    const newTable = document.createElement("table");
    container.appendChild(newTable);

    const headerRow = document.createElement("tr");
    newTable.appendChild(headerRow);

    const obj = objList[0];
    for (const propName in obj) {
        headerRow.appendChild(makeHeader(propName,sortIcon));
    }

    addTableBody(newTable, objList, sortOrderPropName, "");

    searchInput.onkeyup = function () {
        console.log("search filter changed to " + searchInput.value);
        addTableBody(newTable, objList, sortOrderPropName, searchInput.value);
    };

    return container;

}