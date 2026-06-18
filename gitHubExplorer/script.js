/*
Task 1: Fetch User Profile
*/function fetchGitHubUser(username){
    return fetch(`https://api.github.com/users/${username}`)
    .then((response)=>{
        if ( response.ok === false){
            throw new Error("User not found");
        }
        return response.json();
    })
}
fetchGitHubUser("octocat").then((data)=>{
        console.log(data);
        //fetchRepos(data);
    });
/*
Task 2: Fetch Repositories
*/
function fetchRepos(user) {
    return fetch(`https://api.github.com/users/${user.login}/repos`)
    .then((response) => {
        if ( response.ok === false){
            throw new Error("Failed to fetch repos");
        }
        return response.json();
    })
}
console.log(fetchRepos)).then((data)=>{
        console.log(data);
    });;
/*
Task 3: Fetch Repository Languages
*/
function fetchRepoLanguages(repo) {
    return fetch(`https://api.github.com/repos/${repo.owner.login}/${repo.name}/languages`)
    .then(response => {
        if ( response.ok === false){
            throw new Error("Failed to fetch languages");
        }
        return response.json();
    })
    .catch((error) => {

    });
}
