const sportsBtn = document.getElementById("sports")
const EntertainmentBtn = document.getElementById("Entertainment")
const scienceBtn = document.getElementById("science")
const HealthBtn = document.getElementById("Health")
const TechnologyBtn = document.getElementById("Technology")
const searchBtn = document.getElementById("Search")
const newsQuery = document.getElementById("newsQuery");
const newstype = document.getElementById("newstype");
const newsdetails = document.getElementById("newsdetails");
const Headlines = document.getElementById("Headlines");

//Array
let newsdataArr = [];

//APIS
const url = ""
const baseurl = "https://content.newtonschool.co/v1/pr/"
const apiKey = "64806cf8b7d605c99eecde47"
const sports_News = "https://content.newtonschool.co/v1/pr/"
const Entertainment_News = "https://content.newtonschool.co/v1/pr/"
const science_News = "https://content.newtonschool.co/v1/pr/"
const Health_News = "https://content.newtonschool.co/v1/pr/"
const Technology_News = "https://content.newtonschool.co/v1/pr/"
const Headlines_news = "https://content.newtonschool.co/v1/pr/"
const search_news = "https://content.newtonschool.co/v1/pr/"


window.onload = function () {
    newstype.innerHTML = "<h4>Headlines</h4>";
    fetchHeadlinesNews();
};




sportsBtn.addEventListener("click", function () {
    newstype.innerHTML = "<h4>sports</h4>";
    fetchsportNews();

});

EntertainmentBtn.addEventListener("click", function () {
    newstype.innerHTML = "<h4>Entertainment</h4>";
    fetchEntertainmentNews();
});

scienceBtn.addEventListener("click", function () {
    newstype.innerHTML = "<h4>science</h4>";
    fetchscienceNews();
});

HealthBtn.addEventListener("click", function () {
    newstype.innerHTML = "<h4>Health</h4>";
    fetchHealthNews();
});

TechnologyBtn.addEventListener("click", function () {
    newstype.innerHTML = "<h4>Technology</h4>";
    fetchTechnologyNews();
});

searchBtn.addEventListener("click", function () {
    newstype.innerHTML = "<h4>search :" + newsQuery.value + "</h4>";
    fetchQueryNews();
});

const fetchHeadlinesNews = async () => {
    const response = await fetch(baseurl + apiKey + "/news");

    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        console.log(myJson);
        newsdataArr = myJson;

    } else {
        //error handle
        console.log(response.status, response.statusText);
    }
    displayNews();
}

const fetchsportNews = async () => {
    const response = await fetch(baseurl + apiKey + "/news");

    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        console.log(myJson);
        newsdataArr = myJson;

    } else {
        //error handle
        console.log(response.status, response.statusText);
    }

    displayNews();

}

const fetchEntertainmentNews = async () => {
    const response = await fetch(baseurl + apiKey + "/news");

    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        console.log(myJson);
        newsdataArr = myJson;

    } else {
        //error handle
        console.log(response.status, response.statusText);
    }

    displayNews();

}

const fetchscienceNews = async () => {
    const response = await fetch(baseurl + apiKey + "/news");

    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        console.log(myJson);
        newsdataArr = myJson;

    } else {
        //error handle
        console.log(response.status, response.statusText);
    }

    displayNews();

}

const fetchHealthNews = async () => {
    const response = await fetch(baseurl + apiKey + "/news");

    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        console.log(myJson);
        newsdataArr = myJson;

    } else {
        //error handle
        console.log(response.status, response.statusText);
    }

    displayNews();

}

const fetchTechnologyNews = async () => {
    const response = await fetch(baseurl + apiKey + "/news");

    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        console.log(myJson);
        newsdataArr = myJson;

    } else {
        //error handle
        console.log(response.status, response.statusText);
    }

    displayNews();

};

const fetchSearchNews = async () => {
    const response = await fetch(baseurl+apiKey+"/news");

    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        console.log(myJson);
        newsdataArr = myJson;

    } else {
        //error handle
        console.log(response.status, response.statusText);
    }

    displayNews();
}


const fetchQueryNews = async () => {
    if (newsQuery.value == null)
        return;

    const response = await fetch(baseurl+apiKey+"/news");

    if (response.status >= 200 && response.status < 300) {
        const myJson = await response.json();
        newsdataArr = myJson;

    } else {
        //error handle
        console.log(response.status, response.statusText);
    }

    displayNews();
};

function displayNews() {

    newsdetails.innerHTML = "";

    if (newsdataArr.length == 0) {
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    newsdataArr.forEach(news => {
console.log({news})

        let col = document.createElement("div");
        col.className = "col-sm-12 col-md-4 col-lg-3 p-2 card";

        let card = document.createElement("div");
        card.className = "p-2";

        let image = document.createElement("img");
        image.setAttribute("height", "matchparnt");
        image.setAttribute("width", "100%");
        image.src = url;
        let cardbody = document.createElement("div");
        let newsHeading = document.createElement("h5");
        newsHeading.className = "card-title";
        newsHeading.innerHTML = news.content;



        let discription = document.createElement("p");
        discription.className = "text-muted";
        discription.innerHTML = news[" author"];

        let link = document.createElement("a");
        link.className = "btn btn-dark";
        link.setAttribute("target", "_blank");
        link.href = news.url;
        link.innerHTML = "Read more";

        cardbody.appendChild(newsHeading);

        cardbody.appendChild(discription);
        cardbody.appendChild(link)

        card.appendChild(image);
        card.appendChild(cardbody);

        col.appendChild(card);
        newsdetails.appendChild(col);


    });
}
