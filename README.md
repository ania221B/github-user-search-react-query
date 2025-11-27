# Frontend Mentor - GitHub user search app solution

This is my second solution to the [GitHub user search app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6) with a small modification: I introduced two-tab view. Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users are able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Search for GitHub users by their username
- See relevant user information based on their search:
    - in user profile tab
    - in user repos tab
- Switch between light and dark themes
- Have the correct color scheme chosen for them based on their computer preferences.

### Screenshot

![Mobile view](/public/screenshots/devfinder-mobile-view.png)
![Tablet view](/public/screenshots/devfinder-tablet-view.png)
![Desktop view](/public/screenshots/devfinder-desktop-view.png)

### Links

- Solution URL: [GitHub](https://github.com/ania221B/github-user-search-react-query)
- Live Site URL: [GitHub Pages]()

## My process

### Project Structure

📁 src/

├── apis/                          # Axios instances & data fetching functions

├── assets/                      

|  └── fonts/                      # Fonts

├── components/                    # UI components

│ ├── data/                        # Small pieces of structured data

│ ├── icons/                       # Icons made into components

│ ├── layout/                      # Components that create "sections" of the UI and assemble other components

│ ├── lists/                       # Components that iterate over lists or render list items

│ ├── ui/                          # Smaller, reusable components

├── hooks/                         # Custom React hooks
               

├── sass/                          # SCSS partials and global styles

│ ├── abstracts/                   # Variables, mixins, functions

│ ├── base/                        # Reset, general styles

│ ├── components/                  # Elements with their own styles, like buttons, inputs, cards, etc.

│ ├── layout/                      # Generic styling creating layouts

│ ├── utilities/                   # Classes that do one specific thing

│ └── vendor/                      # Third party CSS

├── utils/                         # Utility functions

├── App.jsx                        # Top-level UI component, sets up routes and suspense boundaries

├── context.jsx                    # Global context

├── index.scss                     # Entry point that imports all styles

└── main.jsx                       # React root

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Sass
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- TanStack Query (formerly React Query)

### What I learned

#### Data Fetching

Because I modified the project slightly, one of the biggest challenges for me became figuring out where the data-fetching logic should live. At first, I tried having UserOverview fetch profile data and UserRepos fetch repository data. This caused layout issues, especially with keeping the card height consistent.
I ended up with a structure that works reliably, even if it seems a bit unintuitive: UserCard fetches the user profile, and UserRepos fetches the repositories. This approach shows that TanStack Query is flexible and can adapt to different UI needs, but you need to think through dependencies and loading states carefully.

```jsx
function UserCard () {
const { data: userProfile } = useUserProfile(user)
return (
<article>
{activeTab === 'overview' ? (
<UserOverview user={userProfile}></UserOverview>
) : (
<UserRepos user={userProfile?.username}></UserRepos>
)}
</article>
)
}
function UserRepos ({ user }) {
const { data: repos } = useUserRepos(user, sortBy, order)
return (
<section>
<RepoList repos={repos}></RepoList>
</section>
)
}
```

#### Unusual data

This project reminded me how important it is to check the output with different user data. Some users have very long titles or descriptions without spaces, so I added a utility function to handle such edge cases.

```js
function checkLongUnbroken (text) {
    return text && !text.includes(' ') && text.length > 25
}
```

### Continued development

- TanStack Query (formerly React Query) - I would like to get more practice with figuring out where data fetching logic should live, depending on project structure


## Author

- Frontend Mentor - [@ania221b](https://www.frontendmentor.io/profile/ania221b)
