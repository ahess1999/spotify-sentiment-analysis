from django.contrib import admin
from .models import Playlist

class PlaylistAdmin(admin.ModelAdmin):
    list_display = ('playlistname', 'song')


admin.site.register(Playlist, PlaylistAdmin)
