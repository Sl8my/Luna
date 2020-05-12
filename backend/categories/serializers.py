from rest_framework import serializers

from categories.models import Category


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class CategoryProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['name']
