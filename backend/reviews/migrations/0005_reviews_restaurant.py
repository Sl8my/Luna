# Generated by Django 3.0.3 on 2020-04-02 05:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('restaurants', '0003_remove_restaurants_reviews'),
        ('reviews', '0004_auto_20200401_0921'),
    ]

    operations = [
        migrations.AddField(
            model_name='reviews',
            name='restaurant',
            field=models.ForeignKey(default=3, on_delete=django.db.models.deletion.CASCADE, to='restaurants.Restaurants'),
            preserve_default=False,
        ),
    ]
