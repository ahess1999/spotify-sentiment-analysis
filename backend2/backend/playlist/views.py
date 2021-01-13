from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.contrib.auth.models import User
from .serializers import UserSerializer, UserSerializerWithToken
from rest_framework import generics, permissions, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Playlist, User
from .api.spotify_api import SpotifyAPI

@api_view(['GET'])
def current_user(request):
    serializer = UserSerializer(request.user)
    return Response(serializer.data)

class UserList(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = UserSerializerWithToken(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def create_playlist(request):
    print(request.data['token'])
    a = SpotifyAPI(request.data['token'])
    Playlist.objects.create(
        playlistname= 'test',
        songlist = a.add_to_playlist()
    )
    return Response(status=status.HTTP_201_CREATED)

@api_view(['POST'])
def run_sentiment(request):
    a = SpotifyAPI(request.data['token'])
    print(request.data)
    p = a.get_user_playlists()
    print("hoop n hop")
    print(p)
    return Response( status=status.HTTP_200_OK)

@api_view(['POST'])
def get_playlists(request):
    a = SpotifyAPI(request.data['token'])
    print(request.data)
    p = a.get_user_playlists()
    print("nop pop")
    print(p)
    return Response(p)

@api_view(['POST', 'GET'])
def get_playlist_tracks(request):
    a = SpotifyAPI(request.data['token'])
    print(request.data)
    t = a.get_playlist_tracks(request.data['token'],request.data['playlist_id'])
    print("called get playlist tracks")
    return Response(t)

class TokenGet(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        token = request.data
        return Response(token, status=status.HTTP_200_OK)
