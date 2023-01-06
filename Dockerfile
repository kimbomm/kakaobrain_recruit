FROM node:14

WORKDIR /app

COPY . /app
RUN npm install

EXPOSE 8087

ENV HOST=0.0.0.0
ENV PORT=8087

RUN npm run build:stg

CMD [ "npm", "run", "start:stg" ]
