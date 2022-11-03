function blogContent() {

    // ` this is a "back tick". Use it to define multi-line strings in JavaScript.
    var content = ` 
        <h2>Homework 1 Retrospective:</h2>
        <p>
            I think that this homework was very valuable for me because I do not have much of a knack for auditory learning. When we went over a lot
            of these different components in class I was really only able to get a cursory understanding of how to apply what we learned. However now that
            I have been able to apply some of these things into a homework assignment I can say that I am definitely more confident in my ability. I also would
            say that nothing here was very complicated for me, but it was a great exercise in the application of what we learned.
        </p>

        <h2>Homework 2 Retrospective:</h2>
        <p>
            I'll be honest when looking back on completing this assignment, I am a little ridden with a bit of anxiety.
            I thought we had until Tuesday night to finish this but then realized it is due at noon on Tuesday.
            So I have had to rush a little bit when it came to completing this assignment. However I feel it still represents my skills pretty well.
            The biggest issue I am having so far is that I do not have much skill or talent when it comes to design. I know how to write code and I have ideas
            I am just struggling actually getting my visualization onto the page.
        </p>

        <h2>Homework 3 Retrospective:</h2>
        <p>
            Just barely missed the deadline on this one! I really had fun thinking of ways to implement what we have learned about JS in the past week into this assignment, as well
            thinking of ways to make an interesting mutator function. I hope you enjoy what I have cobbled together. My only complaint in terms of Homework with this class so far is that it
            is due before class for the week. I know a time constraint is likely the reason for this, but it is frustrating when running into an issue, I feel pretty on my own.
        </p>

        <h2>Homework 4 Retrospective:</h2>
        <p>
            I finished this assignment with a little time to spare. I feel that I was more lost in terms of what some of the requirements wanted this time around than any other time. I feel capable
            with what we have learned thusfar and could have what is wanted if I was more clear. I think going forward I will be trying to utilize office hours a bit more for clarification. That's more of
            an anxiety thing than anything else. I am happy with how the concept of this website is coming along so far in terms of a adding a collapsibility feature this time around.
        </p>
        
        <h2>Homework 5 Retrospective</h2>
        <p>
            I found this assignment really enjoyable due to how I got to expand on what I learned in lab a bit more this time around.
            Learning about JSON and soon jQuery were what I was looking forward to in this class. The only difficulty for me, as usual
            was the HTML/CSS. The further we go the more I enjoy the more programatic parts of this class but visualizing how my HTML and
            CSS will look continues to challenge me.
        </p>
      
        <h2>Homework 6 Retrospective</h2>
        <p>
            This homework was definitely the most difficult one for me so far. I think that I did not build a very strong connection with
            the lab activities and this week's homework and that gave me a lot of issues. I look forward to getting more familiar with these concepts in the coming weeks as we approach the end
            of the course. Here is my database layout:
        </p>
        <h5>Italian Food Layout</h5>
        <ul>
            <li>Primary Key - web_id num unique</li>
            <li>name varchar(255)</li>
            <li>pic varchar(255)</li>
            <li>ingredients @list varchar(255)</li>
            <li>prepTime num</li>
            <li>cookTime num</li>
            <li>author varchar(255)</li>
            <li>views num</li>
            <li>rating num</li>
        </ul>
    `;
    
    var ele = document.createElement("div");
    ele.innerHTML = content;
    return ele;    
}