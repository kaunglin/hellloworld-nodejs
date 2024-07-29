FROM public.ecr.aws/docker/library/node:12.22.12
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --production
RUN npm install prisma@2.22.0 --save-dev
COPY . .
EXPOSE 80
CMD ["npm", "start"]