function userContent(){
    const myDiv = document.createElement("div");

    ajax("json/users.json", processUserData, myDiv);
    function processUserData(userList) {
        const newUserList = []; // empty array
        // modify properties (image and price) of the array of objects so it will look
        // better on the page.
        for (let i = 0; i < userList.length; i++) {
            newUserList[i] = {};

            newUserList[i].Image = SortableTableUtils.makeImage(userList[i].image, "5rem");
            newUserList[i].Email = SortableTableUtils.makeText(userList[i].userEmail);
            newUserList[i].Birthdate = SortableTableUtils.makeText(userList[i].birthday);

            newUserList[i].MembershipFee = SortableTableUtils.makeNumber(userList[i].membershipFee, true);

            newUserList[i].Role = SortableTableUtils.makeText(userList[i].userRoleId + " " + userList[i].userRoleType);
        }
        myDiv.append(MakeTable("Users", newUserList, "Birthdate", "icons/sortUpDown16.png"));
    }

    const ele = document.createElement("div");
    ele.appendChild(myDiv);

    return ele;
}