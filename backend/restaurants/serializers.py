from rest_framework import serializers

from restaurants.models import Restaurants
from users.serializers import UserPublicSerializer
from categories.serializers import CategoryProfileSerializer


class RestaurantSerializer(serializers.ModelSerializer):

    class Meta:
        model = Restaurants
        fields = '__all__'


class RestaurantProfileSerializer(serializers.ModelSerializer):
    user = UserPublicSerializer(read_only=True)
    category = CategoryProfileSerializer(read_only=True)

    class Meta:
        model = Restaurants
        fields = '__all__'


