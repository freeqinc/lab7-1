var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(req, res) {
    var rand = Math.random();
    console.log(rand);
    if (rand > 0.5) {
        projects.grid = false;
        res.render('index', projects);
    } else {
        res.redirect('/grid');
    }
    //     projects.grid = false;
    //     res.render('index', projects);

};

exports.viewGrid = function(req, res) {
    projects.grid = true;
    res.render('index', projects);
};
