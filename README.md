# Food-Delivery-using-MERN

Install NodeJs ( Ignore If Already Installed)

Visit the official Node.js website i.e) https://nodejs.org/en/download/
Download the Node.js installer
Run the installer.
Follow the prompts in the installer.
—First Run Backend then Frontend & Admin—

Steps To Setup Backend Of The Project

Open Project Folder In VS Code
Open Integrated Terminal- Right Click on Sidebar > Select “Open In Integrated Terminal”
Type “npm install” and press Enter and Wait for Installation to be completed (requires Internet)
Setup The MongoDB
a. Open this link- https://www.mongodb.com/cloud/atlas/register <br>
b. After that Sign Up on the website.
c. Click on New Project Option
d. After Creating Project go to Database Section & Build a database
e. Select M0 & Your Region & Create Database
f. Setup Username & Password & Create User
Note: Do not use ‘@’ symbol in the password g. Now Click on Finish & Close
h. Whitelist IP 0.0.0.0 & Click on Add Entry
i. Now Click on Connect
j. Now Select Compass Option
k. And Copy the Connection String
l. And Paste It in db.js replace password with password you set previously in 4.F & save changes
Now We have to Set Up stripe
● Open .env file in backend folder paste your stripe secret key in STRIPE_SECRET_KEY variable
● Now Open orderController file located in backend/controller folder & add your country currency
To Run Backend use npm run server in Integrated Terminal Steps To Run Frontend & Admin Panel Of The Project
Open Project Folder In VS Code
Open Integrated Terminal in project directory
○ Right Click on Sidebar > Select “Open In Integrated Terminal”
Type “npm install” and press Enter and Wait for Installation to be completed (requires Internet)
After Installation You will See ‘node_modules’ Folder in the Sidebar
After that type “npm run dev” in terminal
Now Your Project Will Start In Your Default Web Browser.
