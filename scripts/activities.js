
    //Fill category select options from list of categories above
    let categoriesElement = document.getElementById("categories");
    let activitiesElement = document.getElementById("activities");
    function addCategory(text) {
        let o = document.createElement("option")
        o.innerHTML = text;
        o.setAttribute("value", text);
        categoriesElement.appendChild(o);
    }
    categories.forEach(addCategory);
    
    categoriesElement.addEventListener("change", () => {
        //CLEAR CONTENT
        let category = categoriesElement.selectedOptions[0].value;
        activitiesElement.innerHTML = "<h3>" + category + "</h3>" ;
        //LOOP THROUGH ACTIVITIES AND ADD IF CATEGORY MATCHES
        activities.forEach((activity) => {
            if (activity.category == category) {
                let div = document.createElement("div");
                div.innerHTML = "<div>" + activity.name + "</div>";
                div.innerHTML += "<img src=\"" + activity.id + "\" >";
                
                if (activity.price > 0) {
                    div.innerHTML += " $" + activity.price.toFixed(2) + " ";
                    let button = document.createElement("button");
                    button.innerHTML += "BUY";
                    div.appendChild(button);
                }

                activitiesElement.appendChild(div);
            }
        });
    });
    //when selected show filter list of activities