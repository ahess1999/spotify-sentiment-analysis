import requests
import json

#spotify_token = "BQB_9tpXUir6qMnTJh7vRX9_awjBD6oF-0Sc6pklpCzVUr74kWQxS8MBKXmmHVEWSGREbU97E9DSlsqGeqZrS6l39jrQmc3si3zNjzbfdrjShzVGz0y4ycUFmhBJKu1oL1gkKrxOERtsuS6hmtN1epEsGaOdWsaAmg"
refresh_token = "AQDKejsJZgssgFFdVxfwllGArqUT3I1eVc_JBs8mShiaoge46E003tuj_iPZ-XX27u2u-IZg3g4DssVZKytjoYx2rTOTO4-aBKRhpFDLavj_XCkWfEKII1UO6aLqlMcykYI"
base_64 = "MDAzYWViYmYwMjEzNGZjY2JmNGNkNjQ1M2Y5YWM1ODE6MjM5M2RkYzIwN2ZhNGE0YzlhMmVjOTBhOGZkZGQ5ZGY="
class Refresh:

    def __init__(self):
        self.refresh_token = refresh_token
        self.base_64 = base_64

    def refresh(self):

        query = "https://accounts.spotify.com/api/token"

        response = requests.post(query,
                                 data={"grant_type": "refresh_token",
                                       "refresh_token": refresh_token},
                                 headers={"Authorization": "Basic " + base_64})

        response_json = response.json()
        print(response_json)

        return response_json["access_token"]


a = Refresh()
a.refresh()