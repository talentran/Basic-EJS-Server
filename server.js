const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

const pages = [
    { route: '/', template: 'home', title: 'Home', content: 'Welcome to the homepage!' },
    { route: '/about', template: 'about', title: 'About', content: 'Learn more about us.' },
    { route: '/contact', template: 'contact', title: 'Contact', content: 'Get in touch with us.' }
  ];
  
  pages.forEach(page => {
    app.get(page.route, (req, res) => {
      res.render(page.template, {
        title: page.title,
        content: page.content
      });
    });
  });
  