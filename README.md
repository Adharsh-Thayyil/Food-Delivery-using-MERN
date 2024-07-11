# Food-Delivery-using-MERN

Install NodeJs ( Ignore If Already Installed)

Visit the official Node.js website i.e) https://nodejs.org/en/download/ <br>
Download the Node.js installer <br>
Run the installer. <br>
Follow the prompts in the installer. <br>
—First Run Backend then Frontend & Admin—

Steps To Setup Backend Of The Project

Open Project Folder In VS Code <br>
Open Integrated Terminal- Right Click on Sidebar > Select “Open In Integrated Terminal” <br>
Type “npm install” and press Enter and Wait for Installation to be completed (requires Internet)
Setup The MongoDB <br>
a. Open this link- https://www.mongodb.com/cloud/atlas/register <br>
b. After that Sign Up on the website. <br>
c. Click on New Project Option <br>
d. After Creating Project go to Database Section & Build a database <br>
e. Select M0 & Your Region & Create Database <br>
f. Setup Username & Password & Create User <br>
Note: Do not use ‘@’ symbol in the password <br>
g. Now Click on Finish & Close <br>
h. Whitelist IP 0.0.0.0 & Click on Add Entry <br>
i. Now Click on Connect <br>
j. Now Select Compass Option <br>
k. And Copy the Connection String <br>
l. And Paste It in db.js replace password with password you set previously in 4.F & save changes <br>

Now We have to Set Up stripe
● Open .env file in backend folder paste your stripe secret key in STRIPE_SECRET_KEY variable <br>
● Now Open orderController file located in backend/controller folder & add your country currency <br>

To Run Backend use npm run server in Integrated Terminal Steps To Run Frontend & Admin Panel Of The Project <br>
● Open Project Folder In VS Code <br>
● Open Integrated Terminal in project directory <br>
● Right Click on Sidebar > Select “Open In Integrated Terminal” <br>
● Type “npm install” and press Enter and Wait for Installation to be completed (requires Internet) <br>
● After Installation You will See ‘node_modules’ Folder in the Sidebar <br>
● After that type “npm run dev” in terminal <br>
● Now Your Project Will Start In Your Default Web Browser.
