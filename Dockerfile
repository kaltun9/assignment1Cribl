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