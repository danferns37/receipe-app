# Recipe Book Tests

```
## Running UI automation tests
Do the below steps
1) First clone the below repository
git clone https://github.com/danferns37/receipe-app.git
2) Then open a  node js command prompt and change directory to the folder you cloned the repository  and then type the below commands in sequence
cd receipe-app
npm install
npm install -g protractor
webdriver-manager update
webdriver-manager start
and keep this window open.

3) Then open another node js command prompt window  and change directory to the folder you cloned the repository  and then type
cd receipe-app
and  then type the  below command to execute the UI automation test with protractor

protractor protractor.conf.js

```
This will start the UI automation test which will run the 3 specs in the test.





