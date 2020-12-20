from django.urls import path
from .views import current_user, UserList, PlaylistCreate, TokenGet

urlpatterns = [
    path('current-user/', current_user),
    path('users/', UserList.as_view()),
    path('api/token/', TokenGet.as_view()),
    path('api/playlist/create/', PlaylistCreate.as_view())
]
