FROM  node AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["ng", "serve"]


# RUN npm run build --configuration=production

# FROM nginx

# COPY --from=build /app/dist/ip-locator/browser /usr/share/nginx/html

# COPY nginx.conf /etc/nginx/nginx.conf

# COPY default.conf /etc/nginx/conf.d/default.conf

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]
