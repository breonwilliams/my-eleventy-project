module.exports = function(eleventyConfig) {
    // Copy the `css` and `images` directories to the output
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("src/js");
    eleventyConfig.addPassthroughCopy("src/images");
    
    return {
        dir: {
            input: "src",
            output: "_site"
        }
    };
};
