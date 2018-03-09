# Black Panther Forum

![fireshot capture 2 - black panther - http___localhost_3000_](https://user-images.githubusercontent.com/22990146/37184366-fc3848b8-2308-11e8-9bca-0a2485233bca.png)

This project holds database full of favorite Black Panther quotes entered by any user. 

How It's Made:
Tech used: HTML, CSS, JavaScript, MongoDB, Express, and Node.js

This is a CRUD (Create,Read, Update, and Delete) application. In this application, I put the server on mode using express modules. I implemented nodemon in my script, so that I could make changes to my web application without stopping and restarting. I could just refresh. I also created an ejs file, so that I wouldn't have to repeat myself a million times. This method allows me to define something once and reuse it throughout my application. I made a backup index.html file just in case anything happened. I connected the app to a mongo database in ml labs by serving a link with my database user name and password. In my javascript file for my server, I make post, get, update, and read calls to my paths. I made a get for my app to get the quotes stored in my database and load my landing page. I made a post call, so that whenever the user types in a quote and presses submit on the form, it will post to my path. I also created update calls for the thumbs up and down icons. This would add +1 each time the icon is pressed. Additionally, I have a delete , which handles a click on the icon  every time a message is deleted--it is removed from the database. I made a main js file I binded event listeners to elements in the DOM. I also made an array for the pictures at the side, so that every time you click the picture, the source is switched to another picture of a movie scene.

Optimizations
(optional)
As always, I would definitely improve the UI. It would be cool if I could have more pages that my navigation bar was linking to. Right now, it is just static. I could have multiple databases from different shows and movies. 

Lessons Learned:
I learned how to bind an event listener to an element.  I learned how to use MongoDB, I learned a little bit about how middleware works to do the dirty work.   
