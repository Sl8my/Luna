from django.db import models
from django.contrib.auth import get_user_model

from restaurants.models import Restaurants

User = get_user_model()


class Reviews(models.Model):
    text_content = models.CharField(
        verbose_name="text_content",
        max_length=500,
    )

    rating = models.IntegerField(
        verbose_name="review_rating",
    )
    date_created = models.DateTimeField(
        auto_now_add=True,
    )

    date_modified = models.DateTimeField(
        auto_now=True,
    )

    user = models.ForeignKey(to=User, related_name='user', on_delete=models.CASCADE)
    likes = models.ManyToManyField(to=User, related_name="review_likes", blank=True)
    restaurant = models.ForeignKey(to=Restaurants, name="restaurant", on_delete=models.CASCADE)

    def __str__(self):
        return self.text_content