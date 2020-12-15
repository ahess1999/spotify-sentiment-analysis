from django.urls import path
from . import views

urlpatterns = [
    path('api/playlist/',views.PlaylistCreate.as_view())
]
