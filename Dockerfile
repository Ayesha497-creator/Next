FROM node:18-alpine
WORKDIR /var/www/html
COPY . .
RUN npm install && npm run build
EXPOSE 3000
CMD ["npm", "start"]
