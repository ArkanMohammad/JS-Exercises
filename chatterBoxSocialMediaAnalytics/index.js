const users = [
    { id: 1, username: "dania", followers: 1200, verified: true },
    { id: 2, username: "omar", followers: 350, verified: false },
    { id: 3, username: "luna", followers: 2400, verified: true },
    { id: 4, username: "zain", followers: 90, verified: false },
    { id: 5, username: "maya", followers: 800, verified: true },
];
const posts = [
    {
        id: 1,
        userId: 1,
        title: "Why JavaScript is Weird",
        content: "JavaScript has strange but interesting behavior.",
        likes: 1500,
        category: "Programming",
    },
    {
        id: 2,
        userId: 3,
        title: "Best Gaming Setup",
        content: "Today I will show my gaming room.",
        likes: 2200,
        category: "Gaming",
    },
    {
        id: 3,
        userId: 1,
        title: "React Tips",
        content: "Use components to organize your UI.",
        likes: 900,
        category: "Programming",
    },
    {
        id: 4,
        userId: 5,
        title: "Morning Routine",
        content: "Small habits can change your day.",
        likes: 700,
        category: "Lifestyle",
    },
    ];
/*
Task 1: Create User Cards
Create a new array of strings that describes each user.
Example result:
@dania - 1200 followers - Active User
A user is considered:
Active User → if they have 500 followers or more
New User → if they have less than 500 followers
*/
const userCards = users.map(user => {
    const status = user.followers >= 500 ? "Active User" : "New User";
    return `@${user.username} - ${user.followers} followers - ${status}`;
});
console.log(userCards);
/*
Task 2: Find Viral Posts
Create a new array that contains only posts with more than: 1000 likes
*/
const postsMoreThan1000Likes = posts.filter(post => post.likes > 1000);
console.log(postsMoreThan1000Likes);
/**
Task 3: Find the Most Popular User
Find the user who has the highest number of followers.
 */
const mostPopularUser = users.reduce((highlightFollowers, user) => {
    return user.followers > highlightFollowers ? user : highlightFollowers ;
});
console.log(mostPopularUser);
/**
 * Task 4: Find Inactive Users
Find all users who did not publish any post.
Hint:
Compare the user.id with the post.userId.
 */
const inactiveUsers = users.filter(user => {
    return !posts.some(post => post.userId === user.id);
});
console.log(inactiveUsers);
/**
 * Task 5: Calculate Total Likes
Calculate the total number of likes from all posts.
 */
const totalLikes = posts.reduce((total, post) => {
    return total + post.likes;
}, 0);
console.log(totalLikes);
/**
 * Task 6: Check If There Is a Verified User
Check if at least one user is verified.
The result should be:
true or false
 */
const hasVerifiedUser = users.some(user => user.verified);
console.log(hasVerifiedUser);
/**
 * Task 7: Check Platform Quality
Check if all posts have both:
title
content
The result should be:
true or false
 */
const allPostsValid = posts.every(post => {
    return post.title && post.content;
});
console.log(allPostsValid);
/**Task 8: Create Trending Titles
Create a new array that contains only post titles in uppercase.
Example:
WHY JAVASCRIPT IS WEIRD
 */
const trendingTitles = posts.map(post => {
    return post.title.toUpperCase();
});
console.log(trendingTitles);
/**
 * Task 9: Create Gaming Feed
Create a new array that contains only posts from the category:
Gaming
 */
const gamingPosts = posts.filter(post => post.category === "Gaming");
console.log(gamingPosts);
/**
 * Task 10: Sort Users by Followers
Create a new array of users sorted from highest followers to lowest followers.
Important:
Do not mutate the original users array.
 */
const sortedUsers = [...users].sort((a,b) => b.followers - a.followers);
console.log(sortedUsers);
/**
 * Task 11: Find User by Username
Create a variable:
const searchedUsername = "dania";
Find and return the user with this username.
 */
const searchedUsername = "dania";
const foundUser = users.find(user => user.username === searchedUsername);
console.log(foundUser);
/**
 * Task 12: Create Platform Statistics
Create an object that contains:
totalUsers
totalPosts
totalLikes
averageLikesPerPost
mostPopularCategory
 */
const totalUsers = users.length;
const totalPosts = posts.length;
//totalLikes
const averageLikesPerPost = totalLikes / totalPosts;
const categoryCount = posts.reduce((count, post) => {
    count[post.category] = (count[post.category] || 0) + 1;
    return count;
}, {});
const mostPopularCategory = Object.keys(categoryCount).reduce((a, b) => {
    return categoryCount[a] > categoryCount[b] ? a : b;
}, "");
const platformStats = {
    totalUsers,
    totalPosts,
    totalLikes,
    averageLikesPerPost,
    mostPopularCategory
};
console.log(platformStats);