function homeContent () {

// ` this is a "back tick". You can use it to define multi-line strings in JavaScript.
// 
// NetBeans menu option "Source - Format" will not work with the text inside of a 
// String, so you have to do this indentation manually with the editor. 

    var content = `
        <h2>What are we all about?</h2>
        <p>
            When you go to plan out your recipes for the week it's always a struggle. And eventually you will be successful, possibly finding a recipe like <a href="https://www.theendlessmeal.com/creamy-coconut-lentil-curry/">this</a>.
            However, with What's Cookin' we aim to solve this issue by providing a straight forward and
            simple way to pick different recipes and get a gauge for how much their meal will cost that week.
        </p>
        <img src="pics/pizza.jpg" alt="A Tasty Looking Pizza" id="foodpic" style="float: left">
        <img src="pics/tofu-masala.jpg" alt="Tofu Masala!" id="foodpic" style="float: right">
    `;
    var ele = document.createElement("div");
    ele.innerHTML = content;
    return ele;
}