from django.db import models

class Book(models.Model):
	title = models.CharField(max_length=200, unique=True)
	author = models.CharField(max_length=100)


class Location(models.Model):
    dataset_id = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=300)
    geo_long = models.CharField(max_length=100)
    geo_lat = models.CharField(max_length=100)
    image = models.CharField(max_length=100)
    registered_date = models.CharField(max_length=100)
    subject = models.CharField(max_length=100)
    source = models.CharField(max_length=100)
    address = models.CharField(max_length=300)
    tel = models.CharField(max_length=100)
    url = models.CharField(max_length=300)

    def __str__(self):
        return self.title
