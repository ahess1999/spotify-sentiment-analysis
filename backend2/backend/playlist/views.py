from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.contrib.auth.models import User
from .serializers import PlaylistSerializer, UserSerializer, UserSerializerWithToken
from rest_framework import generics, permissions, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Playlist, User
from .api.spotify_api import SpotifyAPI

token = ""
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

class PlaylistCreate(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        return Response(token)

    def post(self, request, format=None):
        serializer = PlaylistSerializer(data=token)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class TokenGet(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        token = request.data
        test1 = SpotifyAPI()
        return Response(test1.test(), status=status.HTTP_200_OK)
