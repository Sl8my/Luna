from django.db import models

from django.contrib.auth import get_user_model

from categories.models import Category

User = get_user_model()

PRICE_CHOICES = [
    ('LOW', '$'),
    ('MEDIUM', '$$'),
    ('HIGH', '$$$')
]


class Restaurants(models.Model):
    name = models.CharField(
        verbose_name='name',
        max_length=100,
    )

    country = models.CharField(
        verbose_name='country',
        max_length=100
    )

    street = models.CharField(
        verbose_name='street',
        max_length=100,
    )

    city = models.CharField(
        verbose_name='city',
        max_length=100
    )

    zip_code = models.IntegerField(
        verbose_name="zip_code",
    )

    website = models.URLField(
        verbose_name='website',
        null=True,
        blank=True,
    )

    phone = models.IntegerField(
        verbose_name='phone',
        null=True,
        blank=True,
    )

    email = models.EmailField(
        verbose_name='email',
    )

    price_level = models.CharField(
        verbose_name='price_level',
        choices=PRICE_CHOICES,
        max_length=50
            )

    category = models.ForeignKey(to=Category, related_name='restaurant', on_delete=models.CASCADE)

    image = models.ImageField(
        upload_to='restaurant_image',
        blank=True,
    )
    opening_hours = models.CharField(
        verbose_name="opening_hours",
        max_length=255,
    )

    user = models.ForeignKey(to=User, related_name='restaurant_user', on_delete=models.CASCADE)

    def __str__(self):
        return self.name
