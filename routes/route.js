exports.home = function(req, res) {
    res.render('home', {
        title: 'iLoveMyCity',
        headline: 'We believe that every city have something to say'
    });
}


exports.city = function(req, res) {
    var cityName = req.params.city;
    var title, heading;
    var imageCount = 4;

    if (cityName === 'hyderabad') {
        title = "Hyderabad";
        heading = "Hyderabad: Where love is in the air";
    } else if (cityName === 'pune') {
        title = "Pune";
        heading = "Pune: Good talkers are only found in Pune";
    } else if (cityName === 'mumbai') {
        title = "Mumbai";
        heading = "Mumbai: Buzz, Beautiful architecture and Football";
    } else if (cityName === 'delhi') {
        title = "Delhi";
        heading = "Delhi: Sparkling, Still, Food, Gorgeous";
    } else if (cityName === 'banglore') {
        title = "Banglore";
        heading = "Banglore: Come to Banglore to become someone new";
        imageCount = 6;
    }

    res.render('city', {
        title: title,
        headline: heading,
        city: cityName,
        numberOfImages: imageCount
    });
}