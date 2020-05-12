from rest_framework.generics import ListAPIView

from categories.models import Category
from categories.serializers import CategorySerializer


class GetCategories(ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
