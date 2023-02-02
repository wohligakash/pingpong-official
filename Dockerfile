FROM node
WORKDIR /
COPY package.json /
COPY package-lock.json /
RUN npm install
COPY . .
EXPOSE 8070
CMD ["node","index.js"]
