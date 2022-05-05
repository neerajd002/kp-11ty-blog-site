Link:- https://www.youtube.com/watch?v=4wD00RT6d-g
# Start with a theme or a static blog site

# Create a node project
npm init - y

- Update Scripts
```
"scripts": {
    "start": "npx @11ty/eleventy --serve",
    "build": "npx @11ty/eleventy"
},
```

# Create Eleventy config file
.eleventy.js

- Add the code
```
module.exports = function(eleventyConfig) {
    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}
```

# Run the project
npm start

# CSS and Images are not passed in the published folder
- Add the code in the config file .eleventy.js

```
eleventyConfig.addPassthroughCopy('./src/style.css');
eleventyConfig.addPassthroughCopy('./src/assets');
eleventyConfig.addPassthroughCopy('./src/admin');
```


# Create a _includes folder in src 
Eleventy wil by default will look for this folder

# Create a base.njk file - Nunjucks Templating Engine
Use ! and tab to get the default template of html

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ title }}</title>
</head>
<body>
    {{ content | safe }}
</body>
</html>
```


# Change index.html to index.njk and add page header

---
title: example
layout: 'base.njk'
---

# Create header.njk and footer.njk file separately and add them into the base.njk