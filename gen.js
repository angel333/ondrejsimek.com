const Metalsmith    = require('metalsmith');
const markdown      = require('metalsmith-markdown');
const pandoc        = require('metalsmith-pandoc');
const layouts       = require('metalsmith-layouts');
const collections   = require('metalsmith-collections');
const inPlace       = require('metalsmith-in-place');
const dateFormatter = require('metalsmith-date-formatter');

Metalsmith(__dirname)
.source('./src')
.destination('./pub')
.clean(true)
.use(markdown())
.use(pandoc({
	from: 'rst',
	pattern: '**/*.rst',
}))
.use(dateFormatter({
	dates: [
		{
			key: 'published',
			format: 'YYYY-MM-DD',
		},
	],
}))
.use(collections({
	articles: {
		pattern: 'articles/**/*.html',
		sortBy: 'published',
		reverse: true,
	},
}))
.use(inPlace({
	pattern: '**/*.njk',
}))
.use(layouts({
	default: 'default.njk',
	pattern: '**/*.html',
}))
.build((err, files) => {
	if (err) throw err;
});
