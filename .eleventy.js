const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) { 
    eleventyConfig.addPassthroughCopy("src/assets/images/");
    eleventyConfig.addPassthroughCopy("src/css/");
    
    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });
    
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