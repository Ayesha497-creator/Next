FROM node:18-alpine
WORKDIR /var/www/html
COPY . .
RUN npm install && npm run build
EXPOSE 80
CMD ["npm", "start", "--", "-p", "80"]
