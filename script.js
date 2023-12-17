var con = document.querySelector("#container");
var love = document.querySelector("i");
var heart = document.querySelector("#heart");
var pera = document.querySelector("span");
var book = document.querySelector("#book");
var save = document.querySelector("#save");

var count = 0;

heart.addEventListener("click", function () {
    if (count === 0) {
        heart.className = "ri ri-heart-3-fill";
        pera.innerHTML = "1";
        heart.style.color = "red";
        hello();
        count += 1;
    } else {
        heart.className = "ri ri-heart-3-line";
        pera.innerHTML = "0";
        heart.style.color = "black";
        count -= 1;
    }
});


var flag = 0;

book.addEventListener("click", function () {
    if (flag === 0) {
        book.className = "ri-bookmark-fill";
        save.innerHTML = "Saved";
        alert("Post Has Saved");
        flag += 1;
    } else {
        book.className = "ri-bookmark-line";
        save.innerHTML = "Save";
        flag -= 1;
    }
})

function hello() {
    love.style.transform = "translate(-50%,-50%) scale(1)";
    love.style.opacity = "0.9";
    heart.className = "ri ri-heart-3-fill";
    pera.innerHTML = "1";
    heart.style.color = "red";
    setTimeout(function () {
        love.style.opacity = "0";
    }, 2000);
    setTimeout(function () {
        love.style.transform = "translate(-50%,-50%) scale(0)";
    }, 1500);
}

con.addEventListener("dblclick", hello);

var comment = document.querySelector(".comment");
var comment1 = document.querySelector("#comm");
var main1 = document.querySelector(".main1");
var msg = document.querySelector(".side");

var temp = true;

comment1.addEventListener("click", function () {
    if (temp) {
        main1.style.display = 'block';
        comment1.className = "ri-chat-3-fill";
        msg.style.marginBottom = "250px"
    } else {
        main1.style.display = 'none';
        comment1.className = "ri-chat-3-line";
        msg.style.marginBottom = "0";
    }

    temp = !temp;

})



var send = document.querySelector("#send1");
var input = document.querySelector("input");
var cmtUser = (`<div class="user"><img src="https://th.bing.com/th/id/OIP.djsEYfQbjKD1vQ9WD186NAHaJ4?w=186&h=248&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt=""><div class="userDetails"><h2>Harry</h2><p>Liked a message <span>.50min</span></p></div><input type="checkbox"></div>`);
console.log(cmtUser)
send.addEventListener("click", () => {
    var h5 = document.createElement("h5");
    h5.innerHTML = input.value;
    console.log(h5);
    if (h5.innerHTML.length > 0) {
        let commentDataDiv = CreateCommentUser(h5.innerHTML);
        comment.appendChild(commentDataDiv);
        input.value = "";
    }
    input.addEventListener("keydown", function (event) {
        if (event.keyCode === 13) {
            comment.appendChild(commentDataDiv);
        }
    });
});


var send2 = document.querySelector("#send2");
var msg = document.querySelector(".side");

var count1 = 0;

send2.addEventListener("click", () => {
    if (count1 == 0) {
        msg.style.display = "flex";
        send2.className = "ri-send-plane-fill";
        count1 += 1;
    } else {
        msg.style.display = "none";
        send2.className = "ri-send-plane-line";
        count1 -= 1;
    }
})


function CreateCommentUser(comment) {
    // Create a div with class "user"
    const userDiv = document.createElement("div");
    userDiv.className = "user";

    // Create an image element
    const img = document.createElement("img");
    img.src = "https://th.bing.com/th/id/OIP.djsEYfQbjKD1vQ9WD186NAHaJ4?w=186&h=248&c=7&r=0&o=5&dpr=1.3&pid=1.7";
    img.alt = "";

    // Create a div with class "userDetails"
    const userDetailsDiv = document.createElement("div");
    userDetailsDiv.className = "userDetails";

    // Create an h2 element for the name
    const h2 = document.createElement("h2");
    h2.textContent = "Harry";

    // Create a p element for the message and time
    const p = document.createElement("p");
    p.className = 'commentpara'
    p.textContent = comment;
    // // Create an input element with type "checkbox"
    // const checkbox = document.createElement("input");
    // checkbox.type = "checkbox";

    // Append the elements to the "user" div
    userDetailsDiv.appendChild(h2);
    userDetailsDiv.appendChild(p);
    userDiv.appendChild(img);
    userDiv.appendChild(userDetailsDiv);
    // userDiv.appendChild(checkbox);

    // Append the "user" div to the document body
    // document.body.appendChild(userDiv);
    return userDiv
}