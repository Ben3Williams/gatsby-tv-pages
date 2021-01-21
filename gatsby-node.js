/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.onCreateWebpackConfig = ({ actions, stage }) => {
  // If production JavaScript and CSS build
  if (stage === "build-javascript") {
    // Turn off source maps
    actions.setWebpackConfig({
      devtool: false
    });
  }
};

const path = require('path');
const data = require('./src/data/data.json');

exports.onCreatePage = ({ actions }) => {
  const { createPage } = actions;
  const template = path.resolve(`./src/templates/product.js`);

  // Create pages for each JSON entry.
  data.forEach((product) => {

    // All the json values can be accessed via the product object in context
    createPage({
      path: `/${product.ID}`,
      component: template,
      context: {
        product
      },
    })
  });
}
