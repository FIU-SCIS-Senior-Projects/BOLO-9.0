var Agency = require('../models/agency');

exports.renderAgencies = function (req, res, next) {
var grid = req.session.grid;
if(grid)
{
    Agency.findAllActiveAgencies(function (err, listOfAgencies) {
        if (err) next(err);
        else {
            res.render('agency', {agencies: listOfAgencies});
        }
    })
}
else
{
	res.redirect('/bingo');
}
};

exports.renderAgencyDetails = function (req, res) {
var grid = req.session.grid;
if(grid)
{
    Agency.findAgencyByID(req.params.id, function (err, agency) {
        if (err) next(err);
        else {
            res.render('agency-details', {agency: agency});
        }
    });
}
else
{
	res.redirect('/bingo');
}
};