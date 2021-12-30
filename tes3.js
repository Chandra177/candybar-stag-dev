var mouse_is_inside = false;

$(document).ready(function () {
    const names = [
       "Belgian Milk Chocolate Black Forest",
       "Domori Dark Chocolate Campos Coffee Beans 150g",
       "Mona Lisa Dark Chocolate Blossom Curls",
       "Mona Lisa White Chocolate Blossom Curls",
       "Mona Lisa Milk Chocolate Blossom Curls",
       "Large Blue"
    ]

    const images = [
       {
        "Large Blue":"large-blue.png",
        "Belgian Milk Chocolate Black Forest":"belgian_milk.jpg",
        "Domori Dark Chocolate Campos Coffee Beans 150g":"domori_dark.jpg",
        "Mona Lisa Dark Chocolate Blossom Curls":"mona_lisa_dark.png",
        "Mona Lisa White Chocolate Blossom Curls":"mona_lisa_white.png",
        "Mona Lisa Milk Chocolate Blossom Curls":"mona_lisa_milk.png"
        }
    ]
    
    //shortens document.getEgetElementById
    function element(id) {
        return document.getElementById(id);
    }
    let allSearchData = ""; //decleared to collect all search names
    
    //gets each inputs data starting from second input
    function getResults() {
        //gets value of input
        let search = element("search-input").value;
        let items = "<div class='search-border'>" + "</div>"   
        let allResult = "<div class='all-results-block pt-1 pb-1' style='color:rgb(225, 104, 130)'>" + "All results" + "</div>"
        let counter = 0; // counts to 10
        allSearchData = ""; //clears data for each word typed
        
        hideSearchResults();
        clearSearchResults();
        clearSearchData(); //
        //starts searching from the second input
        if (search.length > 1) {
            for (let x of names) {
                if (counter < 10) {
                    //checks for similarities
                    if (x.toLowerCase().includes(search.toLowerCase())) {
                    //populates the suggestion div
                    items +=
                        "<a href='' class='search-box-block'>" +
                            "<div class='row'>" +
                                "<div class='search-box-item'>" +
                                    "<div class='col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1'>" +
                                        "<img src='" + images[0][x] +"' class='search-box-img' />" +
                                    "</div>" +
                                "</div>" +
                                "<div class='ml-3' style='width: 350px;'>" +
                                    "<span class='search-box-name'>" + x +
                                        "<div class='row pl-3'>" +
                                            "<span class='search-box-price'>" +
                                                "$9.99" +
                                            "</span>" +
                                            "<span class='Oval'></span>" +
                                            "<span class='search-box-category'>Chocolate shop</span>" +
                                        "</div>" +
                                    "</span>" +
                                "</div>" +
                                "<div>" +
                                    "<img src='plus-circle.png' class='search-box-button' />" +
                                "</div>" +
                            "</div>" +
                        "</a>"
                    counter++;
                    }
                }
                if (x.toLowerCase().includes(search.toLowerCase()))
                    //saves all the realated names
                    allSearchData += "<p>" + x + "</p>";
            }
            //populates the suggestion div
            element("search-results").innerHTML += (items + allResult);
            displaySearchResults();
        }
    }
    //displays the suggestion div
    function displaySearchResults() {
        element("search-results").style.display = "block";
    }
    //clears the suggestion div
    function clearSearchResults() {
        element("search-results").innerHTML = "";
    }
    
    //hides the suggestion div
    function hideSearchResults() {
        element("search-results").style.display = "none";
    }
    //displays names when you click a suggestions
    function displayData(name) {
        element("search-data").innerHTML = "<p>" + name + "</p>";
        hideSearchResults();
    }
    //displays all related names to your search when you hit enter
    function displayAllData(names) {
        element("search-data").innerHTML = names;
        hideSearchResults();
    }
    //clears names displayed from search result
    function clearSearchData() {
        element("search-data").innerHTML = "";
    }
    //gets results after each input
        element("search-input").oninput = function() {
        getResults();
    };
    
    element("search-input").addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        displayAllData(allSearchData);
    }
    });

    $(document).on('click', function (e) {
        if ($(e.target).closest(".search-box-block").length === 0) {
            $(".search-border").hide();
            $(".search-box-block").hide();
            $(".all-results-block").hide();
        }
    });

})