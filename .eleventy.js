module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/admin');

    eleventyConfig.addFilter("postDate", (dateObj) => {
        let date = (new Date(dateObj)).toDateString().split(' ');
        return `${date[1]} ${date[2]}, ${date[3]}`;
    });

    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
}