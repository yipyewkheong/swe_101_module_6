fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((posts) => {
    const postContainer = document.getElementById("post-container");
    posts.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.classList.add("post");
      postElement.innerHTML = `
                        <h2>${post.title}</h2>
                        <p>${post.body}</p>
                        <button class="view-comments">View Comments</button>
                    `;
      postContainer.appendChild(postElement);
    });
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((posts) => {
    const postContainer = document.getElementById("post-container");
    posts.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.classList.add("post");
      postElement.innerHTML = `
                        <h2>${post.title}</h2>
                        <p>${post.body}</p>
                        <button class="view-comments">View Comments</button>
                    `;
      postContainer.appendChild(postElement);
    });
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((posts) => {
    const postContainer = document.getElementById("post-container");
    posts.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.classList.add("post");
      postElement.innerHTML = `
                        <h2>${post.title}</h2>
                        <p>${post.body}</p>
                        <button class="view-comments">View Comments</button>
                    `;
      postContainer.appendChild(postElement);
    });
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((posts) => {
    const postContainer = document.getElementById("post-container");
    const searchForm = document.getElementById("search-form");
    const searchInput = document.getElementById("search-input");

    const filterPosts = () => {
      const searchTerm = searchInput.value.toLowerCase();
      postContainer.innerHTML = "";
      posts
        .filter((post) => post.title.toLowerCase().includes(searchTerm))
        .forEach((post) => {
          const postElement = document.createElement("div");
          postElement.classList.add("post");
          postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.body}</p>
                <button class="view-comments">View Comments</button>
            `;
          postContainer.appendChild(postElement);
        });
    };
    filterPosts();
    searchForm.addEventListener("submit", (event) => {
      event.preventDefault();
      filterPosts();
    });
    searchInput.addEventListener("input", filterPosts);
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((posts) => {
    const postContainer = document.getElementById("post-container");
    const searchForm = document.getElementById("search-form");
    const searchInput = document.getElementById("search-input");

    const filterPosts = () => {
      const searchTerm = searchInput.value.toLowerCase();
      postContainer.innerHTML = "";
      posts
        .filter((post) => post.title.toLowerCase().includes(searchTerm))
        .forEach((post) => {
          const postElement = document.createElement("div");
          postElement.classList.add("post");
          postElement.innerHTML = `
                                <h2>${post.title}</h2>
                                <p>${post.body}</p>
                                <button class="view-comments" data-post-id="${post.id}">View Comments</button>
                            `;
          postContainer.appendChild(postElement);
        });
    };

    const fetchComments = (postId) => {
      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((comments) => {
          const postElement = document.querySelector(
            `.post[data-post-id="${postId}"]`
          );
          const commentsContainer = document.createElement("div");
          commentsContainer.classList.add("comments");
          comments.forEach((comment) => {
            const commentElement = document.createElement("div");
            commentElement.classList.add("comment");
            commentElement.innerHTML = `
                                    <p><strong>${comment.name}</strong>: ${comment.body}</p>
                                `;
            commentsContainer.appendChild(commentElement);
          });
          postElement.appendChild(commentsContainer);
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
        });
    };

    filterPosts();

    searchForm.addEventListener("submit", (event) => {
      event.preventDefault();
      filterPosts();
    });

    searchInput.addEventListener("input", filterPosts);

    postContainer.addEventListener("click", (event) => {
      if (event.target.classList.contains("view-comments")) {
        const postId = event.target.getAttribute("data-post-id");
        fetchComments(postId);
      }
    });
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((posts) => {
    const postContainer = document.getElementById("post-container");
    const searchForm = document.getElementById("search-form");
    const searchInput = document.getElementById("search-input");

    const filterPosts = () => {
      const searchTerm = searchInput.value.toLowerCase();
      postContainer.innerHTML = "";
      posts
        .filter((post) => post.title.toLowerCase().includes(searchTerm))
        .forEach((post) => {
          const postElement = document.createElement("div");
          postElement.classList.add("post");
          postElement.dataset.postId = post.id;
          postElement.innerHTML = `
                                <h2>${post.title}</h2>
                                <p>${post.body}</p>
                                <button class="view-comments">View Comments</button>
                            `;
          postContainer.appendChild(postElement);
        });
    };

    const fetchComments = (postId) => {
      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((comments) => {
          const postElement = document.querySelector(
            `.post[data-post-id="${postId}"]`
          );
          const commentsContainer = document.createElement("div");
          commentsContainer.classList.add("comments");
          comments.forEach((comment) => {
            const commentElement = document.createElement("div");
            commentElement.classList.add("comment");
            commentElement.innerHTML = `
                     <p><strong>${comment.name}</strong>: ${comment.body}</p>
                                `;
            commentsContainer.appendChild(commentElement);
          });
          postElement.appendChild(commentsContainer);
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
        });
    };

    filterPosts();

    searchForm.addEventListener("submit", (event) => {
      event.preventDefault();
      filterPosts();
    });

    searchInput.addEventListener("input", filterPosts);

    postContainer.addEventListener("click", (event) => {
      if (event.target.classList.contains("view-comments")) {
        const postId = event.target.closest(".post").dataset.postId;
        fetchComments(postId);
      }
    });
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((posts) => {
    const postContainer = document.getElementById("post-container");
    const searchForm = document.getElementById("search-form");
    const searchInput = document.getElementById("search-input");

    const filterPosts = () => {
      const searchTerm = searchInput.value.toLowerCase();
      postContainer.innerHTML = "";
      posts
        .filter((post) => post.title.toLowerCase().includes(searchTerm))
        .forEach((post) => {
          const postElement = document.createElement("div");
          postElement.classList.add("post");
          postElement.dataset.postId = post.id;
          postElement.innerHTML = `
                                <h2>${post.title}</h2>
                                <p>${post.body}</p>
                                <button class="view-comments">View Comments</button>
                                <div class="comment-container"></div>
                            `;
          postContainer.appendChild(postElement);
        });
    };

    const fetchComments = (postId, commentContainer) => {
      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((comments) => {
          comments.forEach((comment) => {
            const commentElement = document.createElement("div");
            commentElement.classList.add("comment");
            commentElement.innerHTML = `
                                    <p><strong>${comment.name}</strong>: ${comment.body}</p>
                                `;
            commentContainer.appendChild(commentElement);
          });
        })
        .catch((error) => {
          console.error("There was a problem with the fetch operation:", error);
        });
    };

    filterPosts();

    searchForm.addEventListener("submit", (event) => {
      event.preventDefault();
      filterPosts();
    });

    searchInput.addEventListener("input", filterPosts);

    postContainer.addEventListener("click", (event) => {
      if (event.target.classList.contains("view-comments")) {
        const postId = event.target.closest(".post").dataset.postId;
        const commentContainer = event.target.nextElementSibling;
        if (commentContainer.childElementCount === 0) {
          fetchComments(postId, commentContainer);
        }
      }
    });
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((posts) => {
    try {
    } catch (error) {
      console.error("Error in post processing:", error.message);
    }
  })
  .catch((error) => {
    console.error("Error fetching posts:", error.message);
  });

const fetchComments = (postId, commentContainer) => {
  fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((comments) => {
      try {
      } catch (error) {
        console.error("Error in comment processing:", error.message);
      }
    })
    .catch((error) => {
      console.error("Error fetching comments:", error.message);
    });
};

/**
 * Calculates the sum of two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of a and b.
 */
function add(a, b) {
  return a + b;
}

// Number of users currently logged in
/** @type {number} */
let loggedInUsers = 0;

/**
 * Represents a user.
 */
class User {
  /**
   * Create a new User instance.
   * @param {string} name - The name of the user.
   * @param {number} age - The age of the user.
   */
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  /**
   * Get the name of the user.
   * @returns {string} The name of the user.
   */
  getName() {
    return this.name;
  }
}

/**
 * Calculates the sum of two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of a and b.
 * @changes Date: 2022-02-17, Type: Bug Fix, Details: Fixed issue with negative numbers.
 */
function add(a, b) {
  return a + b;
}

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((posts) => {
    const loadingElement = document.getElementById("loading");
    loadingElement.classList.add("loading-visible");

    loadingElement.classList.remove("loading-visible");
  })
  .catch((error) => {
    console.error("Error fetching posts:", error.message);
    const loadingElement = document.getElementById("loading");
    loadingElement.classList.remove("loading-visible");
  });
