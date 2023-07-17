#!/bin/bash -x

service nginx start

if [ "$NODE_ENV" = "development" ] ; then npm run dev; else npm run start; fi
