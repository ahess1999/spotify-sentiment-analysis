import json
import requests
#from secrets import spotify_user_id#, spotify_token
from datetime import date
#from refresh import Refresh

class SpotifyAPI:
    def test(self):
        return "tests"
    def __init__(self):
        self.user_id = "gp8n7os6rj2i6iv4bscbu9n58"
        self.spotify_token = "BQCLoFhQs3II6XhaKtbVcwXqZFnUqTMkqzNjkjRQf0y59sxkGs3tzBIVNyi988T8PtJ6fI_9_G0F37EBZZbnjQTKQmspVyOoYQwObpIPaI4zzm4r3d-i1P1rCvtI-l6RCW8iwV6sRiX48v-ka-c5Q9bUFjnaZVGc5XwyJs_DUNWXUfq7g3vqaYKsc5bQazrBa3rNqDMeqbQYCa1B"
        #self.playlist = "4hPMl9uWy6q7ZU4cqS6dcm"
        self.tracks = ""
        self.new_playlist_id = ""
        #self.artist_uri = "" #2h93pZq0e7k5yf4dywlkpM
        self.artist_name = ""
        self.user_id = ""

    def get_user_id(self):

        query = "https://api.spotify.com/v1/me"

        response = requests.get(query,
                                headers={"Content-Type": "application/json",
                                         "Authorization": "Bearer {}".format(self.spotify_token)})

        response_json = response.json()

        self.user_id = response_json['id']

        return response_json['id']
        

    def get_artist_json(self, artist_uri):

        query = "https://api.spotify.com/v1/artists/{}".format(
            artist_uri)

        response = requests.get(query,
                                headers={"Content-Type": "application/json",
                                         "Authorization": "Bearer {}".format(self.spotify_token)})

        response_json = response.json()

        return response_json

    def get_album_json(self, album_uri):

        query = "https://api.spotify.com/v1/albums/{}".format(
            album_uri)

        response = requests.get(query,
                                headers={"Content-Type": "application/json",
                                         "Authorization": "Bearer {}".format(self.spotify_token)})

        response_json = response.json()

        return response_json

    def get_playlist_json(self,playlist_uri):

        query = "https://api.spotify.com/v1/playlists/{}".format(
            playlist_uri)

        response = requests.get(query,
                                headers={"Content-Type": "application/json",
                                         "Authorization": "Bearer {}".format(self.spotify_token)})

        response_json = response.json()

        return response_json

    def get_track_json(self, track_uri):

        query = "https://api.spotify.com/v1/tracks/{}".format(
            track_uri)

        response = requests.get(query,
                                headers={"Content-Type": "application/json",
                                         "Authorization": "Bearer {}".format(self.spotify_token)})

        response_json = response.json()

        return response_json

    def get_related_artist_json(self, artist_uri):

        query = "https://api.spotify.com/v1/artists/{}/related-artists".format(
            artist_uri)

        response = requests.get(query,
                                headers={"Content-Type": "application/json",
                                         "Authorization": "Bearer {}".format(self.spotify_token)})

        response_json = response.json()

        return response_json
    
    def get_top_tracks_json(self, artist_uri):

        query = "https://api.spotify.com/v1/artists/{}/top-tracks?country=US".format(
            artist_uri)

        response = requests.get(query,
                                headers={"Content-Type": "application/json",
                                         "Authorization": "Bearer {}".format(self.spotify_token)})

        response_json = response.json()

        return response_json

    def get_audio_analysis_json(self, track_uri):

        query = "https://api.spotify.com/v1/audio-analysis/{}".format(
            track_uri)

        response = requests.get(query,
                                headers={"Content-Type": "application/json",
                                         "Authorization": "Bearer {}".format(self.spotify_token)})

        response_json = response.json()

        return response_json

    def get_audio_features_json(self, track_uri):

        query = "https://api.spotify.com/v1/audio-features/{}".format(
            track_uri)

        response = requests.get(query,
                                headers={"Content-Type": "application/json",
                                         "Authorization": "Bearer {}".format(self.spotify_token)})

        response_json = response.json()

        return response_json

    def get_related_artists_from_uri(self, artist_uri):

        query = "https://api.spotify.com/v1/artists/{}/related-artists".format(
            artist_uri)

        response = requests.get(query,
                                headers={"Content-Type": "application/json",
                                         "Authorization": "Bearer {}".format(self.spotify_token)})

        response_json = response.json()

        return response_json

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

        tracks = []
        for i in response_json['tracks']['items']:
            tracks.append(i['name'])
        return tracks

    def get_playlist_name_from_uri(self, playlist_uri):
        
        query = "https://api.spotify.com/v1/playlists/{}".format(
            playlist_uri)

        response = requests.get(query,
                                headers={"Content-Type": "application/json",
                                         "Authorization": "Bearer {}".format(self.spotify_token)})

        response_json = response.json()

        return response_json['name']
    
    def get_playlist_tracks_from_uri(self, playlist_uri):
        
        query = "https://api.spotify.com/v1/playlists/{}".format(
            playlist_uri)

        response = requests.get(query,
                                headers={"Content-Type": "application/json",
                                         "Authorization": "Bearer {}".format(self.spotify_token)})

        response_json = response.json()

        tracks = []
        for i in response_json['tracks']['items']:
            tracks.append(i['track']['name'])
        return tracks
    
    def get_playlist_track_uris_from_uri(self, playlist_uri):
        
        query = "https://api.spotify.com/v1/playlists/{}".format(
            playlist_uri)

        response = requests.get(query,
                                headers={"Content-Type": "application/json",
                                         "Authorization": "Bearer {}".format(self.spotify_token)})

        response_json = response.json()

        tracks = []
        for i in response_json['tracks']['items']:
            tracks.append(i['track']['uri'])
        return tracks


    def get_artist_name_from_artist_json(self, artist_json):
        print("Returning artist: "+artist_json['name'])
        return artist_json['name']

    def get_track_year_from_track_json(self, track_json):
        print("Returning track release date: "+track_json['album']['release_date'].split('-')[0])
        return track_json['album']['release_date'].split('-')[0]
    
    def get_track_release_date_from_track_json(self, track_json):
        print("Returning track release date: "+track_json['album']['release_date'])
        return track_json['album']['release_date']

    def get_track_album_name_from_track_json(self, track_json):
        print("Returning track's album name: "+track_json['album']['name'])
        return track_json['album']['name']

    def get_track_name_from_track_json(self, track_json):
        print("Returning track's name: "+track_json['name'])
        return track_json['name']

    def convertMillis(self, millis):
        seconds=(millis/1000)%60
        minutes=(millis/(1000*60))%60
        hours=(millis/(1000*60*60))%24
        if hours >= 1:
            return str(int(round(hours,0))) + ":" + str(int(round(minutes,0))) + ":" + str(int(round(seconds,0)))
        return str(int(round(minutes,0))) + ":" + str(int(round(seconds,0)))

    def get_track_duration_from_track_json(self, track_json):
        print("Returning track's album duration: "+str(track_json['duration_ms']))
        return self.convertMillis(track_json['duration_ms'])

    def get_album_name_from_album_json(self, album_json):
        print(album_json['name'])
        return album_json['name']

    def get_album_tracks_from_album_json(self, album_json):
        tracks = []
        for i in album_json['tracks']['items']:
            tracks.append(i['name'])
        return tracks

    def get_playlist_name_from_playlist_json(self, playlist_json):
        print("Playlist name: " + playlist_json['name'])
        return playlist_json['name']

    def get_playlist_tracks_from_playlist_json(self, playlist_json):
        print("Getting list of tracks from playlist")
        tracks = []
        for i in playlist_json['tracks']['items']:
            tracks.append(i['track']['name'])
        return tracks

    def get_artist_uri_from_track_json(self, track_json):
        print("Getting artist name from track")
        return track_json['artists'][0]['id']

    def get_playlist_track_uris_from_playlist_json(self, playlist_json):
        print("Getting list of URI's from playlist")
        tracks = []
        for i in playlist_json['tracks']['items']:
            tracks.append(i['track']['uri'])
        return tracks

    def get_track_uri_from_track_json(self, track_json):
        print("Getting uri for track: " + track_json['uri'])
        return track_json['uri'].split(':')[2] #umm parse out spotify:track:

    def get_energy(self,json):
        return json['energy']

    def get_acousticness(self,json):
        return json['acousticness']

    def get_danceability(self,json):
        return json['danceability']

    def get_instrumentalness(self,json):
        return json['instrumentalness']

    def get_liveness(self,json):
        return json['liveness']

    def get_loudness(self,json):
        return json['loudness']

    def get_speechiness(self,json):
        return json['speechiness']
    
    def get_valence(self,json):
        return json['valence']

    def get_tempo(self,json):
        return json['tempo']


    def get_tracks_in_playlist_from_uri(self, playlist_uri):

        tracks = ""

        query = "https://api.spotify.com/v1/playlists/{}/tracks".format(
            playlist_uri)

        print(query)
        response = requests.get(query,
                                headers={"Content-Type": "application/json",
                                         "Authorization": "Bearer {}".format(self.spotify_token)})

        response_json = response.json()

        print(response)

        for i in response_json["items"]:
            tracks += (i["track"]["uri"] + ",")
        tracks = tracks[:-1]

        return tracks
        # self.add_to_playlist()

    def create_playlist(self):
        # Create a new playlist
        user_id = self.get_user_id()
        print("Trying to create playlist...")
        today = date.today()

        todayFormatted = today.strftime("%d/%m/%Y")

        query = "https://api.spotify.com/v1/users/{}/playlists".format(
            user_id)

        print(query)

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
        return response_json['id']

    def add_to_playlist(self):
        # add all songs to new playlist
        print("Adding songs...")

        
        self.new_playlist_id = self.create_playlist()
        tracks = self.get_tracks_in_playlist_from_uri('7afYAS7ly60P8b1GMSfTv2')

        json = self.get_playlist_json('7afYAS7ly60P8b1GMSfTv2')

        track_list = self.get_playlist_tracks_from_playlist_json(json)

        query = "https://api.spotify.com/v1/playlists/{}/tracks?uris={}".format(
            self.new_playlist_id, tracks)

        print(query)
        response = requests.post(query, headers={"Content-Type": "application/json",
                                                 "Authorization": "Bearer {}".format(self.spotify_token)})

        print("Inside add to playlist")
        print(response)
        print(response.json)
        return track_list

    def basic_sentiment(self):

        # (1) Get songs in playlist CHECK
        # (2) Get track URIs CHECK
        # (3) Look up properties of each track / save values (energy, acousticness, etc) 
        # (4) Get artist URI
        # (5) Find related artists
        # (6) Pull in popular songs
        # (7) Look up properties of each track
        # (8) Compare to original track
        # (9) Most similar is added to new playlist

        # (1) Get songs in playlist
        json = self.get_playlist_json('4x41aDhIjAtl2xxW2REPU6')['tracks']['items']
        recommended_tracks = [] #contains recommend track URIs

        for i in range(len(json)):
            
            #(2) Get track URIs
            track = json[i]['track']
            track_uri = self.get_track_uri_from_track_json(track)
            audio_specs = self.get_audio_features_json(track_uri)

            # (3) Look up properties of each track / save values (energy, acousticness, etc) 
            energy = self.get_energy(audio_specs)
            acousticness = self.get_acousticness(audio_specs)
            danceability = self.get_danceability(audio_specs)
            instrumentalness = self.get_instrumentalness(audio_specs)
            liveness = self.get_liveness(audio_specs)
            loudness = self.get_loudness(audio_specs)

            # (4) Get artist URI
            artist_uri = self.get_artist_uri_from_track_json(track)

            # (5) Find related artists
            related_artists_json = self.get_related_artist_json(artist_uri)['artists']
            related_artists_uris = []
            for i in range(len(related_artists_json)):
                related_artists_uris.append(related_artists_json[i]['id'])

            
            # (6) Pull in popular songs of an artist        
            for i in range(len(related_artists_uris)):
                tracks_json = self.get_top_tracks_json(related_artists_uris[i]) #top tracks for an artist
                print(tracks_json['tracks'][0])
                
                print("hello")
                maxScore = 0
                bestTrack = ""
                # (7) Look up properties of each track
                print(len(tracks_json['tracks']))
                for j in range(10): #tracks_json['tracks'][i]
                    self.get_track_name_from_track_json(tracks_json['tracks'][j]) #checking the track
                    track = self.get_track_uri_from_track_json(tracks_json['tracks'][j])
                    audio_specs = self.get_audio_features_json(track)
                    ener = self.get_energy(audio_specs)
                    acoust = self.get_acousticness(audio_specs)
                    inst = self.get_instrumentalness(audio_specs)
                    live = self.get_liveness(audio_specs)
                    loud = self.get_loudness(audio_specs)
                    dance = self.get_danceability(audio_specs)

                    
                    print(ener)
                    print(acoust)
                    print(inst)
                    print(live)
                    print(loud)
                    print(dance)

                    # (8) Compare to original track
                    score = 0
                    score += abs(energy - ener)
                    score += abs(acousticness - acoust)
                    score += abs(instrumentalness - inst)
                    score += abs(liveness - live)
                    score += abs(loudness - loud)
                    score += abs(danceability - dance)

                    print(score)
                    if score > maxScore:
                        maxScore = score
                        bestTrack = track #sets track URI

                    # (9) Most similar is added to new playlist
            
            print("FOUND IT!!!!")
            print(self.get_track_json(bestTrack))
            recommended_tracks.append(bestTrack)

    

    def call_refresh(self):

        print("Refreshing token")

        for i in range(10):
            print('Working')

        refreshCaller = Refresh()

        self.spotify_token = refreshCaller.refresh()

        # json = self.get_track_json('6tGwDY47NZVeQ5X83HDK6u')

        # print(json)

        # print(self.get_track_duration_from_track_json(json))
        
        #print(self.artist_name)
        #self.find_songs()

    def main(self):

        print("hello")
        self.add_to_playlist()
        

print("Start....")