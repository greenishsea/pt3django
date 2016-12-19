# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Location',
            fields=[
                ('id', models.AutoField(serialize=False, verbose_name='ID', auto_created=True, primary_key=True)),
                ('dataset_id', models.CharField(max_length=100)),
                ('title', models.CharField(max_length=100)),
                ('description', models.CharField(max_length=300)),
                ('geo_long', models.CharField(max_length=100)),
                ('geo_lat', models.CharField(max_length=100)),
                ('image', models.CharField(max_length=100)),
                ('registered_date', models.CharField(max_length=100)),
                ('subject', models.CharField(max_length=100)),
                ('source', models.CharField(max_length=100)),
                ('address', models.CharField(max_length=300)),
                ('tel', models.CharField(max_length=100)),
                ('url', models.CharField(max_length=300)),
            ],
        ),
    ]
