from django.conf.urls import url
from django.views.decorators.csrf import csrf_exempt

from rest_framework.routers import DefaultRouter
from rest_framework.authtoken.views import obtain_auth_token

# from .views import UserViewSet
from . import views

# router = DefaultRouter()
# router.register(r'users', views.UserViewSet)

# urlpatterns = router.urls

# urlpatterns += [
#     url(r'^obtain-auth-token/$', csrf_exempt(obtain_auth_token)),
#     url(r'^locations/$', views.LocationList.as_view(), name='location-list'),
# ]

urlpatterns = [
    url(r'^obtain-auth-token/$', csrf_exempt(obtain_auth_token)),
    url(r'^locations/$', views.LocationList.as_view(), name='location-list'),
]