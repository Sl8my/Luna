# Create your views here.
from rest_framework import status
from rest_framework.generics import RetrieveDestroyAPIView, GenericAPIView
from rest_framework.response import Response

from comments.models import Comments
from comments.serializers import CommentSerializer
from comments.permissions import IsOwnerOrReadOnly


class CreateComment(GenericAPIView):
    serializer_class = CommentSerializer
    queryset = Comments.objects.all()

    def post(self, request, pk):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(author=self.request.user, reviews_id=pk)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class GetDeleteComments(RetrieveDestroyAPIView):
    serializer_class = CommentSerializer
    queryset = Comments.objects.all()
    permission_classes = [IsOwnerOrReadOnly]

    def get(self, request, pk):
        review_comments = self.queryset.filter(reviews_id=pk)
        serializer = self.get_serializer(review_comments, many=True)
        return Response(serializer.data)
