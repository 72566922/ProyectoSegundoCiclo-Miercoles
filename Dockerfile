FROM node:16-bullseye

WORKDIR /miercoles

COPY . .

RUN npm install

EXPOSE 8000

CMD ["npm","start"]