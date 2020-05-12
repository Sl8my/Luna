from requests import Response
from django.db.models import Q
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveAPIView, RetrieveUpdateDestroyAPIView, GenericAPIView, ListCreateAPIView

from restaurants.models import Restaurants
from restaurants.serializers import RestaurantSerializer
from restaurants.permissions import IsOwnerOrReadOnly

from categories.serializers import CategorySerializer
from restaurants.serializers import RestaurantProfileSerializer


class GetRestaurants(ListAPIView):
    serializer_class = RestaurantSerializer
    queryset = Restaurants.objects.all()
    permission_classes = [IsOwnerOrReadOnly]


class GetUpdateDeleteRestaurant(RetrieveUpdateDestroyAPIView):
    serializer_class = RestaurantProfileSerializer
    queryset = Restaurants.objects.all()
    permission_classes = [IsOwnerOrReadOnly]


class CreateRestaurant(CreateAPIView):
    serializer_class = RestaurantSerializer
    queryset = Restaurants.objects.all()

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class GetTopRestaurants(ListAPIView):
    serializer_class = RestaurantSerializer
    queryset = Restaurants.objects.all()
    permission_classes = [IsOwnerOrReadOnly]

    def get_queryset(self):
        return Restaurants.objects.all().exclude(reviews__rating__isnull=True).order_by('-reviews__rating')[:4]



#get restaurants by category
class GetRestaurantCategories(ListAPIView):
    serializer_class = CategorySerializer

    def get_queryset(self):
        return Restaurants.objects.filter(category_id=self.request.query_params.get('pk'))


#Get all restaurants created by user
class GetRestaurantUser(ListAPIView):
    queryset = Restaurants.objects.all()
    serializer_class = RestaurantSerializer
    permission_classes = [IsOwnerOrReadOnly]

    def get_queryset(self):
        return Restaurants.objects.filter(user_id=self.request.query_params.get('pk'))


#search reviews, restaurants and users
class SearchEverything(ListAPIView):
    serializer_class = RestaurantSerializer
    queryset = Restaurants.objects.all()
    permission_classes = [IsOwnerOrReadOnly]

    def get(self, pk):
        restaurants = self.queryset.filter(Q(name__contains=pk) | Q(location__contains=pk))
        serializer = self.get_serializer(restaurants, many=True)
        return Response(serializer.data)