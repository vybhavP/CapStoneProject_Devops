### You should always specify a full version here to ensure all of your developers ###
### are running the same version of Node ###

### pull node image version-8.11.3 ###
FROM node:8.11.3

### The base node image sets a very verbose log level ###
ENV NPM_CONFIG_LOGLEVEL warn

### setting HTTP & HTTPS proxy ###
RUN npm config set http-proxy http://vy323647:vahbiavP%402@proxy4.wipro.com:8080
RUN npm config set https-proxy http://vy323647:vahbiavP%402@proxy4.wipro.com:8080

### setting HTTP & HTTPS proxy ###
ENV HTTP_PROXY "http://vy323647:vahbiavP%402@proxy4.wipro.com:8080"
ENV HTTPS_PROXY "https://vy323647:vahbiavP%402proxy4.wipro.com:8080"

### clear npm cache ###
#RUN npm cache clean

### copy package.json file ###
COPY package.json package.json

### set registry for npm ###
RUN npm config set registry=http://registry.npmjs.org/


#RUN npm config set strict-ssl false

### Remove node_modules ###
# RUN rm -rf node_modules

### install node_modules ###
# RUN npm install --save

# Install 'serve' to serve the application ###
RUN npm install -g serve

### Copy all local files into the image ###
COPY . .

### Build for production ###
RUN npm run build --production

### Set the command to start the node server ###
CMD serve -s build

### Tell Docker about the port we'll run on ###
EXPOSE 80


### commands for build, push,save and load docker image ###

#########################################################################################
#########################################################################################
#########################################################################################
###                                                                                   ###
###   docker build -t react-docker-app .                                              ###
###   docker container run -it --rm -p 5000:5000 --name react-demo react-docker-app   ###
###   docker login                                                                    ###
###   docker images                                                                   ###
###   docker tag <<image id>> <<dockerhub_username>>/<<repository_name>>:<<tag>>      ###
###   docker push <<dockerhub_username>>/<<repository_name>>                          ###
###   docker save <<repository_name>> > <<repository_name>>.tar                       ###
###   docker load --input <<repository_name>>.tar                                     ###
###                                                                                   ###
#########################################################################################
#########################################################################################
#########################################################################################
# export HTTP_PROXY=http://vy323647:vahbiavP%402@proxy4.wipro.com:8080
# export HTTPS_PROXY=http://vy323647:vahbiavP%402@proxy4.wipro.com:8080