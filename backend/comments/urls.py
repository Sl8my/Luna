from django.urls import path
from comments.views import CreateComment, GetDeleteComments

urlpatterns = [
    path('<int:pk>/', GetDeleteComments.as_view()),
    path('new/<int:pk>/', CreateComment.as_view())

]