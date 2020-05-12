# Create your views here.
from django.contrib.auth import get_user_model
from django.core.mail import send_mail
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView, GenericAPIView, CreateAPIView, RetrieveAPIView, ListAPIView
from rest_framework.response import Response

from reviews.models import Reviews
from reviews.serializers import ReviewSerializer

from reviews.permissions import IsOwnerOrReadOnly

User = get_user_model()

send_mail(
    'Subject here',
    'Here is the message.',
    'from@example.com',
    ['to@example.com'],
    fail_silently=False,
    )


class CreateReview(CreateAPIView):
    serializer_class = ReviewSerializer
    queryset = Reviews.objects.all()


class GetRestaurantReviews(RetrieveAPIView):
    serializer_class = ReviewSerializer
    queryset = Reviews.objects.all()


class GetUpdateDeleteReview(RetrieveUpdateDestroyAPIView):
    queryset = Reviews.objects.all()
    serializer_class = ReviewSerializer
    permission_classes = [IsOwnerOrReadOnly]


class ToggleReviewLike(GenericAPIView):
    queryset = Reviews.objects.all()
    serializer_class = ReviewSerializer
    permission_classes = [IsOwnerOrReadOnly]

    def post(self, request, *args, **kwargs):
        review = self.get_object()
        user = self.request.user
        user_likes_review = user in review.likes.all()
        if user_likes_review:
            review.likes.remove(user)
        else:
            review.likes.add(user)
        return Response(self.get_serializer(review).data)


class GetAllLikedReviews(ListAPIView):
    serializer_class = ReviewSerializer
    queryset = Reviews.objects.all()
    permission_classes = [IsOwnerOrReadOnly]

    def list(self, request, *args, **kwargs):
        user = self.request.user
        user_id = user.id
        reviews = self.queryset.filter(likes=user_id)
        serializer = self.get_serializer(reviews, many=True)
        return Response(serializer.data)


class GetAllUserReviews(RetrieveAPIView):
    serializer_class = ReviewSerializer
    queryset = Reviews.objects.all()
    permission_classes = [IsOwnerOrReadOnly]

    def get(self, request, pk):
        queryset = self.filter_queryset(self.get_queryset())
        new_queryset = queryset.filter(user_id=pk).order_by('date_created')
        serializer = self.get_serializer(new_queryset, many=True)
        return Response(serializer.data)


class GetALlCommentedReviews(ListAPIView):
    serializer_class = ReviewSerializer
    queryset = Reviews.objects.all()
    permission_classes = [IsOwnerOrReadOnly]

    def list(self, request, *args, **kwargs):
        current_user = self.request.user
        posts = self.queryset.filter(user__in=current_user.comments.all()).order_by('date_created')
        serializer = self.get_serializer(posts, many=True)
        return Response(serializer.data)
