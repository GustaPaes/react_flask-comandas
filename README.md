# API Proxy/BFF Python com Flask, Hypercorn e QUIC

# Rodar localmente:

## Passo
utilizar "python .\src\app.py" na pasta raiz do projeto

## Para subir no Docker:

## Passo 1
docker build -t comandas-proxy-bff -f Dockerfile .

## Passo 2
docker login -u gustapaes

## Passo 3
docker tag comandas-proxy-bff gustapaes/comandas-proxy-bff

## Passo 4
docker push gustapaes/comandas-proxy-bff

## Passo 5
docker compose up -d

## Para visualização no Docker pode ser utilizado: https://127.0.0.1:4443/docs

OBS: Alguns passos não são necessarios, desta forma estão subindo no docker local manualmente, subindo no hub do docker e também subindo usando o compose, que seria esse ultimo passo, que esta subindo completo inclusive com banco MYSQL.
