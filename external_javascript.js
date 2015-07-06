/*
This app could be called "Walk From Work." It tells users which businesses are within a short walk from their workplace. It tailors the results to
a handful of use cases commonly encountered during the work week. I get frustrated comparing reviews across different web sites, so I designed this
app to calculate a comprehensive rating using reviews from Yelp, Google, OpenTable, and TripAdvisor. Since offical APIs aren't available for all 
of these sources (and I need more time to learn how to use APIs -- that's next on my self-study list), I decided to just hard code the data into the app. 
I focused on the neighborhood around Hack Reactor because (a), I figured you'd get a kick out of it and (b) I could virtually explore your 
corner of the world before I get there (can't wait to try the Flying Falafel). So all of the estimated travel times assume the user is starting 
at Hack Reactor HQ.
*/

//The program starts by loading all of the hard-coded data into an array of objects.

function Restaurant(restaurantName, restaurantAddress, restaurantDistance, restaurantCuisine, closedOn, hours, attire, ambiance, takeOut, waitService, yelpReviews, yelpPrice, googleNumReviews, googleRating, openTableNumReviews, openTableRating, tripAdvisorReviews) {
	this.restaurantName = restaurantName;
	this.restaurantAddress = restaurantAddress;
	this.restaurantDistance = restaurantDistance;
	this.restaurantCuisine = restaurantCuisine;
	this.closedOn = closedOn;
	this.hours = hours;
	this.attire = attire;
	this.ambiance = ambiance;
	this.takeOut = takeOut;
	this.waitService = waitService;
	this.yelpReviews = yelpReviews;
	this.yelpPrice = yelpPrice;
	this.googleNumReviews = googleNumReviews;
	this.googleRating = googleRating;
	this.openTableNumReviews = openTableNumReviews;
	this.openTableRating = openTableRating;
	this.tripAdvisorReviews = tripAdvisorReviews;
}

