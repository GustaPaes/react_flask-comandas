# React + Vite

# Rodar localmente:

## Passo
utilizar npm run app na pasta raiz

## Para subir no Docker:

## Passo 1
npm run build

## Passo 2
docker build -t comandas-frontend -f DockerFile .

## Passo 3
docker login -u gustapaes

## Passo 4
docker tag comandas-frontend gustapaes/comandas-frontend

## Passo 5
docker push gustapaes/comandas-frontend

## Passo 6
docker compose up -d

## Passo 7
Atualizar o ENV com o IP que está hospedando a outra API FRONTEND_URL e API_URL alterando 127.0.0.1 para o IP publico.

## Para visualização no Docker pode ser utilizado: https://127.0.0.1:4443/docs

OBS: Alguns passos não são necessarios, desta forma estão subindo no docker local manualmente, subindo no hub do docker e também subindo usando o compose, que seria esse ultimo passo, que esta subindo completo inclusive com banco MYSQL.
