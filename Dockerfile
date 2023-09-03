FROM node:18
WORKDIR /server
COPY package.json .
ARG SERVER
RUN if [$"SERVER" == "development"];\
    then npm install;\
    else npm install --only=production; \
    fi
COPY . .

ENV PORT 3000
RUN npm run build

EXPOSE ${PORT}

CMD ["npm" , "start"]