FROM node:16
WORKDIR /app
COPY ./package.json ./package.json
COPY ./index.js ./index.js
COPY ./models ./models
COPY ./routes ./routes
RUN npm install
EXPOSE 5000
CMD ["node", "index.js"]