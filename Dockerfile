#this entire file tells us how to build the image


#this is where we will get base image, 
#tells docker to look inside docker public registry 
#and find container that hs the name and tag node 16.17

#image name and tag
FROM node:16.17


#Setting working directory so any later commands will be executed from here 
WORKDIR /Onedrive/Documents/github/assignment1cribl
#Copy any files from root directory
COPY . .

#RUN npm install
#CMD ["node", "build/app.js"]

#copy source files, copies eveyhting inside folder where dokcer files excits inside work directory

#running application
CMD ["node","app.js"]


CMD ["node", "/Onedrive/Documents/github/assignment1cribl/app.js"]