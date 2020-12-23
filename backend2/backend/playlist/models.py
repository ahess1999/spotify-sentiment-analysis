from django.db import models
from django.contrib.auth.models import User
from django.contrib.postgres.fields import ArrayField
from .api.spotify_api import SpotifyAPI

a = SpotifyAPI()

class Playlist(models.Model):
    playlistname = models.CharField(max_length=255, default='test')
    songlist = ArrayField(models.CharField(max_length=40), default=[])
    created_on = models.DateField(auto_now_add=True)
    updated_on = models.DateField(auto_now_add=True)