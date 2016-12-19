from rest_framework import generics
  
from .models import Book, Location
from .serializers import BookSerializer, LocationSerializer
  
class BookList(generics.ListCreateAPIView):
	"""
	API endpoint for listing and creating Book objects
	"""
	queryset = Book.objects.all()
	serializer_class = BookSerializer


class LocationList(generics.ListCreateAPIView):
	"""
	API endpoint for listing and creating Location objects
	"""
	queryset = Location.objects.all()
	serializer_class = LocationSerializer
	# TODO unsolved: Wrap response data like {'locations': <data>} .
	#                Need to check drf serializer generics View's usage



# from django.contrib.auth.models import User

# from rest_framework import viewsets, response, permissions

# from .serializers import UserSerializer

# class UserViewSet(viewsets.ModelViewSet):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer
#     permission_classes = (permissions.IsAuthenticated,)

#     def retrieve(self, request, pk=None):
#         if pk == 'i':
#             return response.Response(UserSerializer(request.user,
#                 context={'request':request}).data)
#         return super(UserViewSet, self).retrieve(request, pk)