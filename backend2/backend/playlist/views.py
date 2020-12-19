from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.contrib.auth.models import User
from .serializers import PlaylistSerializer, UserSerializer, UserSerializerWithToken
from rest_framework import generics, permissions, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Playlist, User


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

class PlaylistCreate(generics.ListCreateAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Playlist.objects.all()
    serializer_class = PlaylistSerializer
