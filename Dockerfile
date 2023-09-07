FROM node:18
WORKDIR /server
COPY package.json .
COPY . .

ENV PORT 3000
RUN npm run build

EXPOSE ${PORT}

CMD ["npm" , "start"]