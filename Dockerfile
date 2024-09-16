FROM node:22-alpine

WORKDIR /pokedex-pokeapi

EXPOSE 3000

CMD ["tail", "-f", "/dev/null"]