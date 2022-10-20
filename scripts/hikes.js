// 1. get category select  element by id
const categories = document.getElementById("category");

// 2. loop through hikes data categories

for (i = 0; i < categories.length; i++) {
    console.log(categories[i]);
    const option = document.createElement("option");
    option.innerHTML = categories[i];
    category.appendChild(option);
}

// 3. listen for changes to category
console.log("3")
function makeHike(hike) { //MAKE A RESULT
    const output = document.createElement("div");
    output.innerHTML = `<div>${hike.name}</div>`;
    output.innerHTML += `<img src="images/${hike.scenicImage}">`;
    output.innerHTML += `<img src="images/${hike.trailMapImage}">`;
    return output;
}
category.addEventListener("change", () => {
    // 3b. update results from that match selected category
    console.log("3b")
    const results = document.getElementById("results");
    console.log(results);
    results.innerHTML = ""; //CLEAR RESULTS
    for (i = 0; i < hikes.length; i++) {
        console.log(hikes[i]);
        if (hikes[i].difficulty == category.selectedOptions[0].value) {
            console.log("match");
            results.appendChild(makeHike(hikes[i])); //APPEND RESULT
        } else {
            console.log("not a match");
        }
    }
});