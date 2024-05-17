-include .env.local

ifeq ($(shell command -v docker-compose;),)
    DOCKER_COMPOSE := docker compose
else
    DOCKER_COMPOSE := docker-compose
endif

RUN=$(DOCKER_COMPOSE) run --rm app
EXEC?=$(DOCKER_COMPOSE) exec app

.PHONY: up down stop prune ps shell logs

default: up

help:                                        ## Список доступных команд
	@grep -hE '(^[a-zA-Z_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[32m%-40s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'

start: build up perm ## Установка и запуск проекта

restart: down up                             ## Перезапуск контейнера

down:
	$(DOCKER_COMPOSE) --env-file .env.local -p $(CONTAINER_NAME) down

down-volume:
	$(DOCKER_COMPOSE) down -v

stop:                                        ## Остановить
	$(DOCKER_COMPOSE) stop

up:
	$(DOCKER_COMPOSE) --env-file .env.local -f docker-compose.yaml -p $(CONTAINER_NAME) up --remove-orphans

remove:	                                     ## Удалить контейнеры докеров
	$(DOCKER_COMPOSE) kill
	$(DOCKER_COMPOSE) rm -v --force
	rm -rf ./vendor ./var/*

reset: remove start                          ## Сбрость, пересобрать

build:
	$(DOCKER_COMPOSE) pull --ignore-pull-failures
	$(DOCKER_COMPOSE) --env-file .env.local -p $(CONTAINER_NAME) build --force-rm --build-arg APP_ENV=dev --pull

prune:
	@echo "Removing containers for $(PROJECT_NAME)..."
	$(DOCKER_COMPOSE) down -v $(filter-out $@,$(MAKECMDGOALS))

logs:
	$(DOCKER_COMPOSE) logs -f $(filter-out $@,$(MAKECMDGOALS))

app-shell:                                   ## Открыть shell приложения (app)
	docker exec -it pdf-frontend-app bash

perm:
	$(EXEC) chown -R 1000:1000 var