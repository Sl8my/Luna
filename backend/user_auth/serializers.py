from rest_framework import serializers
from user_auth.models import UserAuth


class UserAuthSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserAuth
        fields = ['token', 'token_type', 'user']


class UserRegisterSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserAuth
        fields = ['user']