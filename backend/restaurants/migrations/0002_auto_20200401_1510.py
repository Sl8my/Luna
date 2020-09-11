# Generated by Django 3.0.3 on 2020-04-01 15:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurants', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='restaurants',
            name='category',
            field=models.IntegerField(choices=[(1, 'American'), (2, 'Asian'), (3, 'Swiss'), (4, 'Pizza'), (5, 'Mexican'), (6, 'Breakfast & Brunch'), (7, 'Vegetarian'), (8, 'Late Night'), (9, 'Desserts'), (10, 'Juice & Smoothies')], verbose_name='category'),
        ),
    ]