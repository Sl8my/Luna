from django.contrib.auth.models import AbstractUser
from django.db import models

from things_i_love.models import ThingsILove


class User(AbstractUser):
    USERNAME_FIELD = 'email'

    REQUIRED_FIELDS = ['username', 'first_name']

    username = models.CharField(max_length=50, null=True, blank=True)
    email = models.EmailField(unique=True)
    location = models.CharField(max_length=100, null=True, blank=True)
    phone = models.IntegerField(null=True, blank=True)
    description = models.CharField(max_length=255)
    date_joined = models.DateTimeField(auto_now=True)
    profile_picture = models.ImageField(upload_to='profile_picture', blank=True, null=True)
    things_i_love = models.ManyToManyField(to=ThingsILove, related_name='things_i_love')

    def __str__(self):
        return f'{self.first_name} {self.last_name} ({self.username})'
