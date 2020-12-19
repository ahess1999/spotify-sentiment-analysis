from django.db import models
from django.contrib.auth.models import User

class Playlist(models.Model):
    playlistname = models.CharField(max_length=255)
    songlist = models.CharField(max_length=300)
    created_on = models.DateField(auto_now_add=True)
    updated_on = models.DateField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)