# assignment1Cribl


Node.js app
Running Locally
Make sure you have Node.js and git installed

git clone 
HTTPS: https://github.com/kaltun9/assignment1Cribl.git
SSH: git@github.com:kaltun9/assignment1Cribl.git
cd assignment1cribl
npm install
npm start

Running in terminal: 
node app.js        

Running agent,splitter,target:
node app.js <config_dir>



Testing: JEST UNIT TESTING in file (test-app.js)
I tested the functions in app.js in isolation is my app-test.js file. (The tests are not running with the applciation, However I documented my test cases to show my logic if I could get them to run)

Installing JEST to run tests for app.js
npm i jest



Using Docker Compose with NodeJs
"Assignment offers docker container monitoring, either by running the Agent on the host or running in a container. 

Dockerfile contents: 

FROM node:16.17
#Setting working directory so any later commands will be executed from here
WORKDIR /Onedrive/Documents/github/assignment1cribl
#Copy any files from root directory
COPY . .
 
RUN npm install
#CMD ["node", "build/app.js"]
 
#copy source files, copies eveyhting inside folder where dokcer files excits inside work directory
 
#running application
 
 
CMD ["node", "/Onedrive/Documents/github/assignment1cribl/app.js"]



Docker-compose contents:
#version of docker compose
version: "3"
 
services:
  assignment:
      image: purpleimage:latest
      container_name: assignmentcontainer
      hostname: localhost
      init: true
      #path to docker file and it will build
      #build: .
      # dockerfile: Dockerfile
      ports:
      - "9997:9997"
      volumes:
      - .\Users\kaltu\OneDrive\Documents\github\assignment1Cribl
      expose:
      - "9997"
     #- type:bind
     # - target:

     #- read_only:false


