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

function Business(name, address, distance, cuisine, closedOn, hours, attire, ambiance, takeOut, waitService, yelpReviews, yelpPrice, googleNumReviews, googleRating, openTableNumReviews, openTableRating, tripAdvisorReviews) {
	this.name = name;
	this.address = address;
	this.distance = distance;
	this.cuisine = cuisine;
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

var arrayOfBusinesses = [],
	newBusiness = new Business ("The Flying Falafel", "1051 Market St., San Francisco, CA 94103", 4, ["Falafel", "Vegan", "Gluten-Free"], [], [0, 100, 1000, 2400], "Casual", "Casual", true, false, [1, 3, 7, 35, 182], "$", 10, 4.8, 0, null, [0, 0, 0, 3, 4]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("PianoFight", "144 Taylor St., San Francisco, CA 94102", 4, ["Bars", "American (New)"], [], [1700, 2400], "Casual", "Divey", false, false, [0, 0, 0, 5, 35], "$$", 7, 4.6, 0, null, [0, 0, 0, 1, 2]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("Dottie's True Blue Cafe", "28 6th St., San Francisco, CA 94103", 3, ["American (Traditional)", "Breakfast & Brunch", "Cafes"], ["Tuesday", "Wednesday"], [730, 1500], "Casual", "Casual", true, true, [89, 158, 410, 958, 1235], "$$", 265, 4.3, 0, null, [12, 21, 69, 255, 549]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("Mikkeller Bar", "34 Mason St., San Francisco, CA 94102", 2, ["Gastropubs"], [], [1200, 2400], "Casual", "Hipster", false, true, [19, 38, 45, 227, 185], "$$", 129, 4.6, 0, null, [1, 3, 5, 25, 36]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("The Cavalier", "360 Jessie St., San Francisco, CA 94103", 3, ["American (New)", "British", "Cocktail Bars"], [], [700, 2200], "Casual", "Classy", false, true, [15, 37, 79, 219, 153], "$$$", 36, 4.1, 501, 4.2, [2, 1, 13, 24, 47]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("Box Kitchen", "431 Natoma St., San Francisco, CA 94103", 7, ["Food Stands", "Burgers"], [], [0, 100, 1100, 1500, 1630, 2400], "Casual", "Divey", true, false, [9, 12, 25, 94, 134], "$", 17, 4.1, 0, null, [0, 0, 0, 0, 3]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("Buckhorn Grill", "865 Market St., San Francisco, CA 94103", 2, ["American (New)", "Sandwiches", "Steakhouses"], [], [1030, 2100], "Casual", "Casual", true, false, [10, 31, 95, 259, 138], "$$", 35, 4.2, 0, null, [1, 2, 6, 15, 21]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("Tempest", "431 Natoma St., San Francisco, CA 94103", 7, ["American (Traditional)", "Dive Bars"], [], [0, 200, 1100, 2400], "Casual", "Divey", true, false, [21, 20, 46, 180, 178], "$", 47, 4.3, 0, null, [0, 0, 0, 3, 3]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("Daniel's Cafe", "154 Ellis St., San Francisco, CA 94102", 3, ["Coffee & Tea", "Bagels", "Delis"], [], [700, 2000], "Casual", "Divey", true, false, [0, 3, 14, 65, 52], "$", 5, 4.2, 0, null, [0, 0, 4, 10, 8]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("Tu Lan", "8 6th St., San Francisco, CA 94103", 3, ["Vietnamese"], [], [1100, 2130], "Casual", "Divey", true, true, [13, 15, 32, 82, 98], "$", 117, 4, 0, null, [1, 2, 6, 25, 31]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("Taqueria Castillo Mason", "10 Mason St., San Francisco, CA 94102", 1, ["Mexican"], [], [900, 2100], "Casual", "Divey", true, false, [3, 5, 21, 40, 43], "$", 14, 4, 0, null, [0, 0, 0, 2, 1]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("Kin Khao", "55 Cyril Magnin St., San Francisco, CA 94102", 2, ["Thai"], [], [1130, 1400, 1730, 2200], "Casual", "Casual", false, true, [16, 47, 73, 139, 141], "$$", 29, 4.2, 224, 4.1, [6, 2, 9, 25, 17]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("Loving Hut", "Westfield San Francisco Centre, 845 Market St., Ste 12, San Francisco, CA 94103", 3, ["Vegan", "Vegetarian"], [], [1000, 2230], "Casual", "Casual", true, false, [20, 25, 60, 189, 124], "$", 31, 4.3, 0, null, [0, 1, 1, 4, 5]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("Taylor Street Coffee Shop", "375 Taylor St., San Francisco, CA 94102", 6, ["Breakfast & Brunch", "Burgers", "Sandwiches"], [], [700, 1400], "Casual", "Casual", true, true, [15, 24, 78, 247, 255], "$$", 71, 4.4, 0, null, [2, 3, 16, 137, 252]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("Show Dogs", "1020 Market St., San Francisco, CA 94102", 3, ["Hot Dogs", "Sandwiches"], [], [900, 2100], "Casual", "Casual", true, false, [34, 61, 116, 212, 220], "$$", 62, 4.1, 0, null, [2, 0, 6, 25, 12]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("54 Mint - Ristorante Italiano", "16 Mint Plz., San Francisco, CA 94103", 4, ["Italian"], [], [1130, 1430, 1730, 2200], "Casual", "Trendy", true, true, [50, 56, 127, 294, 214], "$$$", 90, 4, 0, null, [6, 2, 16, 41, 61]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("Little Delhi", "83 Eddy St., San Francisco, CA 94102", 2, ["Indian"], [], [1130, 2200], "Casual", "Casual", true, true, [95, 103, 162, 501, 402], "$$", 125, 4, 0, null, [5, 6, 18, 99, 69]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("Farmerbrown", "25 Mason St., San Francisco, CA 94102", 1, ["Southern, Soul Food, Breakfast & Brunch"], [], [930, 1430, 1700, 2100], "Casual", "Hipster", true, true, [179, 361, 687, 1059, 382], "$$", 308, 3.9, 0, null, [3, 9, 29, 64, 42]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("Kusina Ni Tess", "237 Ellis St., San Francisco, CA 94102", 5, ["Filipino"], ["Sunday"], [700, 2000], "Casual", "Casual", true, false, [7, 4, 17, 60, 41], "$", 10, 4.3, 0, null, [0, 0, 0, 0, 0]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("Homeskillet", "1001 Market St., San Francisco, CA 94103", 3, ["American (Traditional)", "Breakfast & Brunch", "Burgers"], [], [730, 1600], "Casual", "Casual", true, false, [10, 9, 20, 67, 32], "$$", 15, 4.2, 0, null, [0, 0, 3, 6, 11]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("The Hall", "1028 Market St., San Francisco, CA 94102", 4, ["Food Court"], ["Saturday", "Sunday"], [1100, 2000], "Casual", "Hipster", true, false, [3, 4, 17, 26, 24], "$$", 11, 4.7, 0, null, [0, 0, 1, 0, 1]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("Puccini & Pinetti", "129 Ellis Street., San Francisco, CA 94102", 3, ["Italian"], [], [1100, 2300], "Casual", "Casual", true, true, [57, 105, 180, 255, 134], "$$", 109, 3.7, 1324, 3.9, [17, 29, 89, 246, 162]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("Cafe Bistro", "Nordstrom, 865 Market St., San Francisco, CA 94103", 8, ["American (New)", "Comfort Food", "Cafes"], [], [1000, 2030], "Casual", "Casual", true, true, [32, 40, 110, 308, 173], "$$", 41, 4.3, 437, 4.1, [3, 1, 9, 36, 18]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("Westfield San Francisco Centre Food Emporium", "865 Market St., San Francisco, CA 94103", 2, ["Food Court"], [], [1000, 2130], "Casual", "Casual", true, false, [15, 12, 46, 114, 76], "$$", 0, null, 0, null, [0, 0, 0, 1, 0]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("Bangkok Noodles & Thai BBQ", "110 Powell St., San Francisco, CA 94102", 4, ["Thai"], [], [0000, 100, 1100, 2400], "Casual", "Casual", true, true, [72, 63, 143, 263, 115], "$", 67, 4, 0, null, [5, 2, 11, 76, 61]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("zpizza", "883 Mission St., San Francisco, CA 94103", 4, ["Pizza"], [], [1100, 2230], "Casual", "Casual", true, false, [9, 16, 32, 95, 84], "$$", 25, 4.5, 0, null, [0, 0, 0, 3, 1]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("Taqueria Cancun", "1003 Market St., San Francisco, CA 94103", 3, ["Mexican", "Tex-Mex"], [], [900, 2230], "Casual", "Divey", true, false, [22, 23, 74, 131, 80], "$", 72, 4.1, 0, null, [0, 2, 3, 13, 27]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("Cafe Venue", "1003 Market St., San Francisco, CA 94103", 3, ["Coffee & Tea", "Sandwiches", "Breakfast & Brunch"], ["Sunday"], [700, 1530], "Casual", "Casual", true, false, [9, 18, 44, 99, 64], "$", 27, 3.9, 0, null, [0, 2, 3, 11, 7]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("M.Y. China", "845 Market St., 4th Fl, San Francisco, CA 94103", 3, ["Chinese"], [], [1100, 2100], "Casual", "Trendy", true, true, [52, 93, 177, 257, 175], "$$", 63, 4.1, 834, 4.2, [5, 6, 22, 47, 83]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("Million Thai Business & Bar", "385 Taylor St., San Francisco, CA 94102", 7, ["Thai", "Bars"], [], [1030, 2330], "Casual", "Casual", true, true, [21, 14, 8, 29, 78], "$$", 0, null, 0, null, [0, 0, 0, 0, 0]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("TAP415", "845 Market St., 4th Fl., San Francisco, CA 94103", 5, ["Bars", "American (Traditional)"], [], [1130, 2100], "Casual", "Casual", true, true, [11, 14, 38, 35, 26], "$$", 5, 3.8, 0, null, [0, 0, 1, 10, 12]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("First Crush Business Wine Bar & Lounge", "101 Cyril Magnin St., San Francisco, CA 94102", 3, ["American (New)", "Wine Bars"], [], [1700, 2200], "Casual", "Romantic", true, true, [57, 112, 228, 350, 154], "$$$", 186, 3.5, 1532, 3.8, [12, 19, 48, 87, 99]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("Urban Tavern", "333 O'Farrell St., San Francisco, CA 94102", 6, ["Gastropubs", "Bars"], [], [600, 1100, 1130, 1430, 1730, 2400], "Casual", "Trendy", true, true, [70, 131, 174, 158, 59], "$$", 47, 3.4, 1101, 3.8, [14, 27, 90, 120, 52]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("Machine Coffee & Deli", "1024 Market St., San Francisco, CA 94102", 3, ["Cafes", "Delis"], [], [800, 1700], "Casual", "Hipster", true, false, [4, 2, 5, 26, 30], "$", 7, 4.2, 0, null, [0, 0, 0, 0, 0]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("SOMA Business & Bar", "85 5th St., San Francisco, CA 94103", 3, ["Italian", "Mediterranean", "Bars"], [], [630, 1000, 1130, 2200], "Casual", "Casual", true, true, [20, 12, 33, 33, 27], "$$", 25, 3.7, 0, null, [4, 6, 10, 26, 8]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("Montesacro Pinseria Romana Enoteca", "510 Stevenson St., San Francisco, CA 94103", 4, ["Pizza"], ["Sunday"], [1130, 1430, 1600, 2200], "Casual", "Casual", true, true, [0, 0, 2, 12, 51], "$$", 5, 4.3, 0, null, [0, 0, 0, 1, 2]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("Punjab Kabab House", "101 Eddy St., San Francisco, CA 94102", 2, ["Indian", "Pakistani", "Halal"], [], [1130, 2300], "Casual", "Casual", true, true, [17, 13, 43, 89, 53], "$", 25, 4.2, 0, null, [0, 1, 7, 10, 6]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("The Old Siam Thai Business", "201 Ellis St., San Francisco, CA 94102", 4, ["Thai"], [], [1100, 2300], "Casual", "Casual", true, true, [23, 19, 73, 129, 64], "$$", 52, 4.1, 0, null, [3, 9, 24, 97, 59]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("Jazz Bistro At Les Joulins", "44 Ellis St., San Francisco, CA 94102", 4, ["Jazz & Blues", "French"], [], [1100, 2300], "Casual", "Romantic", true, true, [37, 40, 49, 50, 21], "$$", 33, 3.4, 0, null, [18, 15, 27, 58, 33]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("Cable Car City Pub & Cafe", "1 Hallidie Plz., San Francisco, CA 94102", 1, ["Burgers", "Pubs"], [], [0, 30, 1600, 2400], "Casual", "Casual", true, true, [30, 27, 34, 32, 19], "$$", 14, 3.4, 0, null, [5, 1, 8, 24, 3]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("Cupola Pizzeria", "845 Market St., 4th Fl, Ste 400, San Francisco, CA 94103", 3, ["Pizza", "Italian"], [], [1130, 2130], "Casual", "Casual", true, true, [32, 56, 98, 154, 72], "$$", 41, 4.1, 487, 3.9, [2, 13, 21, 61, 48]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("Latte Express", "48 5th St., San Francisco, CA 94103", 2, ["Coffee & Tea", "Vietnamese", "Sandwiches"], [], [500, 1930], "Casual", "Casual", true, false, [6, 10, 25, 57, 25], "$", 6, 4, 0, null, [0, 0, 0, 1, 2]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("Nespresso Boutique at Bloomingdale's", "845 Market St., Concourse Level, San Fransisco, CA 94103", 3, ["Coffee & Tea", "Cafes"], [], [1000, 2100], "Casual", null, false, true, [3, 0, 2, 12, 26], "$$", 0, null, 0, null, [1, 1, 2, 14, 16]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("Coriander Gourmet Thai", "Westfield San Francisco Centre, 845 Market St., San Francisco, CA 94103", 2, ["Thai"], [], [1000, 2100], "Casual", "Casual", true, false, [39, 68, 147, 254, 81], "$", 0, null, 0, null, [0, 1, 3, 11, 12]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("Lark Creek Steak", "Westfield San Francisco Centre, 845 Market St, 4th Fl., San Francisco, CA 94103", 3, ["Steakhouses", "American (Traditional)"], [], [1130, 1400, 1730, 2100], "Casual", "Classy", true, true, [56, 75, 152, 295, 143], "$$$", 55, 4.1, 0, null, [7, 16, 23, 95, 79]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("21 Club", "98 Turk St., San Francisco, CA 94102", 2, ["Dive Bars"], [], [0, 200, 1000, 2400], null, "Divey", null, null, [1, 2, 12, 28, 56], "$", 10, 4.3, 0, null, [0, 0, 1, 0, 1]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("Aunt Charlie's Lounge", "133 Turk St., San Francisco, CA 94102", 3, ["Gay Bars"], [], [1200, 2400], null, "Divey", null, null, [8, 7, 20, 56, 75], "$", 11, 4.7, 0, null, [0, 0, 0, 0, 0]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("Showdown", "10 6th St., San Francisco, CA 94103", 3, ["Bars"], ["Sunday", "Monday and Tuesday from 2200 to 0200"], [0, 200, 1700, 2400], null, "Casual", null, null, [2, 2, 16, 36, 38], "$", 17, 4, 0, null, [0, 0, 0, 0, 0]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("50 Mason Social House", "50 Mason St., San Francisco, CA 94102", 2, ["Bars"], ["Monday, Tuesday through Wednesday from 0000 to 0200"], [0, 200, 1700, 2400], null, "Casual", null, null, [5, 5, 9, 25, 31], "$", 8, 4.3, 0, null, [0, 0, 0, 1, 1]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("S & R Lounge", "Inside Hotel Zetta, 55 5th St., San Francisco, CA 94103", 2, ["Lounges"], ["Monday"], [1600, 2300], null, "Trendy", null, null, [2, 2, 5, 18, 13], "$$", 0, null, 0, null, [0, 0, 0, 1, 0]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("OMG", "43 6th St., San Francisco, CA 94103", 4, ["Dance Clubs", "Gay Bars"], ["Monday"], [0, 200, 1700, 2400], null, "Trendy", null, null, [4, 3, 10, 9, 21], "$$", 5, 3.9, 0, null, [0, 0, 0, 0, 0]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("Kanpai", "222 Mason St., San Francisco, CA 94102", 5, ["Lounges"], ["Monday", "Tuesday", "Sunday"], [1700, 2400], null, "Trendy", null, null, [0, 1, 0, 1, 11], "$$$", 0, null, 0, null, [0, 0, 0, 0, 0]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("Union Square Sports Bar", "115 Mason St., San Francisco, CA 94102", 3, ["Sports Bars", "Pool Halls"], [], [0, 200, 1100, 2400], null, "Casual", false, true, [14, 10, 32, 36, 20], "$", 19, 3.3, 0, null, [4, 2, 7, 7, 6]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("Infusion Lounge", "124 Ellis St., San Francisco, CA 94102", 3, ["Lounges", "Diners"], ["Monday", "Sunday"], [0, 200, 1800, 2400], "Dressy", "Trendy", false, true, [289, 243, 244, 280, 174], "$$$", 83, 3.2, 249, 3.8, [2, 1, 6, 22, 11]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("Lupicia Tea Shop", "845 Market St., Ste 381, San Francisco, CA 94103", 3, ["Coffee & Tea"], [], [1000, 2030], null, null, true, null, [0, 3, 15, 62, 90], "$$", 8, 4.2, 0, null, [0, 0, 0, 0, 0]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("Blue Bottle Coffee Co", "66 Mint St., San Francisco, CA 94103", 4, ["Coffee & Tea"], [], [700, 1900], null, null, true, null, [48, 91, 159, 536, 779], "$$", 427, 4.4, 0, null, [0, 0, 0, 0, 0]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("Beard Papa", "845 Market St., Ste16, San Francisco, CA 94103", 3, ["Bakeries", "Desserts"], [], [1000, 2100], null, null, true, null, [25, 53, 125, 334, 374], "$", 59, 4.3, 0, null, [0, 0, 0, 0, 0]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("DavidsTea", "865 Market Street, San Francisco, CA 94103", 2, ["Coffee & Tea"], [], [1000, 2230], null, null, true, null, [3, 3, 9, 29, 35], "$$", 13, 4.6, 0, null, [0, 0, 0, 0, 0]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("Espresso Bar", "865 Market Street, San Francisco, CA 94103", 2, ["Coffee & Tea", "Internet Cafes"], [], [830, 2230], null, null, true, null, [0, 0, 3, 7, 14], "$", 0, null, 0, null, [0, 0, 0, 0, 0]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("Equator Coffees & Teas", "986 Market St., San Francisco, CA 94102", 2, ["Coffee & Tea"], [], [700, 1900], null, null, true, null, [2, 1, 2, 16, 15], "$$", 6, 4.5, 0, null, [0, 0, 0, 0, 0]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("Sur La Table", "845 Market St., San Francisco, CA 94103", 3, ["Coffee & Tea", "Cooking Classes"], [], [1000, 2000], null, null, true, null, [2, 3, 2, 15, 14], "$$$", 0, null, 0, null, [0, 0, 0, 0, 0]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("Barbary Coast", "55 Cyril Magnin St., San Francisco, CA 94102", 2, ["Bakeries", "Coffee & Tea"], ["Monday"], [1130, 1430, 1730, 2130], null, null, true, null, [6, 8, 12, 21, 14], "$", 0, null, 0, null, [0, 1, 11, 11, 9]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("Cafe Bellini", "865 Market St., Ste C46, San Francisco, CA 94103", 2, ["Bakeries", "Coffee & Tea"], [], [800, 830], null, null, true, null, [10, 10, 26, 18, 15], "$$", 0, null, 0, null, [0, 0, 0, 0, 0]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("Java Trading Company", "100 5th St., San Francisco, CA 94103", 4, ["Coffee & Tea", "CSA"], [], [730, 1700], null, null, true, null, [0, 1, 0, 3, 4], "$", 0, null, 0, null, [0, 0, 0, 0, 0]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("Starbucks", "Nikko Hotel, 222 Mason St., San Francisco, CA 94102", 5, ["Coffee & Tea"], [], [500, 2330], null, null, true, null, [12, 6, 14, 14, 6], "$", 11, 3.7, 0, null, [2, 3, 10, 11, 15]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("Starbucks", "865 Market St., San Francisco, CA 94103", 2, ["Coffee & Tea"], [], [500, 2200], null, null, true, null, [30, 9, 12, 17, 13], "$", 12, 3.7, 0, null, [0, 0, 0, 6, 5]);
arrayOfBusinesses.push(newBusiness);
newBusiness = new Business ("Teavana", "865 Market St., San Francisco, CA 94103", 2, ["Coffee & Tea"], [], [1000, 2100], null, null, true, null, [10, 3, 5, 8, 8], "$$$", 6, 3.8, 0, null, [0, 0, 0, 0, 0]);
arrayOfBusinesses.push(newBusiness);

/*This function calculates the ratings from Yelp and TripAdvisor. These ratings are stored in arrays of five numbers. Each number represents the number
of 1-star, 2-star, 3-star, 4-star, and 5-star reviews respectively. For example, if the .yelpReviews property is [0, 0, 0, 1, 0], the business
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

/*This method calculates the "Overall" rating for the business. The average is weighted by the number of reviews available from each source.
The result is then stored in each object so that the businesses  can be easily sorted by their rating.*/
Business.prototype.ovrRating = function() {
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

//This function sorts and filters the array. The next two functions are the sortFunctions. The possible filter functions follow the sortFunctions, starting with isOpen.
function sortBy(array, sortFunction) {
	return function(filterFunction1, filterFunction2, filterFunction3) {
		return array.sort(sortFunction).filter(filterFunction1).filter(filterFunction2).filter(filterFunction3); //Sorts and filters the array at the same time.
	}
}

//Will be used in the switch below to sort the results by rating/
var sortByRating = sortBy(arrayOfBusinesses, function(a, b) {
	return b.ovrRating() - a.ovrRating();
});

//Will be used in the switch below to sort the results by distance.
var sortByDistance = sortBy(arrayOfBusinesses, function(a, b) {
	return a.distance - b.distance;
});

//Can be passed as a filterFunction in the sortArray function above. This filters out businesses that aren't open.
function isOpen(business) {
	var array = business.hours;
	while (array.length > 0) {
		if (time >= array[0] && time <= array[1]) { //The function sees if the user's inputted time variable is between the first number pair in the .hours array.
			return true;
		}
		array.shift(); //If the time isn't between the first pair, the function shifts the first pair out of the array and tests the next pair.
		array.shift();
	}
	return false;
}

//Can be passed as a filterFunction in the sortArray function above. This filters out businesses that wouldn't be appropriate for a quick meal.
function hasTakeout(business) {
	if (business.takeOut && !business.waitService) {
		return true;
	}
	return false;
}

//Can be passed as a filterFunction in the sortArray function above. This filters out businesses that wouldn't be appropriate for a sit-down dinner.
function hasWaitService(business) {
	return business.waitService;
}

//This function returns true if the given element is present in the given array. It's used several times below.
function isInArray(element, array) {
	for (var i = 0; i < array.length; i++) {
		if (element === array[i]) {
			return true;
		}
	}
	return false;
}

var arrayOfBarCuisines = ["Bars", "Wine Bars", "Pubs", "Lounges", "Cocktail Bars", "Dive Bars", "Gay Bars", "Sports Bars"]; //Used in the next two functions.

//Can be passed as a filterFunction in the sortArray function above. This function filters out businesses that wouldn't be appropriate for eating a meal because they are primarily bars.
function isNotABar(business) {
	for (var i = 0; i < business.cuisine.length; i++) { //It checks each of the cuisines associated with the business.
		var cuisine = business.cuisine[i];
		if (!isInArray(cuisine, arrayOfBarCuisines)) { //As soon as it finds one cuisine that isn't in the arrayOfBarCuisine, it returns true.
			return true;
		}
	}
	return false; //If all of the cuisines are in the arrayOfBarCuisines array, the function assumes the business is exclusively a bar and returns false.
}
//Can be passed as a filterFunction in the sortArray function above. This function filters out businesses that wouldn't be appropriate for getting drinks because they don't have a bar scene.
function hasABar(business) {
	arrayOfBarCuisines.push("Gastropubs"); //Gastropubs isn't included in array originally because filterNotABar would filter out Gastropubs if the user wanted to eat food. 
	for (var i = 0; i < business.cuisine.length; i++) { //It checks each of the cuisines associated with the business.
		var cuisine = business.cuisine[i];
		if (isInArray(cuisine, arrayOfBarCuisines)) { //As soon as function finds one cuisine that's in the array of bar cuisines, it returns true.
			return true; 
		}
	}
	return false; //If the function doesn't find a single bar cuisine, it assumes the business wouldn't be a great place for drinks and returns false.
}

//Can be passed as a filterFunction in the sortArray function above. This function is a filler-filter so that the program can always pass three filter functions to the sortBy function. Probably not the most efficient but it gets the job done :]
function noFilter() {
	return true;
}

var action = prompt("Hello! What would you like to do?\ Enter one of the following:\nquick breakfast\nquick lunch\nquick dinner\ndrinks\nsit-down dinner");

if (isInArray(action, ["quick breakfast", "quick lunch", "quick dinner", "drinks", "sit-down dinner"])) {
	var time = Number(prompt("When do you want your " + action + "? Use military time (e.g., 6 p.m. is 1800).", "0900"));
	action += " sorted by " + prompt("Do you want to sort the results by rating or distance? Enter one of the following:\nrating\ndistance", "rating");
}
else alert("That's not a valid activity. Refresh your browser and try again.")

var resultArray;

switch (action) {
	case "quick breakfast sorted by distance":
	case "quick lunch sorted by distance":
	case "quick dinner sorted by distance":
		resultArray = sortByDistance(isOpen, hasTakeout, isNotABar);
		break;
	case "quick breakfast sorted by rating":
	case "quick lunch sorted by rating":
	case "quick dinner sorted by rating":
		resultArray = sortByRating(isOpen, hasTakeout, isNotABar);
		break;
	case "drinks sorted by distance":
		resultArray = sortByDistance(isOpen, hasABar, noFilter);
		break;
	case "drinks sorted by rating":
		resultArray = sortByRating(isOpen, hasABar, noFilter);
	case "sit-down dinner sorted by distance":
		resultArray = sortByDistance(isOpen, hasWaitService, isNotABar);
		break;
	case "sit-down dinner sorted by rating":
		resultArray = sortByRating(isOpen, hasWaitService, isNotABar);
		break;
	default:
		alert("That's not a valid sorting option. Refresh your browser and try again.");
}

//Can be passed as a "writeFunction" in the publishResults function below.
function toConsole(string) {
  console.log(string);
};

//Can be passed as a "writeFunction" in the publishResults function below.
function toWindow(string) {
	document.write(string);
}

//Can be passed as a "writeFunction" in the publishResults function below.
function toAlert(string) {
	alert(string);
}

//This function takes an array of strings, along with the conjunction "and" or "or", and outputs them in a grammatically accurate list.
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

var count = 1; //Used to start the numbered list in the publishResults function.

//Builds a string and calls a writeFunction to output the result. publishResults itself is called by the numberOfResults function below.
function publishResults(writeFunction) {
  return function (business) {
    var result = "";
    result += count + ". " + business.name + " is rated " + business.ovrRating().toFixed(3) + ". <br>";
    count++;
    result += "It's a " + business.distance + "-minute walk away. The address is " + business.address + ".<br>";
    if(business.ambiance === null) {
    	business.ambiance = "Unknown";
    }
    result += "Check it out if you like " + formatList(business.cuisine, "or") + " with a \"" + business.ambiance + "\" ambiance.<br>"
    result += "Price = " + business.yelpPrice + "<br>";
	if (business.closedOn.length > 0) {
		result += "Head's up: this business is CLOSED on " + formatList(business.closedOn, "and") + ".<br>";
	}
	result += "<br>";
    return writeFunction(result);
  }
}
//Ensures the right number of results are outputted by calling the publishResults function.
function numberOfResults(howMany, callback) {
  for (var i = 0; i < Math.min(howMany, resultArray.length); i++) { //It will call publishResults by the lesser of (a) the number of results requested by the user or (b) the total number of relevant results.
    callback(resultArray[i]);
  }
}

var numResults = prompt("How many results would you like to see? Enter a whole number.", 10),
	displayMethod = prompt("Where do you want to view your results? Enter one of the following:\nwindow (recommended)\nconsole\nalert", "window");

switch(displayMethod) {
	case "window":
		numberOfResults(numResults, publishResults(toWindow));
		break;
	case "console":
		numberOfResults(numResults, publishResults(toConsole));
		break;
	case "alert":
		numberOfResults(numResults, publishResults(toAlert));
		break;
	default:
		alert("That's not a valid display option. Refresh your browser and try again.")
}

document.write("There are no more results to display.")
