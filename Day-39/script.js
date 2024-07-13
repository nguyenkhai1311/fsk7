// Function to check if the user has reached the bottom of the page
function isBottomOfPage() {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight;
}

// Function to load more blog posts
function loadMorePosts() {
    // Replace the URL with your API endpoint or data source
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            // Append the new blog posts to the blog container
            const blogContainer = document.getElementById('blogContainer');
            data.forEach((post, index) => {
                const postElement = document.createElement('div');
                postElement.innerHTML = `
                <div class="postTitle">Bài blog số ${index}:
                ${post.title}</div>`;
                blogContainer.appendChild(postElement);
            });
        });
}

// Event listener for scroll event
window.addEventListener('scroll', () => {
    if (isBottomOfPage()) {
        loadMorePosts();
    }
});

// Initial load of blog posts
loadMorePosts();
