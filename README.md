# findThePerson
fint the person

this Project is a full stack project with Node.js on the backend and React-app on the front end.

In this project i had to parse a give dataset that was provided as a CSV file, in order to do so,
i've used a script that you can find in: database-migrations>csv-exports.js

in order to fecth geo location i used the google API (its not on the repo, as wel as the CSV is not on the repo)

as a DB i used MongoDB it holds the data provided by google for geolocation and data regarding the users.

on the front end i used a very basic UI with React App that shows on a map the locations near the provided point.

![UI](https://user-images.githubusercontent.com/77383329/128132960-540b9c62-ea8b-403f-a74c-9d6212a5cc7a.png)

this site is deployed on heroku: https://find-the-person.herokuapp.com/


How to install ?

git clone https://github.com/AdiBarHalevi/findThePerson.git

cd findThePerson/

npm i

npm i ./client
