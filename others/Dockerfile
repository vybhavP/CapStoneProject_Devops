# You should always specify a full version here to ensure all of your developers
# are running the same version of Node.
FROM node:7.8.0

# The base node image sets a very verbose log level.
ENV NPM_CONFIG_LOGLEVEL warn
#RUN npm config set proxy http://proxy4.wipor.com:8080
#RUN npm config set https-proxy http://proxy4.wipro.com:8080

#ENV HTTP_PROXY "http://vy323647:vaibhavP%402@proxy2.wipro.com:8080"

#ENV HTTPS_PROXY "https://vy323647:vaibhavP%402proxy2.wipro.com:8080"
RUN npm cache clean
COPY package.json package.json
COPY npm-shrinkwrap.json npm-shrinkwrap.json
RUN npm config set registry=http://registry.npmjs.org/

#RUN npm config set strict-ssl false

RUN rm -rf node_modules
RUN npm install

#RUN npm install -g serve --save

#RUN npm install -g update-check --save
#RUN npm install util.promisify --save

# Copy all local files into the image.

COPY . .

# Build for production.
RUN npm run build --production

# Install `serve` to run the application.
RUN npm install -g serve

# Set the command to start the node server.
CMD serve -s build

# Tell Docker about the port we'll run on.
EXPOSE 80
