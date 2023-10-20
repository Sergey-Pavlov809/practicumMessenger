# Messenger

Простой мессенджер, написаный на классовых комапонентов.
Каждый класс наследуется от класса Block который реальзует методы жизненного цикла:

1.  INIT
2.  FLOW_CDM
3.  FLOW_CDU
4.  FLOW_RENDER

Так же класс service реализует работу с серверной частью приложения.
Взаиможействие реализуется при помощи XMLHttpRequest и методов GET POST PUT UPDATE

Так же добавленна воможность работы с .ts файлами, prettier, eslint

Добавленна валидация на инпуты

## Странцы

1. Авторизация: https://deploy-preview-2--resplendent-chaja-1874eb.netlify.app/
2. Регистрация: https://deploy-preview-2--resplendent-chaja-1874eb.netlify.app/registration
3. Диалоги: https://deploy-preview-2--resplendent-chaja-1874eb.netlify.app/dialogs
4. Профиль: https://deploy-preview-2--resplendent-chaja-1874eb.netlify.app/profile
5. 4\*\* Ошибка: https://deploy-preview-2--resplendent-chaja-1874eb.netlify.app/asd
6. 5\*\* Ошибка:https://deploy-preview-2--resplendent-chaja-1874eb.netlify.app/server-error

## Установка

1. Склонируйте репозиторий:
   git clone https://github.com/Sergey-Pavlov809/practicumMessenger.git

2. Перейдите в директорию проекта:
   cd messenger

3. Установите зависимости:
   npm install

## Запуск

Для запуска приложения в режиме разработки, выполните команду:
npm run start

Приложение будет доступно по адресу [http://localhost:3000](http://localhost:3000).

Для сборки приложения в production-режиме, выполните команду:
npm run build

Собранное приложение будет находиться в директории `dist`.

Ссылка на проект: https://deploy-preview-2--resplendent-chaja-1874eb.netlify.app/
