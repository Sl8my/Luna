# Generated by Django 3.0.3 on 2020-03-30 15:33

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='UserAuth',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('token', models.CharField(blank=True, max_length=6, null=True)),
                ('token_type', models.CharField(blank=True, choices=[('PASSWORD', 'PASSWORD'), ('SIGNUP', 'SIGNUP')], max_length=20, null=True)),
                ('user', models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, related_name='usertoken', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
