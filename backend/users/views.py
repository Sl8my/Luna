# Create your views here.
from django.contrib.auth import get_user_model
from django.db.models import Q
from rest_framework.generics import ListAPIView, RetrieveAPIView, GenericAPIView
from rest_framework.response import Response

from users.permissions import IsOwnerOrReadOnly
from users.serializers import UserPrivateSerializer, UserPublicSerializer

User = get_user_model()


class GetAllUsers(ListAPIView):
    serializer_class = UserPublicSerializer
    queryset = User.objects.all()


class GetUpdateProfile(GenericAPIView):
    serializer_class = UserPrivateSerializer
    queryset = User.objects.all()
    permission_classes = [IsOwnerOrReadOnly]

    def get(self, request, *args, **kwargs):
        """
        Returns logged in users profile.
        """
        current_user = self.request.user
        serializer = self.get_serializer(current_user, many=False)
        return Response(serializer.data)

    def patch(self, request, *args, **kwargs):
        """
        Partial or full update to profile. Do not need to include all fields.
        """
        current_user = self.get_object()
        serializer = self.get_serializer(current_user, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    def get_object(self):
        queryset = self.filter_queryset(self.get_queryset())
        obj = queryset.get(pk=self.request.user.id)
        return obj


class GetSingleUser(RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserPublicSerializer
    permission_classes = [IsOwnerOrReadOnly]


class SearchAllUsers(RetrieveAPIView):
    serializer_class = UserPublicSerializer
    queryset = User.objects.all()
    permission_classes = [IsOwnerOrReadOnly]

    def get(self, request, pk):
        queryset = self.get_queryset()
        users = queryset.filter(Q(first_name__contains=pk) | Q(last_name__contains=pk) | Q(username__contains=pk) | Q(description__contains=pk))
        serializer = self.get_serializer(users, many=True)
        return Response(serializer.data)
