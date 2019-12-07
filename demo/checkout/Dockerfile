FROM node:11

WORKDIR '/app'
COPY ./package.json ./
RUN npm install
COPY . .
# RUN npm install @charge/charge-checkout --registry=http://172.26.0.1:4873
# RUN npm install @chargeio/chargeio-component --registry=http://172.26.0.1:4873
CMD ["npm", "run", "start"]
