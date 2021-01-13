from django.urls import path
from .views import current_user, UserList, create_playlist, TokenGet, run_sentiment, get_playlists, get_playlist_tracks

urlpatterns = [
    path('current-user/', current_user),
    path('users/', UserList.as_view()),
    path('api/token/', TokenGet.as_view()),
    path('api/playlist/create/', create_playlist),
    path('api/playlist/create/sentiment', run_sentiment),
    path('api/playlist/get/playlists', get_playlists),
    path('api/playlist/get/tracks', get_playlist_tracks),
]
