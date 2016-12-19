# pt3django
A django boilerplate especially for pt3react frontend project.

Including package.json and dev and prod webpack.config.js (in config_client folder)  
for integrated development and building production code.  
Expect to clone pt3react with naming client.


## features
- Django and drf (Django rest framework)
- honcho for django & webpack-dev-server parallel run 
- TokenAuthentication setting
- django-webpack-loader for distribution
- (* vscode can handle debugging django. see drf_react/settings.py comment)


## Setup
### install
`npm install`
`pip install -r requirements.txt`
`export DJANGO_SECRET_KEY='your-secret-key'`

### launch in dev mode
`honcho start`
- open localhost:8000

### launch in production mode ( with django-webpack-loader )
`npm run build`
`python manage.py runserver`
- see drf_react/settings.py comment
- open localhost:8000

### createsuperuser example
`python manage.py createsuperuser`  
Username (leave blank to use 'hoge'): admin  
Email address: admin@example.com  
Password: hogefuga  
Password (again): hogefuga  

### load test data to db  
use admin console (/admin) or coding

### authToken setting (Finished)
- add 'rest_framework.authtoken'to settings.py INSTALLED_APPS

### authToken test ( this needs to register User for test username/password (/admin or sth))
`curl -v -H "Accept: application/json" -H "Content-type: application/json" -X POST -d '{"username":"test","password":"test"}' https://127.0.0.1:8000/api/obtain-auth-token/`

### model migration
`python manage.py createsuperuser`
- add mode definition to models.py  
`python manage.py makemigrations api`
`python manage.py sqlmigrate api NNNN`
`python manage.py migrate`
- open localhost:8000/admin


## TODO
- handle assets properly
- check drf serializer / view to make json format more freely
- confirm that auth response is proper


## Misc
- Book / BookList model is just dummy. delete those.


- Django production mode(settings.py DEBUG=False) doesn't handle static files.  
  You needs web-server to handle them.  
  ttp://stackoverflow.com/questions/5836674/why-does-debug-false-setting-make-my-django-static-files-access-fail


## License
MIT © [greenishsea]