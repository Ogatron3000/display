To clone and run this project, first do:
```
git clone https://github.com/Ogatron3000/display.git
```
Then navigate into cloned directory and install dependencies:
```
npm install
```

Rename `.env.example` to `.env` and insert your Google Maps API key and Recaptcha V3 *site* API key. 
To create these, check the links below:

Google Maps:
https://developers.google.com/maps/documentation/javascript/get-api-key#creating-api-keys

Recaptcha:
https://developers.google.com/recaptcha/intro#recaptcha-overview

After than, you can start the server:
```
npx json-server --watch db.json --port 4000 --delay 1000
```
And finally, run the app:
```
npm start
```
