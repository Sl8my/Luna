# Generated by Django 3.0.3 on 2020-03-31 07:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_auth', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userauth',
            name='token_type',
            field=models.CharField(blank=True, choices=[('PASSWORD', 'PASSWORD'), ('SIGNUP', 'SIGNUP')], help_text='"SIGNUP" / "PASSWORD"', max_length=20, null=True),
        ),
    ]
