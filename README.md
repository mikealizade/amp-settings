# Connecting to local db and viewing data
From amp-settings home directory
mongod --dbpath data/
mongo
use ampsettings
db.guitarists.find().pretty()

# Readd testing on codeship
settings > add pipeline > enter npm test