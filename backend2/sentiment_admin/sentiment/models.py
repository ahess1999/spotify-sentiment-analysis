from django.db import models

class Playlist(models.Model):
    playlistname = models.CharField(max_length = 120)
    song = models.TextField()

    def _str_(self):
        return self.playlistname