"use strict";

/*
 * ------------------------- SortableTableUtils --------------------------------------
 *
 * All the public methods of SortableTableUtils return an HTML "td" tag (table data),
 * formatted and aligned nicely, depending on the type of data being passed in.
 *
 */

const SortableTableUtils = {};

SortableTableUtils.makeText = function (text) {
    const tableData = document.createElement('td');
    text = text || ""; // set it to empty string if the input parameter does not exist
    if (text === "") {
        tableData.sortOrder = -1;  // put empty entries at top if sorting by this column
    } else {
        tableData.sortOrder = text.toUpperCase();
    }
    tableData.innerHTML = text;
    tableData.style.textAlign = "left"; // text elements usually align left

    return tableData;
};

SortableTableUtils.makeNumber = function (num, isFormatCurrency) {

    const tableData = document.createElement('td');

    if (!num) {
        num = "";
        tableData.sortOrder = -1;

    } else {

        let tmp = num + "";

        tmp = tmp.replace(" ", "");
        tmp = tmp.replace(",", "");
        tmp = tmp.replace("$", "");

        if (isNaN(tmp)) {
            tableData.sortOrder = -1;
            num = "Not numeric " + num;
        } else {
            const convertedNum = Number(tmp);
            tableData.sortOrder = convertedNum;
            if (isFormatCurrency) {
                num = convertedNum.toLocaleString("en-US", {style: "currency", currency: "USD", minimumFractionDigits: 2});
            }
        }
    }

    tableData.innerHTML = num;
    tableData.style.textAlign = "right";
    return tableData;
};


SortableTableUtils.makeDate = function (dateString) {

    const tableData = document.createElement('td');

    if (!dateString) {
        dateString = "";
        tableData.sortOrder = -1;

    } else {
        let parsedDate = Date.parse(dateString);
        if (isNaN(dateString) && !isNaN(parsedDate)) {
            parsedDate=parsedDate/1000;
            parsedDate=parsedDate/60;
            parsedDate=parsedDate/60;
            parsedDate=parsedDate/24;

            const years = 1970;
            const daysTo1970 = years * 365;
            parsedDate+= daysTo1970;

            tableData.sortOrder = parsedDate;
        } else {
            tableData.sortOrder = -1;
            dateString = "Not a Date "+dateString;
        }
    }

    tableData.innerHTML = dateString;
    tableData.style.textAlign = "center";
    return tableData;
};


SortableTableUtils.makeImage = function (imageFileName, width) {

    const tableData = document.createElement('td');
    const img = document.createElement("img");
    if (imageFileName && imageFileName !== "") {
        img.src = imageFileName;
    }
    img.style.width = width;

    tableData.appendChild(img);
    tableData.style.textAlign = "center";
    tableData.sortOrder = null;
    return tableData;
};