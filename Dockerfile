FROM node:14-buster-slim

ARG DOCKER_ARG0=development
ARG DOCKER_APP_PATH=/app

WORKDIR $DOCKER_APP_PATH

RUN apt-get update && apt-get install nano vim telnet build-essential nginx -y

COPY ./docker-nginx.conf /etc/nginx/sites-enabled/default
COPY ./docker-cmd.sh .

RUN chmod 755 ./docker-cmd.sh && chmod +x ./docker-cmd.sh

COPY . .
RUN npm install

ENV NODE_ENV=$DOCKER_ARG0
ENV NEXT_PORT=3000

RUN if [ "$NODE_ENV" = "production" ] ; then npm run build; else echo 'Build skipped..'; fi

CMD /app/docker-cmd.sh

