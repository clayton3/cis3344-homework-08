//In order to use this function you must provide an array of list objects containing a "pic" and a "caption" along with
//an identifier for the style you want to use.
function MakeSlideShow (params) {
    const foodTitle = params.title || "Untitled";
    const picCapList = params.list || ["No given list"];
    const style = params.style || "slideShow";

    for(let i = 0; i < picCapList.length; i++) {
        if (!picCapList[i].pic || !picCapList[i].caption) {
            throw ("MakeSlideShow expects an array of objects having the 'pic' and 'caption' properties.");
        }
    }

    const slideShow = document.createElement("div");
    slideShow.classList.add(style);

    // add a div that will hold the image
    const div = document.createElement("div");
    slideShow.appendChild(div);

    //adding a title for the food genre
    const title = document.createElement("h3");
    title.innerHTML = foodTitle;
    div.appendChild(title);

    // add image into the div & set the image's src attribute to show picture
    const myImage = document.createElement("img");
    div.append(myImage);

    div.append(document.createElement("br"));

    const mySpan = document.createElement("span");
    mySpan.classList.add("captionStyle");
    div.append(mySpan);

    // add back button under the image (and empty paragraph)
    const backButton = document.createElement("button");
    backButton.innerHTML = " Previous ";
    slideShow.appendChild(backButton);

    // add forward button under the image (and empty paragraph)
    const fwdButton = document.createElement("button");
    fwdButton.innerHTML = " Next ";
    slideShow.appendChild(fwdButton);

    // private variable that keeps track of which image is showing
    let picNum = 0;
    setPic();

    function setPic() {
        myImage.src = picCapList[picNum].pic;
        mySpan.innerHTML = picCapList[picNum].caption;
    }

    // Advance to next image in the picture list
    function nextPic() {

        if (picNum < picCapList.length-1) {
            picNum++;
        }
        setPic();
    }

    // Go to the previous image in the picture list
    function prevPic() {

        if (picNum > 0) {
            picNum--;
        }
        setPic();
    }

    // add next and previous funcionality to next and previous buttons
    backButton.onclick = prevPic;
    fwdButton.onclick = nextPic;

    slideShow.setTitle = function (newTitle) {
        title.innerHTML = newTitle;
    };


    return slideShow;
}