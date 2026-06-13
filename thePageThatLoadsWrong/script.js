/*Task 1: Investigation
You are a detective walking into a crime scene for the first time. Before you change anything,
you document what you find. Grab the main title, all the feature items, and the description
paragraph. Print the title's text and the description's inner HTML to the console.
Expected output: "???" "This page is not ready yet."
*/
let mainTitle = document.getElementById("mainTitle");
let description = document.querySelector(".description");
console.log(mainTitle.textContent);
console.log(description.innerHTML);
/*Task 2: Fix the Content
The title has been showing "???" since anyone can remember. Change it to "Welcome to
the Dashboard". The description below is also wrong and invisible -- rewrite it with
something meaningful and bring it back into view.
*/
mainTitle.textContent = "Welcome to the Dashboard";
description.textContent = "You can now access all dashboard features";
/*
Task 3: Style the Page
The designer left a class called highlight in the stylesheet but nobody ever applied it. Give
it to the main title. Also make absolutely sure the description has shed its hidden class.
*/
mainTitle.classList.add("highlight");
description.classList.remove("hidden");
console.log(mainTitle.className);
/*
Task 4: Clean the Page
Someone left a list item that just says "REMOVE ME". It has been there for months.
Remove it.
 */
const features = document.querySelectorAll(".feature");
features.forEach(feature => {
    if(feature.textContent === "REMOVE ME")
        feature.remove();
});//features[2].remove();
/*
Task 5: Add Missing Content
The features list is floating on the page with no heading above it -- it looks like it appeared out
of nowhere. Create an h2 that reads "Available Features" and place it directly above the list.
*/
const headingFeature = document.createElement("h2");
headingFeature.textContent = "Available Features";
const featureList = document.getElementById("features");
featureList.before(headingFeature);//place it directly above the list
//Another Solution=>
//const app = document.getElementById("app");
//app.insertBefore(headingFeature, featuresList);//add headingFeature before the featuresList
/*
Task 6: Repair the Link
The link at the bottom of the page goes nowhere -- its href is just "#". Read what the href
currently is and log it. Then point it to https://example.com and rename it "Go to Dashboard".
Expected output: "#" (then updated)
*/
const mainLink = document.getElementById("mainLink");
console.log(mainLink.getAttribute("href"));
mainLink.setAttribute("href", "https://example.com");
mainLink.textContent = "Go to Dashboard";