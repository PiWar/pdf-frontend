# Запуск проекта на Symfony

<p>
1) Переходим в папку docker и следуем дальше:
</p>

<p>
2) Конфигурация .env.local в докер контейнере. Необходимо скопировать .env в .env.local и изменить следующие
параметра:
 PHP_VERSION=php:8.1-fpm-alpine
 DOMAIN=hotel.local -> локальный домен (отредактировать hosts)
 CONTAINER_NAME=some-name -> имя контейнера
 PS1='\[\033[1;36m\]unnamed@docker-local🐋\[\033[0;35m\]\[\033[01;37m\]:\w\$ \[\033[00m\]' -> unnamed => some-name
</p>

<p>
3) Запуск докер контейнера. ./dev.sh
</p>

<p>
3) Устновка node-modules, composer и тд. ./deploy.sh
</p>

<p>
3) Переходим в корневую папку.
</p>

<p>
4) Подготовка .env файла - скопировать .env и вставить как .env.local.
Добавить или изменить строку:
<br> APP_ENV=dev <br>
<br>DATABASE_URL="mysql://root:password@localhost:3306/db_name?serverVersion=8",<br>
где root - логин от mysql, password - пароль от mysql, db_name - название базы данных
</p>

<p>
3) Зайти в докер контейнер и выполнить команды. Чтобы зайти в контейнер - docker exec -it some-name-php /bin/bash 
</p>

<p>
5) Создать базу данных - php bin/console d:d:c 
</p>

<p>
5) Загрузить миграции и выполнить запуск фикстур - php bin/console doctrine:schema:drop --full-database --force; php bin/console doctrine:schema:update --force; php bin/console doctrine:fixtures:load -q 
</p>