# Users Authentication API

    This project contains the user authentication api and authorization api build by using NestJs, Typeorm and MongoDB.

    For the authentication and authorization JWT package was used to generate the token and for checking the data.

    Supports docker installation for the mongo db.

    Password hashing is done by using bcrypt and it is maintained securely and safely.

# Setup for the project

  -  As the project database uses docker please install [Docker-Desktop](https://www.docker.com/products/docker-desktop/) from the secure site

  - Once on successful installation

      To up the docker instance

          docker-compose -f ./local/docker-compose.yml up

      To terminate or close the docker instance

          docker-compose -f ./local/docker-compose.yml down

# To start the API

    For development without watching for changes

     npm run start

    For development with watching for changes

      npm run start:dev

# Tech Stacks Used

- [NestJs](https://nestjs.com/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [MongoDb](https://www.npmjs.com/package/mongodb)
- [Typeorm](https://www.npmjs.com/package/typeorm)
- [JWT](https://www.npmjs.com/package/jsonwebtoken)
- [Passport](https://www.npmjs.com/package/passport)
- [Eslint](https://www.npmjs.com/package/eslint)
- [Prettier](https://www.npmjs.com/package/prettier)
- [Docker](https://www.docker.com/)