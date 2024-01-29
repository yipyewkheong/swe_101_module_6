# SWE101: Programming Fundamentals

## Capstone Assessment: Option 1

### Case Background

In the competitive landscape of the financial services sector, data is the lifeblood that drives decision-making, predicts market trends, and uncovers hidden investment opportunities. Financial analysts, investors, and strategists rely heavily on data-driven insights to steer their portfolios and advise clients. However, while raw data is abundant, meaningful interpretation and contextualization of this data into actionable insights are scarce.

Recognizing the intersection of this need and opportunity, a progressive financial services firm envisions creating a platform – an interactive financial blog. This blog aims to bridge the gap between raw financial data and its stakeholders by curating and presenting data-backed financial news. Moreover, the platform will allow for a discourse in the form of comments, enabling professionals to debate, discuss, and refine their understanding of the data presented.

While the idea is robust, its execution demands a blend of financial acumen, data analytical skills, and technical prowess. The platform's success hinges on its ability to present data-driven news in an easily digestible format while also facilitating user interaction in a seamless manner.

### Objective

Your role, as a data analyst in the firm's technology division, is pivotal. Tasked with the challenge of creating this platform, your objective is to craft an interactive webpage that not only showcases data-backed financial news posts but also promotes user engagement through intuitive search and comment functionalities. Through this project, you will be harmonizing the realms of data analytics, web development, and financial insights to foster a community of informed financial professionals. The end goal is to ensure that the platform serves as an invaluable tool in the arsenal of every financial analyst, strategist, and investor.

### Section 1: Basic HTML and CSS Layout (100 points)

#### Task 1.1

Create a basic HTML structure with a header, main section, and footer. Use appropriate semantic HTML tags. (30 points)

#### Task 1.2

In the header, include a heading for your webpage and a form for the search functionality (input field and submit button). (40 points)

#### Task 1.3

Apply basic styles to your HTML elements, such as background color, text align, font family, etc. using CSS. This is a foundational task, so the webpage does not need to look perfect at this stage. (30 points)

### Section 2: Fetch and Display Posts (100 points)

#### Task 2.1

Use the Fetch API to get all posts from https://jsonplaceholder.typicode.com/posts and console log result. (30 points)

#### Task 2.2

Iterate over the fetched posts and display them in the main section. Each post should display the title and body. Each post should also include a button to view related comments (which doesn't need to be functional at this point). (40 points)

#### Task 2.3

Apply additional styles to the posts, making them look attractive and easy to read. (30 points)

### Section 3: Implement Search Functionality (100 points)

#### Task 3.1

Implement a search function that filters the displayed posts based on the title. This should be case-insensitive. (50 points)

#### Task 3.2

Ensure the search function runs whenever the user submits the search form. (30 points)

#### Task 3.3

Style the search form and results appropriately. (20 points)

### Section 4: Fetch and Display Related Comments (100 points)

#### Task 4.1:

When a user clicks the 'View Comments' button on a post, fetch the related comments from https://jsonplaceholder.typicode.com/comments?postId=${postId}. (40 points)

#### Task 4.2:

Display these comments below the relevant post. Make sure you handle the asynchronous nature of the fetch function properly. (40 points)

#### Task 4.3:

Style the comments appropriately and ensure they are distinct from the main post. (20 points)

### Section 5: Error Handling and Debugging (50 points)

#### Task 5.1:

Assess the code you have written so far and identify 3 potential errors that could arise. Add error handling to each of the potential errors you have identified to improve the robustness of the application. Apply the same error handling approach to the comments fetching operation. (30 points)

To provide any of the 3 errors below:

1. ReferenceError: Occur when trying to reference a variable that has not been declared
2. TypeError: Occurs when an operation is performed on an incompatible data type.
3. SyntaxError: Occurs when there is an error in the syntax of the code
4. NetworkError: Occurs when there is an error making an API call from an external data source or server

### Section 6: Documentation of Code Base (30 points)

#### Task 6.1:

Use JSDoc to document programming and coding updates and changes for business and technical professionals.

### Section 7: Final Touchup Bonus Points (20 points)

#### Task 7.1:

Add a loading indication to improve the user experience while posts and comments are being fetched. This can be achieved by toggling a loading class and using CSS animations.

#### Task 7.2:

Make the webpage more visually appealing with additional CSS styles. Improve the aesthetics of the posts and comments by adding some padding, altering the text alignment, and adding a hover effect.

---

## Capstone Assessment: Option 2

### DIY

You are free to create and build your own project. However, it must contain the following features;

1. Include HTML, CSS, and JS
2. Uses Fetch to retrieve external data (i.e. rapidApi)
3. Implement Search Functionality
4. Error Handling and Debugging
5. Documentation of Code Base using readMe files and code comments

---

### GitHub Guide

1. `$ git add .` this add all updated files to staging
2. `$ git commit -m "a random message"` this shift the staged updates to local repository.
3. `$ git push` this push the updated local repository to github repository.
