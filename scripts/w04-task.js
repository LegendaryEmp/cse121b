/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Mbabo Jacob Okwusi",
    photo: "images/me.jpg",
    favoriteFoods: [
        "Soup and Garri", 
        "Beans", 
        "Rice and Stew", 
        "Jollof Rice", 
        "Catfish Peppersoup"
    ],
    hobbies: [
        "Surfing",
        "Learning",
        "Music Production"
    ],
    placedLived: [

    ],
};



/* Populate Profile Object with placesLive objects */

myProfile.placedLived.push(
    {
      place: "Mile 4, Port Harcourt",
      length: "1 Year"
    },
    {
      place: "Mile 3, Diobu, Port Harcourt",
      length: "1year and 6 months"
    },
    {
      place: "Alakahia, Port Harcourt",
      length: "1 year and 6 months"
    }
  );


/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */
document.querySelector("#photo").setAttribute("src", myProfile.photo);
document.querySelector("#photo").setAttribute("alt", myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(
    food => {
        let li = document.createElement("li");
        li.textContent = food;
        document.querySelector("#favorite-foods").appendChild(li);
    }
);

/* Hobbies List */
myProfile.hobbies.forEach(
    hobbie => {
        let li = document.createElement("li");
        li.textContent = hobbie;
        document.querySelector("#hobbies").appendChild(li);
    }
);

/* Places Lived DataList */
myProfile.placedLived.forEach(
    place => {
        let dt = document.createElement("dt");
        dt.textContent = place.place;
        document.querySelector("#places-lived").appendChild(dt);
        let dd = document.createElement("dd");
        dd.textContent = place.length;
        document.querySelector("#places-lived").appendChild(dd);
    }
);

