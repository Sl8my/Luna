from django.urls import path, include
from categories.views import GetCategories

urlpatterns = [
    path('list/', GetCategories.as_view()),
]

