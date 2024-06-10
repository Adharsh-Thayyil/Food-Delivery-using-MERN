Install NodeJs ( Ignore If Already Installed)

 1. Visit the official Node.js website i.e)
 https://nodejs.org/en/download/
 2. Download the Node.js installer
 3. Run the installer.
 4. Follow the prompts in the installer.

 —First Run Backend then Frontend & Admin—
 
 Steps To Setup Backend Of The Project
 1. Open Project Folder In VS Code
 2. Open Integrated Terminal- Right Click on Sidebar > Select “Open In Integrated
 Terminal”
 3. Type “npm install” and press Enter and Wait for
 Installation to be completed (requires Internet)
 4. Setup The MongoDB <br/>
 a. Open this link- https://www.mongodb.com/cloud/atlas/register <br/>
 b. After that Sign Up on the website. <br/>
 c. Click on New Project Option <br/>
 d. After Creating Project go to Database Section &
 Build a database <br/>
 e. Select M0 & Your Region & Create Database <br/>
 f. Setup Username & Password & Create User <br/>
 **Note: Do not use ‘@’ symbol in the password**
 g. Now Click on Finish & Close <br/>
 h. Whitelist IP 0.0.0.0 & Click on Add Entry <br/>
 i. Now Click on Connect <br/>
 j. Now Select Compass Option <br/>
 k. And Copy the Connection String <br/>
 l. And Paste It in db.js replace password with password
 you set previously in 4.F & save changes <br/>
 5. Now We have to Set Up stripe <br/>
 ● Open .env file in backend folder paste your stripe secret
 key in STRIPE_SECRET_KEY variable <br/>
 ● Now Open orderController file located in
 backend/controller folder & add your country currency
 6. To Run Backend use npm run server in Integrated Terminal
 Steps To Run Frontend & Admin Panel Of The Project
 1. Open Project Folder In VS Code
 2. Open Integrated Terminal in project directory
 ○ Right Click on Sidebar > Select “Open In Integrated
 Terminal”
 3. Type “npm install” and press Enter and Wait for
 Installation to be completed (requires Internet)
 4. After Installation You will See ‘node_modules’ Folder in
 the Sidebar
 5. After that type “npm run dev” in terminal
 6. Now Your Project Will Start In Your Default Web Browser.
