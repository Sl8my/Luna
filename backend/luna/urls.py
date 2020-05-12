from django.contrib import admin
from django.urls import path, include
from rest_framework.documentation import include_docs_urls

from users.views import GetUpdateProfile
from restaurants.views import SearchEverything, GetTopRestaurants

api_patterns = [
    path('admin/', admin.site.urls),
    path('users/', include('users.urls')),
    path('docs/', include_docs_urls(title='Django app', public=False, permission_classes=[])),
    path('auth/', include('user_auth.urls')),
    path('me/', GetUpdateProfile.as_view()),
    path('reviews/', include('reviews.urls')),
    path('restaurants/', include('restaurants.urls')),
    path('categories/', include('categories.urls')),
    path('search/<str:pkr>/', SearchEverything.as_view()),
    path('home/', GetTopRestaurants.as_view())
]

urlpatterns = [
    path('backend/api/', include(api_patterns)),
]