from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

token_choices = [
    ("PASSWORD", "PASSWORD"),
    ("SIGNUP", "SIGNUP")
]


class UserAuth(models.Model):
    token = models.CharField(max_length=6, null=True, blank=True, help_text=("6 digit string token"))
    token_type = models.CharField(max_length=20, blank=True, null=True, choices=token_choices, help_text=('"SIGNUP" for new users / "PASSWORD" for password resets'))
    user = models.ForeignKey(to=User, blank=True, related_name="usertoken", on_delete=models.CASCADE, help_text=("User's email address"))

