from django.db import models
from django.contrib.auth.models import User

class Playlist(models.Model):
    playlistname = models.CharField(max_length=255, default='test')
    songlist = models.CharField(max_length=300, default='')
    created_on = models.DateField(auto_now_add=True)
    updated_on = models.DateField(auto_now_add=True)