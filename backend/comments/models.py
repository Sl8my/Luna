from django.contrib.auth import get_user_model
from django.db import models

from reviews.models import Reviews

User = get_user_model()


class Comments(models.Model):
    text_content = models.CharField(
        verbose_name="comment_text_content",
        max_length=255
    )

    date_created = models.DateTimeField(
        verbose_name="comment_create_date",
        auto_now_add=True
    )

    date_modified = models.DateTimeField(
        verbose_name="comment_modified_date",
        auto_now=True
    )

    user = models.ForeignKey(to=User, related_name='comment_user', on_delete=models.CASCADE)
    likes = models.ManyToManyField(to=User, related_name="comment_likes", blank=True)
    review = models.ForeignKey(to=Reviews, related_name="review", on_delete=models.CASCADE)