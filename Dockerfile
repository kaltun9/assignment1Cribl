#this entire file tells us how to build the image


#this is where we will get base image, 
#tells docker to look inside docker public registry 
#and find container that hs the name and tag node 16.17

FROM node:16.17


#Setting working directory so any later commands will be executed from here 
WORKDIR /usr/src/app

#copied package json files
#install app dependecies
#base of all node js projects 
COPY package*.json ./
#opens terminal in container and exceuted whatveer command you provide



#copy source files, copies eveyhting inside folder where dokcer files excits inside work directory
COPY . .
#running application
CMD ["node","app.js"]



#since I have to download and start on all  of the hosts 
#Agent, Splitter, Target 1, Target 2 would i make a file like this for each folder
#since the ports are 9997 would i docker run -p 9997:9997? (forwarding from docker to host/os)

#expose port 9997
EXPOSE 9997  

CMD ["node", "build/server.js"]