# My TF1 🎞️

### Table of contents :

- [Prerequisite](#prerequisite)
- [Installation](#installation)
- [Extra informations](#extra-informations)

### Prerequisite

- Have [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) installed in your machine (this project is running with node v20.11.0)

### Installation

- Clone the project `git clone https://github.com/cindy-sf/mytf1.git`
- Go to the project directory `cd mytf1`
- Use the good version of node : `nvm use`

- Finally, install the dependencies by running `npm i`.
- Congratulations, you are ready to launch the project 🎉.
  Now run `npm run start`.

### Extra informations

Development choices :

- **Technos**

  - Apollo client : Easier way to manage data state, cache data in client side.
  - Styled components : To benefit css-in-js and dynamic styling. Separate the style and the logic.

- **Tests**
  React Testing Library, to getting as close as possible to the behavior of the user.

- **Project structure**
  └── /src <br />
  &nbsp;├── /components <br />
  &nbsp;├── /pages <br />
  &nbsp;├── /services <br />

- **Questions**

  - Is it planned to manage pagination ?
  - Why a figma for mobile version isn't present ?
