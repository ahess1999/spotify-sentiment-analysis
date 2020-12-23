from django.urls import path
from .views import current_user, UserList, create_playlist, TokenGet

urlpatterns = [
    path('current-user/', current_user),
    path('users/', UserList.as_view()),
    path('api/token/', TokenGet.as_view()),
    path('api/playlist/create/', create_playlist)
]
