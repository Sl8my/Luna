# Generated by Django 3.0.3 on 2020-04-01 13:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('categories', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='categories',
            name='category',
        ),
        migrations.AddField(
            model_name='categories',
            name='name',
            field=models.CharField(default='Food', max_length=100, verbose_name='name'),
            preserve_default=False,
        ),
    ]
