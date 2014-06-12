# Austin NodeBots website
The source code for http://austinnodebots.com

## How to Use
### Installation
run `npm install` to install the dependencies

### Development
`grunt` - This will run the default grunt task.  In this case it will jshint and build the dev vesion of the sass.

`grunt test` - This will run the testing tasks. This will including linting and unit tests when they exist.

`grunt build` - This will run the production build without pushing it to the gh-pages branch.  It will clean the branch, run the test, build the sass, uglify the javascript, and copy the files to the `/dist` folder.

### Deployment
`grunt deploy` - This step will run the `grunt build` task and the `grunt gh-pages` task to push the site to the GitHub Pages branch.
