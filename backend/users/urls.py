from django.urls import path

from users.views import GetAllUsers, GetSingleUser, SearchAllUsers

urlpatterns = [
    path('list/', GetAllUsers.as_view()),
    path('<int:pk>/', GetSingleUser.as_view()),
    path('search=<str:pk>/', SearchAllUsers.as_view())

]