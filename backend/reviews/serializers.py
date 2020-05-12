from rest_framework import serializers
from reviews.models import Reviews
from users.serializers import UserPublicSerializer

from comments.serializers import CommentSerializer


class ReviewSerializer(serializers.ModelSerializer):
    user = UserPublicSerializer(read_only=True)
    comments = CommentSerializer(read_only=True, many=True)

    liked_count = serializers.SerializerMethodField()
    logged_in_user_likes = serializers.SerializerMethodField()

    class Meta:
        model = Reviews
        fields = ['id', 'text_content', 'rating', 'date_created', 'date_modified', 'user', 'likes', 'logged_in_user_likes', 'liked_count', 'comments', 'restaurant']

    def get_liked_count(self, obj):
        return obj.likes.count()

    def get_logged_in_user_likes(self,obj):
        if obj.user.id in obj.likes.related_val:
            return True
        else:
            return False