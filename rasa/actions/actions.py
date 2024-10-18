from rasa_sdk import Action
from rasa_sdk.executor import CollectingDispatcher
from rasa_sdk.events import SlotSet

class ActionGetWeather(Action):

    def name(self) -> str:
        return "action_get_weather"

    def run(self, dispatcher: CollectingDispatcher,
            tracker, domain) -> list:
        city = tracker.get_slot('city')
        
        # Normally, you would call a weather API here
        weather = "ηλιόλουστος (Θα έλεγα αν είχαμε API)"
        
        dispatcher.utter_message(text=f"Ο καιρός στην {city} είναι {weather}.")
        return []