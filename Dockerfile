FROM alexsuch/angular-cli as client-app
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN ng serve
