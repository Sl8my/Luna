from rest_framework import serializers

from comments.models import Comments
from users.serializers import UserPublicSerializer


class CommentSerializer(serializers.ModelSerializer):
    user = UserPublicSerializer(read_only=True)

    class Meta:
        model = Comments
        fields = ['text_content', 'user', 'date_created', 'date_modified', 'likes']
