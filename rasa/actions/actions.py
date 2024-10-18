from rasa_sdk import Action
from rasa_sdk.executor import CollectingDispatcher
from rasa_sdk.events import SlotSet

class ActionGetWeather(Action):
    def name(self) -> str:
        return "action_get_weather"

    def run(self, dispatcher: CollectingDispatcher,
            tracker: Tracker,
            domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:
        
        city = tracker.get_slot("city")
        weather = "sunny"  # Here you would call a real weather API
        dispatcher.utter_message(text=f"The weather in {city} is {weather}.")
        return []