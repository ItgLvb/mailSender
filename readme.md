mailSender

Приложение для отправки почты с Формы обратной связи.
Запускает веб-сервер на порту 8888.

Принимает GET-запросы вида
sendMail?firstName=${firstName}&eMail=${eMail}&tel=${tel}&company=${company}

Для настройки отправки используются следующие переменные:

  SMTPUSER - пользователь для отправки почты
  
  SMTPFROM - от чьего имени отправляется почта(по умолчанию SMTPUSER)
  
  SMTPHOST - почтовый сервер
  
  SMTPPASS - пароль пользователя для отправки почты
  
  WATCHERS - кому отправлять уведомления (по умолчанию SMTPUSER)
