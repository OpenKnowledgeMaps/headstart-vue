# Introduction
This is a brief introduction to how OpenKnowledge maps likes to style it's code in this project.

If you could help follow this then you'll make all our contributors lives easier and we can make cool things even faster!

# Open Knowledge Maps and Vue
We're using vue with split files. To make it easier for non-programmer contributors 

# File layout
Public assets currently go into `public`
Code goes into `src`
Headline documentation (like this file) goes into the root (`/`)

## Layout in `src`
Tests will go into `__tests__` and be named after the component (or file) that they cover. Integration, Browser or End2End tests will go into separate folders as we implement them.

Components are developed in split form so:
* html/vue templates go into `templates`.
* js goes into `js`


# Prettier and JS Style
We're using [prettier](https://github.com/prettier/prettier) and airbnb with [eslint](https://github.com/airbnb/javascript) to style the JS code in this project. Both JS in .vue files and in .js files.

You can lint the code you've written with `npm run lint`

Linting will also run before committing and warn you if you'll be committing non-compliant code.
