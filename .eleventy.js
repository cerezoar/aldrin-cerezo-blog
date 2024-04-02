module.exports = function (eleventyConfig) { 
    eleventyConfig.addPassthroughCopy("src/assets/images/");
    eleventyConfig.addPassthroughCopy("src/css/");
    return {
        dir: {
            input: 'src',
            includes: '_includes',
            output: '_site'
        },
        templateFormats: [ 'md', 'njk', 'html' ],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk'
    };
}