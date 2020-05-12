from rest_framework import serializers

from things_i_love.models import ThingsILove


class ThingsILoveSerializer(serializers.ModelSerializer):
    class Meta:
        model = ThingsILove
        fields = ['name']
