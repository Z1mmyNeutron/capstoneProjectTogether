window.onload = function(){
    console.log("Started from the bottom now we here");

    //Button for posting code 
    let postButton = document.getElementById("postButton");
    let title      = document.getElementById("title");
    let author     = document.getElementById("author");
    let content    = document.getElementById("content");

    if(postButton){
        postButton.onclick = function(){
            console.log("hello", "title: ", title.value, " author: ", author.value, "content:", content.value);
            postData('http://localhost:5000/content/new', {sender: title.value, author: author.value, content: content.value});
        }
    }



    
    //Button for posting goal
    let goalsButton = document.getElementById("goalsButton");
    let goals      = document.getElementById("goals");
    let steps     = document.getElementById("steps");
    let goalList = document.getElementById("goalList");

    if(goalList) {
        async function getGoals() {
            console.log("hello", "goals: ", goals.value, " steps: ", steps.value);
                let output = await postData('http://localhost:5000/goals', {goals: goals.value, steps: steps.value});

                let outputHTML = "";

                for(let i =0 ;i < output.body.length; i++) {
                    outputHTML += "<p>" +  "(steps:" + output.body[i].steps + ") " + output.body[i].goals +"</p>"
                }

                console.log(output.body);
                goalList.innerHTML = outputHTML;
        }

        getGoals();
    }


    if(goalsButton) {
        goalsButton.onclick =  async function(){

            console.log("hello", "goals: ", goals.value, " steps: ", steps.value);
            let output = await postData('http://localhost:5000/goals/new', {goals: goals.value, steps: steps.value});

            let outputHTML = "";

            for(let i =0 ;i < output.body.length; i++) {
                outputHTML += "<p>" +  "(steps:" + output.body[i].steps + ") " + output.body[i].goals +"</p>"
            }

            console.log(output.body);
            goalList.innerHTML = outputHTML;
        }
    }
}




// Example POST method implementation:
async function postData(url = '', data = {}) {
    let returnable = undefined;

    try {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });

        try {
            console.log("response : ", response)
            returnable = {
                body: await response.json(),
                status: response.status
            }
        } catch (e) {
            console.log("err - ", e)
            returnable = {
                body: "warning - json body not parseable... maybe it wasn't included",
                status: response.status
            }
        }
    } catch (e) {
        console.log("fetch request err - ", e)
    }
    return returnable; // parses JSON response into native JavaScript objects
}
