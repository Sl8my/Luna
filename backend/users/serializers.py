from django.contrib.auth import get_user_model
from rest_framework import serializers

from things_i_love.serializers import ThingsILoveSerializer

User = get_user_model()


class UserPrivateSerializer(serializers.ModelSerializer):
    things_i_love = ThingsILoveSerializer(many=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'profile_picture', 'location', 'phone', 'description', 'things_i_love']


class UserPublicSerializer(serializers.ModelSerializer):
    things_i_love = ThingsILoveSerializer(many=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'first_name', 'last_name', 'profile_picture', 'location', 'description', 'things_i_love']