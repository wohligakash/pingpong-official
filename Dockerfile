FROM node
WORKDIR /
COPY package.json /
COPY package-lock.json /
RUN npm install
COPY . .
EXPOSE 7654
CMD ["node","index.js"]
