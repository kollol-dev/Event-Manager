#!/bin/bash

echo "Running migraitons & seeders ..."
npm sequelize-cli db:migrate 
npx sequelize-cli db:seed:all
echo "Migration & Seeding is complete ..."