var arrayOfRestaurants = [],
	newRestaurant = new Restaurant ("The Flying Falafel", "1051 Market St., San Francisco, CA 94103", 4, ["Falafel", "Vegan", "Gluten-Free"], [], [0, 100, 1000, 2400], "Casual", "Casual", true, false, [1, 3, 7, 35, 182], "$", 10, 4.8, 0, null, [0, 0, 0, 3, 4]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("PianoFight", "144 Taylor St., San Francisco, CA 94102", 4, ["Bars", "American (New)"], [], [1700, 2400], "Casual", "Divey", false, false, [0, 0, 0, 5, 35], "$$", 7, 4.6, 0, null, [0, 0, 0, 1, 2]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("Dottie's True Blue Cafe", "28 6th St., San Francisco, CA 94103", 3, ["American (Traditional)", "Breakfast & Brunch", "Cafes"], ["Tuesday", "Wednesday"], [730, 1500], "Casual", "Casual", true, true, [89, 158, 410, 958, 1235], "$$", 265, 4.3, 0, null, [12, 21, 69, 255, 549]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("Mikkeller Bar", "34 Mason St., San Francisco, CA 94102", 2, ["Gastropubs"], [], [1200, 2400], "Casual", "Hipster", false, true, [19, 38, 45, 227, 185], "$$", 129, 4.6, 0, null, [1, 3, 5, 25, 36]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("The Cavalier", "360 Jessie St., San Francisco, CA 94103", 3, ["American (New)", "British", "Cocktail Bars"], [], [700, 2200], "Casual", "Classy", false, true, [15, 37, 79, 219, 153], "$$$", 36, 4.1, 501, 4.2, [2, 1, 13, 24, 47]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("Box Kitchen", "431 Natoma St., San Francisco, CA 94103", 7, ["Food Stands", "Burgers"], [], [0, 100, 1100, 1500, 1630, 2400], "Casual", "Divey", true, false, [9, 12, 25, 94, 134], "$", 17, 4.1, 0, null, [0, 0, 0, 0, 3]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("Buckhorn Grill", "865 Market St., San Francisco, CA 94103", 2, ["American (New)", "Sandwiches", "Steakhouses"], [], [1030, 2100], "Casual", "Casual", true, false, [10, 31, 95, 259, 138], "$$", 35, 4.2, 0, null, [1, 2, 6, 15, 21]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("Tempest", "431 Natoma St., San Francisco, CA 94103", 7, ["American (Traditional)", "Dive Bars"], [], [0, 200, 1100, 2400], "Casual", "Divey", true, false, [21, 20, 46, 180, 178], "$", 47, 4.3, 0, null, [0, 0, 0, 3, 3]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("Daniel's Cafe", "154 Ellis St., San Francisco, CA 94102", 3, ["Coffee & Tea", "Bagels", "Delis"], [], [700, 2000], "Casual", "Divey", true, false, [0, 3, 14, 65, 52], "$", 5, 4.2, 0, null, [0, 0, 4, 10, 8]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("Tu Lan", "8 6th St., San Francisco, CA 94103", 3, ["Vietnamese"], [], [1100, 2130], "Casual", "Divey", true, true, [13, 15, 32, 82, 98], "$", 117, 4, 0, null, [1, 2, 6, 25, 31]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("Taqueria Castillo Mason", "10 Mason St., San Francisco, CA 94102", 1, ["Mexican"], [], [900, 2100], "Casual", "Divey", true, false, [3, 5, 21, 40, 43], "$", 14, 4, 0, null, [0, 0, 0, 2, 1]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("Kin Khao", "55 Cyril Magnin St., San Francisco, CA 94102", 2, ["Thai"], [], [1130, 1400, 1730, 2200], "Casual", "Casual", false, true, [16, 47, 73, 139, 141], "$$", 29, 4.2, 224, 4.1, [6, 2, 9, 25, 17]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("Loving Hut", "Westfield San Francisco Centre, 845 Market St., Ste 12, San Francisco, CA 94103", 3, ["Vegan", "Vegetarian"], [], [1000, 2230], "Casual", "Casual", true, false, [20, 25, 60, 189, 124], "$", 31, 4.3, 0, null, [0, 1, 1, 4, 5]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("Taylor Street Coffee Shop", "375 Taylor St., San Francisco, CA 94102", 6, ["Breakfast & Brunch", "Burgers", "Sandwiches"], [], [700, 1400], "Casual", "Casual", true, true, [15, 24, 78, 247, 255], "$$", 71, 4.4, 0, null, [2, 3, 16, 137, 252]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("Show Dogs", "1020 Market St., San Francisco, CA 94102", 3, ["Hot Dogs", "Sandwiches"], [], [900, 2100], "Casual", "Casual", true, false, [34, 61, 116, 212, 220], "$$", 62, 4.1, 0, null, [2, 0, 6, 25, 12]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("54 Mint - Ristorante Italiano", "16 Mint Plz., San Francisco, CA 94103", 4, ["Italian"], [], [1130, 1430, 1730, 2200], "Casual", "Trendy", true, true, [50, 56, 127, 294, 214], "$$$", 90, 4, 0, null, [6, 2, 16, 41, 61]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("Little Delhi", "83 Eddy St., San Francisco, CA 94102", 2, ["Indian"], [], [1130, 2200], "Casual", "Casual", true, true, [95, 103, 162, 501, 402], "$$", 125, 4, 0, null, [5, 6, 18, 99, 69]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("Farmerbrown", "25 Mason St., San Francisco, CA 94102", 1, ["Southern, Soul Food, Breakfast & Brunch"], [], [930, 1430, 1700, 2100], "Casual", "Hipster", true, true, [179, 361, 687, 1059, 382], "$$", 308, 3.9, 0, null, [3, 9, 29, 64, 42]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("Kusina Ni Tess", "237 Ellis St., San Francisco, CA 94102", 5, ["Filipino"], ["Sunday"], [700, 2000], "Casual", "Casual", true, false, [7, 4, 17, 60, 41], "$", 10, 4.3, 0, null, [0, 0, 0, 0, 0]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("Homeskillet", "1001 Market St., San Francisco, CA 94103", 3, ["American (Traditional)", "Breakfast & Brunch", "Burgers"], [], [730, 1600], "Casual", "Casual", true, false, [10, 9, 20, 67, 32], "$$", 15, 4.2, 0, null, [0, 0, 3, 6, 11]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("The Hall", "1028 Market St., San Francisco, CA 94102", 4, ["Food Court"], ["Saturday", "Sunday"], [1100, 2000], "Casual", "Hipster", true, false, [3, 4, 17, 26, 24], "$$", 11, 4.7, 0, null, [0, 0, 1, 0, 1]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("Puccini & Pinetti", "129 Ellis Street., San Francisco, CA 94102", 3, ["Italian"], [], [1100, 2300], "Casual", "Casual", true, true, [57, 105, 180, 255, 134], "$$", 109, 3.7, 1324, 3.9, [17, 29, 89, 246, 162]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("Cafe Bistro", "Nordstrom, 865 Market St., San Francisco, CA 94103", 8, ["American (New)", "Comfort Food", "Cafes"], [], [1000, 2030], "Casual", "Casual", true, true, [32, 40, 110, 308, 173], "$$", 41, 4.3, 437, 4.1, [3, 1, 9, 36, 18]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("Westfield San Francisco Centre Food Emporium", "865 Market St., San Francisco, CA 94103", 2, ["Food Court"], [], [1000, 2130], "Casual", "Casual", true, false, [15, 12, 46, 114, 76], "$$", 0, null, 0, null, [0, 0, 0, 1, 0]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("Bangkok Noodles & Thai BBQ", "110 Powell St., San Francisco, CA 94102", 4, ["Thai"], [], [0000, 100, 1100, 2400], "Casual", "Casual", true, true, [72, 63, 143, 263, 115], "$", 67, 4, 0, null, [5, 2, 11, 76, 61]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("zpizza", "883 Mission St., San Francisco, CA 94103", 4, ["Pizza"], [], [1100, 2230], "Casual", "Casual", true, false, [9, 16, 32, 95, 84], "$$", 25, 4.5, 0, null, [0, 0, 0, 3, 1]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("Taqueria Cancun", "1003 Market St., San Francisco, CA 94103", 3, ["Mexican", "Tex-Mex"], [], [900, 2230], "Casual", "Divey", true, false, [22, 23, 74, 131, 80], "$", 72, 4.1, 0, null, [0, 2, 3, 13, 27]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("Cafe Venue", "1003 Market St., San Francisco, CA 94103", 3, ["Coffee & Tea", "Sandwiches", "Breakfast & Brunch"], ["Sunday"], [700, 1530], "Casual", "Casual", true, false, [9, 18, 44, 99, 64], "$", 27, 3.9, 0, null, [0, 2, 3, 11, 7]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("M.Y. China", "845 Market St., 4th Fl, San Francisco, CA 94103", 3, ["Chinese"], [], [1100, 2100], "Casual", "Trendy", true, true, [52, 93, 177, 257, 175], "$$", 63, 4.1, 834, 4.2, [5, 6, 22, 47, 83]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("Million Thai Restaurant & Bar", "385 Taylor St., San Francisco, CA 94102", 7, ["Thai", "Bars"], [], [1030, 2330], "Casual", "Casual", true, true, [21, 14, 8, 29, 78], "$$", 0, null, 0, null, [0, 0, 0, 0, 0]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("TAP415", "845 Market St., 4th Fl., San Francisco, CA 94103", 5, ["Bars", "American (Traditional)"], [], [1130, 2100], "Casual", "Casual", true, true, [11, 14, 38, 35, 26], "$$", 5, 3.8, 0, null, [0, 0, 1, 10, 12]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("First Crush Restaurant Wine Bar & Lounge", "101 Cyril Magnin St., San Francisco, CA 94102", 3, ["American (New)", "Wine Bars"], [], [1700, 2200], "Casual", "Romantic", true, true, [57, 112, 228, 350, 154], "$$$", 186, 3.5, 1532, 3.8, [12, 19, 48, 87, 99]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("Urban Tavern", "333 O'Farrell St., San Francisco, CA 94102", 6, ["Gastropubs", "Bars"], [], [600, 1100, 1130, 1430, 1730, 2400], "Casual", "Trendy", true, true, [70, 131, 174, 158, 59], "$$", 47, 3.4, 1101, 3.8, [14, 27, 90, 120, 52]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("Machine Coffee & Deli", "1024 Market St., San Francisco, CA 94102", 3, ["Cafes", "Delis"], [], [800, 1700], "Casual", "Hipster", true, false, [4, 2, 5, 26, 30], "$", 7, 4.2, 0, null, [0, 0, 0, 0, 0]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("SOMA Restaurant & Bar", "85 5th St., San Francisco, CA 94103", 3, ["Italian", "Mediterranean", "Bars"], [], [630, 1000, 1130, 2200], "Casual", "Casual", true, true, [20, 12, 33, 33, 27], "$$", 25, 3.7, 0, null, [4, 6, 10, 26, 8]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("Montesacro Pinseria Romana Enoteca", "510 Stevenson St., San Francisco, CA 94103", 4, ["Pizza"], ["Sunday"], [1130, 1430, 1600, 2200], "Casual", "Casual", true, true, [0, 0, 2, 12, 51], "$$", 5, 4.3, 0, null, [0, 0, 0, 1, 2]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("Punjab Kabab House", "101 Eddy St., San Francisco, CA 94102", 2, ["Indian", "Pakistani", "Halal"], [], [1130, 2300], "Casual", "Casual", true, true, [17, 13, 43, 89, 53], "$", 25, 4.2, 0, null, [0, 1, 7, 10, 6]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("The Old Siam Thai Restaurant", "201 Ellis St., San Francisco, CA 94102", 4, ["Thai"], [], [1100, 2300], "Casual", "Casual", true, true, [23, 19, 73, 129, 64], "$$", 52, 4.1, 0, null, [3, 9, 24, 97, 59]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("Jazz Bistro At Les Joulins", "44 Ellis St., San Francisco, CA 94102", 4, ["Jazz & Blues", "French"], [], [1100, 2300], "Casual", "Romantic", true, true, [37, 40, 49, 50, 21], "$$", 33, 3.4, 0, null, [18, 15, 27, 58, 33]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("Cable Car City Pub & Cafe", "1 Hallidie Plz., San Francisco, CA 94102", 1, ["Burgers", "Pubs"], [], [0, 30, 1600, 2400], "Casual", "Casual", true, true, [30, 27, 34, 32, 19], "$$", 14, 3.4, 0, null, [5, 1, 8, 24, 3]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("Cupola Pizzeria", "845 Market St., 4th Fl, Ste 400, San Francisco, CA 94103", 3, ["Pizza", "Italian"], [], [1130, 2130], "Casual", "Casual", true, true, [32, 56, 98, 154, 72], "$$", 41, 4.1, 487, 3.9, [2, 13, 21, 61, 48]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("Latte Express", "48 5th St., San Francisco, CA 94103", 2, ["Coffee & Tea", "Vietnamese", "Sandwiches"], [], [500, 1930], "Casual", "Casual", true, false, [6, 10, 25, 57, 25], "$", 6, 4, 0, null, [0, 0, 0, 1, 2]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("Nespresso Boutique at Bloomingdale's", "845 Market St., Concourse Level, San Fransisco, CA 94103", 3, ["Coffee & Tea", "Cafes"], [], [1000, 2100], "Casual", null, false, true, [3, 0, 2, 12, 26], "$$", 0, null, 0, null, [1, 1, 2, 14, 16]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("Coriander Gourmet Thai", "Westfield San Francisco Centre, 845 Market St., San Francisco, CA 94103", 2, ["Thai"], [], [1000, 2100], "Casual", "Casual", true, false, [39, 68, 147, 254, 81], "$", 0, null, 0, null, [0, 1, 3, 11, 12]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("Lark Creek Steak", "Westfield San Francisco Centre, 845 Market St, 4th Fl., San Francisco, CA 94103", 3, ["Steakhouses", "American (Traditional)"], [], [1130, 1400, 1730, 2100], "Casual", "Classy", true, true, [56, 75, 152, 295, 143], "$$$", 55, 4.1, 0, null, [7, 16, 23, 95, 79]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("21 Club", "98 Turk St., San Francisco, CA 94102", 2, ["Dive Bars"], [], [0, 200, 1000, 2400], null, "Divey", null, null, [1, 2, 12, 28, 56], "$", 10, 4.3, 0, null, [0, 0, 1, 0, 1]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("Aunt Charlie's Lounge", "133 Turk St., San Francisco, CA 94102", 3, ["Gay Bars"], [], [1200, 2400], null, "Divey", null, null, [8, 7, 20, 56, 75], "$", 11, 4.7, 0, null, [0, 0, 0, 0, 0]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("Showdown", "10 6th St., San Francisco, CA 94103", 3, ["Bars"], ["Sunday", "Monday and Tuesday from 2200 to 0200"], [0, 200, 1700, 2400], null, "Casual", null, null, [2, 2, 16, 36, 38], "$", 17, 4, 0, null, [0, 0, 0, 0, 0]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("50 Mason Social House", "50 Mason St., San Francisco, CA 94102", 2, ["Bars"], ["Monday, Tuesday through Wednesday from 0000 to 0200"], [0, 200, 1700, 2400], null, "Casual", null, null, [5, 5, 9, 25, 31], "$", 8, 4.3, 0, null, [0, 0, 0, 1, 1]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("S & R Lounge", "Inside Hotel Zetta, 55 5th St., San Francisco, CA 94103", 2, ["Lounges"], ["Monday"], [1600, 2300], null, "Trendy", null, null, [2, 2, 5, 18, 13], "$$", 0, null, 0, null, [0, 0, 0, 1, 0]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("OMG", "43 6th St., San Francisco, CA 94103", 4, ["Dance Clubs", "Gay Bars"], ["Monday"], [0, 200, 1700, 2400], null, "Trendy", null, null, [4, 3, 10, 9, 21], "$$", 5, 3.9, 0, null, [0, 0, 0, 0, 0]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("Kanpai", "222 Mason St., San Francisco, CA 94102", 5, ["Lounges"], ["Monday", "Tuesday", "Sunday"], [1700, 2400], null, "Trendy", null, null, [0, 1, 0, 1, 11], "$$$", 0, null, 0, null, [0, 0, 0, 0, 0]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("Union Square Sports Bar", "115 Mason St., San Francisco, CA 94102", 3, ["Sports Bars", "Pool Halls"], [], [0, 200, 1100, 2400], null, "Casual", false, true, [14, 10, 32, 36, 20], "$", 19, 3.3, 0, null, [4, 2, 7, 7, 6]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("Infusion Lounge", "124 Ellis St., San Francisco, CA 94102", 3, ["Lounges", "Diners"], ["Monday", "Sunday"], [0, 200, 1800, 2400], "Dressy", "Trendy", false, true, [289, 243, 244, 280, 174], "$$$", 83, 3.2, 249, 3.8, [2, 1, 6, 22, 11]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("Lupicia Tea Shop", "845 Market St., Ste 381, San Francisco, CA 94103", 3, ["Coffee & Tea"], [], [1000, 2030], null, null, true, null, [0, 3, 15, 62, 90], "$$", 8, 4.2, 0, null, [0, 0, 0, 0, 0]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("Blue Bottle Coffee Co", "66 Mint St., San Francisco, CA 94103", 4, ["Coffee & Tea"], [], [700, 1900], null, null, true, null, [48, 91, 159, 536, 779], "$$", 427, 4.4, 0, null, [0, 0, 0, 0, 0]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("Beard Papa", "845 Market St., Ste16, San Francisco, CA 94103", 3, ["Bakeries", "Desserts"], [], [1000, 2100], null, null, true, null, [25, 53, 125, 334, 374], "$", 59, 4.3, 0, null, [0, 0, 0, 0, 0]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("DavidsTea", "865 Market Street, San Francisco, CA 94103", 2, ["Coffee & Tea"], [], [1000, 2230], null, null, true, null, [3, 3, 9, 29, 35], "$$", 13, 4.6, 0, null, [0, 0, 0, 0, 0]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("Espresso Bar", "865 Market Street, San Francisco, CA 94103", 2, ["Coffee & Tea", "Internet Cafes"], [], [830, 2230], null, null, true, null, [0, 0, 3, 7, 14], "$", 0, null, 0, null, [0, 0, 0, 0, 0]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("Equator Coffees & Teas", "986 Market St., San Francisco, CA 94102", 2, ["Coffee & Tea"], [], [700, 1900], null, null, true, null, [2, 1, 2, 16, 15], "$$", 6, 4.5, 0, null, [0, 0, 0, 0, 0]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("Sur La Table", "845 Market St., San Francisco, CA 94103", 3, ["Coffee & Tea", "Cooking Classes"], [], [1000, 2000], null, null, true, null, [2, 3, 2, 15, 14], "$$$", 0, null, 0, null, [0, 0, 0, 0, 0]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("Barbary Coast", "55 Cyril Magnin St., San Francisco, CA 94102", 2, ["Bakeries", "Coffee & Tea"], ["Monday"], [1130, 1430, 1730, 2130], null, null, true, null, [6, 8, 12, 21, 14], "$", 0, null, 0, null, [0, 1, 11, 11, 9]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("Cafe Bellini", "865 Market St., Ste C46, San Francisco, CA 94103", 2, ["Bakeries", "Coffee & Tea"], [], [800, 830], null, null, true, null, [10, 10, 26, 18, 15], "$$", 0, null, 0, null, [0, 0, 0, 0, 0]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("Java Trading Company", "100 5th St., San Francisco, CA 94103", 4, ["Coffee & Tea", "CSA"], [], [730, 1700], null, null, true, null, [0, 1, 0, 3, 4], "$", 0, null, 0, null, [0, 0, 0, 0, 0]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("Starbucks", "Nikko Hotel, 222 Mason St., San Francisco, CA 94102", 5, ["Coffee & Tea"], [], [500, 2330], null, null, true, null, [12, 6, 14, 14, 6], "$", 11, 3.7, 0, null, [2, 3, 10, 11, 15]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("Starbucks", "865 Market St., San Francisco, CA 94103", 2, ["Coffee & Tea"], [], [500, 2200], null, null, true, null, [30, 9, 12, 17, 13], "$", 12, 3.7, 0, null, [0, 0, 0, 6, 5]);
arrayOfRestaurants.push(newRestaurant);
newRestaurant = new Restaurant ("Teavana", "865 Market St., San Francisco, CA 94103", 2, ["Coffee & Tea"], [], [1000, 2100], null, null, true, null, [10, 3, 5, 8, 8], "$$$", 6, 3.8, 0, null, [0, 0, 0, 0, 0]);
arrayOfRestaurants.push(newRestaurant);

/*This function takes an array of strings, along with the conjunction "and" or "or", and outputs them in a grammatically accurate list. It's referred to
in the upcoming switch and later when the program outputs the final results.*/
function formatList(array, conjunction) {
	var result = "";
	if (array.length === 1) {
		return array[0];
	}
	else if (array.length === 2) {
		return array[0] + " " + conjunction + " " + array[1];
	}
	else {
		while (array.length > 1) {
			result += array[0] + ", ";
			array.shift();
		}
		result += " " + conjunction + " " + array[0]
		return result;
	}
}

var action = prompt("Hello! What would you like to do?\n\nEnter \"breakfast\" if you need to grab a quick bite to eat or a coffee on your way into work.\n\nEnter \"lunch\" if you need to grab a quick bite to eat in the middle of the day.\n\nEnter \"quick dinner\" if you're working late or headed home and need to grab a quick bite to eat in the evening.\n\nEnter \"drinks\" if you want to grab drinks after work.\n\nEnter \"dinner\" if you want to go out for a sit-down for dinner after work."),
	time,
	attire,
	arrayOfAttires = ["Casual", "Dressy"],
	arrayOfBarCuisines = ["Bars", "Wine Bars", "Pubs", "Lounges", "Cocktail Bars", "Dive Bars", "Gay Bars", "Sports Bars"],
	arrayOfFilterFunctions = [filterTime]; //The elements in this array will be used as callbacks so the right filters are applied to the dataset.

switch (action) {
	case "breakfast":
	case "lunch":
	case "quick dinner":
		arrayOfFilterFunctions.push(filterGoodToGo, filterNotABar);
		time = Number(prompt("When do you want your " + action + "? Use military time (e.g., 6 p.m. is 1800).", "0900"));
		break;
	case "drinks":
		time = Number(prompt("When do you want your " + action + "? Use military time (e.g., 6 p.m. is 1800).", "0900"));
		attire = prompt("Is this a casual thing or are you all dressed up? Enter one of the following: " + formatList(arrayOfAttires, "or") +".", arrayOfAttires[0]);
		arrayOfFilterFunctions.push(filterHasABar, filterAttire);
		break;
	case "dinner":
		time = Number(prompt("When do you want your " + action + "? Use military time (e.g., 6 p.m. is 1800).", "0900"));
		attire = prompt("Is this a casual thing or are you all dressed up? Enter " + formatList(arrayOfAttires, "or") +".", arrayOfAttires[0]);
		arrayOfFilterFunctions.push(filterGoodToEatIn, filterNotABar, filterAttire);
		break;
	default:
		alert("That's not an option! Refresh your browser and try again.");
}



/*At this point, the app filters out irrelevant businesses. The anonymous function in the .filter method calls each of the filters stored in the
arrayOfFilterFunctions. If any one of those filter functions returns "false," the restaurant is not included in the resulting filtered array.*/
var filteredArray = arrayOfRestaurants.filter(function(restaurant) {
	for (var i = 0; i < arrayOfFilterFunctions.length; i++) {
		if (!arrayOfFilterFunctions[i](restaurant)) {
			return false;
		}
	}
	return true;
})

/*This next function returns true if the restaurant is open at the time the user wants to visit. The format of the .hours property is an array
of number pairs that looks like this: [open, close, open, close]. Many businesses have hours that are non-sequential. Say, they're open for lunch
from 1100 to 1400 and then for dinner from 1700 to 2000. The .hours array for that restaurant would be [1100, 1400, 1700, 2000]. If a business is
open past midnight, say from 1700 to 0200, an addiional number pair is added: [0, 200, 1700, 2400].*/
function filterTime(restaurant) {
	var array = restaurant.hours;
	while (array.length > 0) {
		if (time >= array[0] && time <= array[1]) { //The function sees if the user's inputted time variable is between the first number pair in the .hours array.
			return true;
		}
		array.shift(); //If the time isn't between the first pair, the function shifts the first pair out of the array and tests the next pair.
		array.shift();
	}
	return false;
}

//This function returns true if the restaurant has takeout service AND doesn't have wait service.
function filterGoodToGo(restaurant) {
	if (restaurant.takeOut && !restaurant.waitService) {
		return true;
	}
	return false;
}

//This function returns true if the restaurant has wait service.
function filterGoodToEatIn(restaurant) {
	return restaurant.waitService;
}

//This function takes an element and an array and returns true if the element is in the array. It's referred to in filterNotABar and filterHasABar.
function isInArray(element, array) {
	for (var i = 0; i < array.length; i++) {
		if (element === array[i]) {
			return true;
		}
	}
	return false;
}

//This function checks if the business is exclusively a bar. It lets the app know not to recommend the business if the user wants to eat food.
function filterNotABar(restaurant) {
	for (var i = 0; i < restaurant.restaurantCuisine.length; i++) { //It checks each of the cuisines associated with the restaurant.
		var cuisine = restaurant.restaurantCuisine[i];
		if (!isInArray(cuisine, arrayOfBarCuisines)) { //As soon as it finds one cuisine that isn't in the arrayOfBarCuisine, it returns true.
			return true;
		}
	}
	return false; //If all of the cuisines are in the arrayOfBarCuisines array, the function assumes the business is exclusively a bar and returns false.
}

//This function checks if the business has a bar. It lets the app know to recommend the business if the user wants to go out for drinks.
function filterHasABar(restaurant) {
	arrayOfBarCuisines.push("Gastropubs"); //Gastropubs isn't included in array originally because filterNotABar would filter out Gastropubs if the user wanted to eat food. 
	for (var i = 0; i < restaurant.restaurantCuisine.length; i++) { //It checks each of the cuisines associated with the restaurant.
		var cuisine = restaurant.restaurantCuisine[i];
		if (isInArray(cuisine, arrayOfBarCuisines)) { //As soon as function finds one cuisine that's in the array of bar cuisines, it returns true.
			return true; 
		}
	}
	return false; //If the function doesn't find a single bar cuisine, it assumes the restaurant wouldn't be a great place for drinks and returns false.
}

//This function checks if the restaurant has the right attire. Only one of the businesses in the hard-coded data actually has "dressy" attire.
function filterAttire(restaurant) {
	if (restaurant.attire === attire || restaurant.attire === null) {
		return true;
	}
	return false;
}

/*This function calculates the ratings from Yelp and TripAdvisor. These ratings are stored in arrays of five numbers. Each number represents the number
of 1-star, 2-star, 3-star, 4-star, and 5-star reviews respectively. For example, if the .yelpReviews property is [0, 0, 0, 1, 0], the restaurant
receives 0 1-star reviews, 0 2-star reviews, etc. and one 4-star review. It's referred to in the .ovrRating method.*/
function calcRating(array) {
	var numerator = 0,
		denominator = 0;
	for (var i = 0; i <= 4; i++) { //It checks each of the five elements in the array
		numerator += array[i] * (i + 1); //And multiplies them by the star rating associated with the review. So the third element ([2]) in the array will be multiplied by 3, for 3 stars.
		denominator += array[i];
	}
	if (denominator === 0) {
		return 0;
	}
	return numerator / denominator;
}

/*This method calculates the "Overall" rating for the restaurant. The average is weighted by the number of reviews available from each source.
The result is then stored in each object so that the restaurants that make it through the filters can be easily sorted by their rating.*/
Restaurant.prototype.ovrRating = function() {
	var numerator = 0,
		denominator = 0;
	numerator +=  this.yelpReviews.reduce(function(a, b) {return a + b;}) * calcRating(this.yelpReviews);
	denominator += this.yelpReviews.reduce(function(a, b) {return a + b;});
	numerator += this.googleNumReviews * this.googleRating;
	denominator += this.googleNumReviews;
	numerator += this.openTableNumReviews * this.openTableRating;
	denominator += this.openTableNumReviews;
	numerator += this.tripAdvisorReviews.reduce(function(a, b) {return a + b;}) * calcRating(this.tripAdvisorReviews);
	denominator += this.tripAdvisorReviews.reduce(function(a, b) {return a + b;});
	if (denominator === 0) {
		return 0;
	}
	return numerator / denominator;
};

//This sorts the restaurants by rating.
filteredArray.sort(function(a, b) {
	return b.ovrRating() - a.ovrRating();
});

//This prints the filtered and sorted array of restaurants.
for (var i = 0; i < filteredArray.length; i++) {
	var obj = filteredArray[i];
	if (obj.ambiance === null) { //Quick hack to handle restaunts where no ambiance is available.
		obj.ambiance = "Unknown";
	}
	document.write(i + 1 + ". " + obj.restaurantName + " is rated " + obj.ovrRating().toFixed(3) + ". <br>It's a " + obj.restaurantDistance + "-minute walk away. The address is " + obj.restaurantAddress + ".<br>Check it out if you like " + formatList(obj.restaurantCuisine, "or") + " with a \"" + obj.ambiance + "\" ambiance.<br> Price = " + obj.yelpPrice);
	if (obj.closedOn.length > 0) {
		document.write("<br>Head's up: this business is CLOSED on " + formatList(obj.closedOn, "and") + ".");
	}
	document.write("<br><br>")
}

if (filteredArray.length === 0) {
	document.write("Sorry! No suitable establishments were found. Refresh your browser and try again.");
}