const posts = [
    {
        title: "Post One",
        body: "This is post one",
    },
    {
        title: "Post Two",
        body: "This is post two",
    },
];

const getPosts = () => {
    setTimeout(() => {
        let output = "";
        posts.forEach((post) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
};

const createPost = (post, callback) => {
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
};

// In this case we can see that the third element is not showing it is because it creates dom then it pushed the 3rd element
// getPosts();

// in this case passing getPosts means that only after pushing call function the dom shows only once and it can show 3 element
createPost({ title: "Post Three", body: "This is post three" }, getPosts);
