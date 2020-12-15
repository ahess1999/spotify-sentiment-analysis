import json
import requests
from secrets import spotify_user_id#, spotify_token
from datetime import date
from refresh import Refresh
#hello

class SaveSongs:
    def __init__(self):
        self.user_id = spotify_user_id
        self.spotify_token = ""
        self.playlist = "4hPMl9uWy6q7ZU4cqS6dcm"
        self.tracks = ""
        self.new_playlist_id = ""
        #self.artist_uri = "" #2h93pZq0e7k5yf4dywlkpM
        self.artist_name = ""

    def get_artist_name_from_uri(self, artist_uri):

        query = "https://api.spotify.com/v1/artists/{}".format(
            artist_uri)

        response = requests.get(query,
                                headers={"Content-Type": "application/json",
                                         "Authorization": "Bearer {}".format(self.spotify_token)})

        response_json = response.json()

        print("Returning artist: "+response_json['name'])
        return response_json['name']

    def get_album_name_from_uri(self, album_uri):

        query = "https://api.spotify.com/v1/albums/{}".format(
            album_uri)

        response = requests.get(query,
                                headers={"Content-Type": "application/json",
                                         "Authorization": "Bearer {}".format(self.spotify_token)})

        response_json = response.json()

        print(response_json['name'])
        return response_json['name']

    def get_album_tracks_from_uri(self, album_uri):
        query = "https://api.spotify.com/v1/albums/{}".format(
            album_uri)

        response = requests.get(query,
                                headers={"Content-Type": "application/json",
                                         "Authorization": "Bearer {}".format(self.spotify_token)})

        response_json = response.json()
        return response_json
    
    def get_artist_name_from_json(self, json):
        print("Returning artist: "+json['name'])
        return json['name']

    def get_album_name_from_json(self, json):
        print(json['name'])
        return json['name']

    def find_songs(self):

        print("Finding songs in discover weekly...")
        # Loop through playlist tracks, add them to list

        query = "https://api.spotify.com/v1/playlists/{}/tracks".format(
            self.playlist)

        response = requests.get(query,
                                headers={"Content-Type": "application/json",
                                         "Authorization": "Bearer {}".format(self.spotify_token)})

        response_json = response.json()

        print(response)

        for i in response_json["items"]:
            self.tracks += (i["track"]["uri"] + ",")
        self.tracks = self.tracks[:-1]

        self.add_to_playlist()

    def create_playlist(self):
        # Create a new playlist
        print("Trying to create playlist...")
        today = date.today()

        todayFormatted = today.strftime("%d/%m/%Y")

        query = "https://api.spotify.com/v1/users/{}/playlists".format(
            spotify_user_id)

        request_body = json.dumps({
            "name": todayFormatted + " fire playlist", "description": "Sick playlist", "public": True
        })

        response = requests.post(query, data=request_body, headers={
            "Content-Type": "application/json",
            "Authorization": "Bearer {}".format(self.spotify_token)
        })

        print("Insider create playlist")
        print(response)
        response_json = response.json()

        return response_json["id"]

    def add_to_playlist(self):
        # add all songs to new playlist
        print("Adding songs...")

        self.new_playlist_id = self.create_playlist()

        query = "https://api.spotify.com/v1/playlists/{}/tracks?uris={}".format(
            self.new_playlist_id, self.tracks)

        response = requests.post(query, headers={"Content-Type": "application/json",
                                                 "Authorization": "Bearer {}".format(self.spotify_token)})

        print("Inside add to playlist")
        print(response)
        print(response.json)

    

    def call_refresh(self):

        print("Refreshing token")

        refreshCaller = Refresh()

        self.spotify_token = refreshCaller.refresh()

        self.get_album_tracks_from_uri("3mH6qwIy9crq0I9YQbOuDf")
        #print(self.artist_name)
        #self.find_songs()

    

        

print("Start....")
a = SaveSongs()
a.call_refresh()