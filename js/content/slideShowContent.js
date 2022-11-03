function slideShowContent(){
    const content = `
        <h2>Slide Show Page</h2>
    `;

    const styles = `
        <style>
            .slideShowContainer {
                display:flex; 
                flex-direction: row;
            }
            .slideShowBtnGrp{
                display: flex;
                flex-direction: column;
                padding-top: 2rem;
            }
            .slideShow {
                box-sizing: border-box; 
                width: 33%;
            }
        </style>
    `;

    const slideShowContainer = document.createElement("div");
    slideShowContainer.classList.add("slideShowContainer");

    function buttonSetup(ss, title){
        slideShowContainer.appendChild(document.createElement("br"));

        const buttonGroup = document.createElement("div");
        buttonGroup.classList.add("slideShowBtnGrp");

        const changerInput = document.createElement("input");
        buttonGroup.appendChild(changerInput);

        const changerBtn = document.createElement("button");
        changerBtn.innerHTML = "Change Title of " + title;
        changerBtn.onclick = function(){
            ss.setTitle(changerInput.value);
        };
        buttonGroup.appendChild(changerBtn);
        buttonGroup.appendChild(document.createElement("br"));

        ele.appendChild(buttonGroup);
    }

    ajax("json/americanFood.json", processAmericanFoodList, document.getElementById("slideShowContainer"));
    function processAmericanFoodList(americanFoodList){
        let foodTitle = "American Food";

        for(let i = 0; i < americanFoodList.length; i++)
            americanFoodList[i].caption = americanFoodList[i].name;

        console.log(americanFoodList[0].pic + " | " + americanFoodList[0].caption);
        const ss = MakeSlideShow({title: foodTitle, list: americanFoodList, style: "slideShow"});
        slideShowContainer.appendChild(ss);

        buttonSetup(ss, foodTitle);
    }

    ajax("json/italianFood.json", processItalianFoodList, document.getElementById("slideShowContainer"));
    function processItalianFoodList(italianFoodList){

        for(let i = 0; i < italianFoodList.length; i++)
            italianFoodList[i].caption = italianFoodList[i].name;

        console.log(italianFoodList[0].pic + " | " + italianFoodList[0].caption);
        const ss = MakeSlideShow( {list: italianFoodList} );
        slideShowContainer.appendChild(ss);

        buttonSetup(ss);
    }

    ajax("json/indianFood.json", processIndianFoodList, document.getElementById("slideShowContainer"));
    function processIndianFoodList(indianFoodList){
        let foodTitle = "Indian Food";

        for(let i = 0; i < indianFoodList.length; i++)
            indianFoodList[i].caption = indianFoodList[i].name;

        console.log(indianFoodList[0].pic + " | " + indianFoodList[0].caption);
        const ss = MakeSlideShow( {title: foodTitle, list: indianFoodList, style: "slideShow"} );
        slideShowContainer.appendChild(ss);

        buttonSetup(ss, foodTitle);
    }

    const ele = document.createElement("div");
    ele.innerHTML += content;
    ele.innerHTML += styles;
    ele.appendChild(slideShowContainer);

    return ele;
}