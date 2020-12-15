from django.shortcuts import render
from .serializers import PlaylistSerializer
from rest_framework import generics
from .models import Playlist

class PlaylistCreate(generics.ListCreateAPIView):
    queryset = Playlist.objects.all()
    serializer_class = PlaylistSerializer
