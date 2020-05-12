from django.urls import path

from reviews.views import CreateReview, GetRestaurantReviews, GetAllUserReviews, GetUpdateDeleteReview, \
    ToggleReviewLike, GetAllLikedReviews, GetALlCommentedReviews

urlpatterns = [
    path('new/<int:pk>/', CreateReview.as_view()),
    path('restaurant/<int:pk>/', GetRestaurantReviews.as_view()),
    path('user/<int:pk>/', GetAllUserReviews.as_view()),
    path('<int:pk>/', GetUpdateDeleteReview.as_view()),
    path('like/<int:pk>/', ToggleReviewLike.as_view()),
    path('likes/', GetAllLikedReviews.as_view()),
    path('comments/', GetALlCommentedReviews.as_view()),
]