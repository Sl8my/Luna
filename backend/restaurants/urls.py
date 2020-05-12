from django.urls import path, include
from restaurants.views import GetRestaurants, GetUpdateDeleteRestaurant, CreateRestaurant, GetRestaurantCategories, GetRestaurantUser

urlpatterns = [
    path('', GetRestaurants.as_view()),
    path('<int:pk>/', GetUpdateDeleteRestaurant.as_view()),
    path('new/', CreateRestaurant.as_view()),
    path('category/<int:pk>/', GetRestaurantCategories.as_view()),
    path('user/<int:pk>/', GetRestaurantUser.as_view()),
]


