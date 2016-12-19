from rest_framework import serializers

from .models import Book, Location

class BookSerializer(serializers.ModelSerializer):
	
	class Meta:
		model = Book
		fields = ('title', 'author')


class LocationSerializer(serializers.ModelSerializer):
	
	class Meta:
		model = Location
		fields = ('id', 'title', 'description', 'image')





# from rest_framework import serializers

# from django.contrib.auth.models import User

# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ('username',)
