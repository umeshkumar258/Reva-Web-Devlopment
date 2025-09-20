import speech_recognition as sr
import pyttsx3
import webbrowser
import musicLibaray  # Ensure that this is defined elsewhere
import requests

# pip install pocketsphinx

recognizer = sr.Recognizer()
engine = pyttsx3.init()

# this is the function we have to use
def speak(text):
    engine.say(text)
    engine.runAndWait()

def processcommand(c):
    if "open google" in c.lower():
        webbrowser.open("https://google.com")
    
    elif "open youtube" in c.lower():
        webbrowser.open("https://youtube.com")

    elif "open facebook" in c.lower():
        webbrowser.open("https://facebook.com")

    elif "open instagram" in c.lower():
        webbrowser.open("https://instagram.com")

    elif c.lower().startswith("play"):
        song = c.lower().split(" ")[1]
        # Assuming musicLibaray is a dictionary with song names and links
        if song in musicLibaray.music:
            link = musicLibaray.music[song]
            webbrowser.open(link)
        else:
            speak(f"Sorry, I couldn't find the song {song}.")
    
    # News fetch logic
    elif "news" in c.lower():
        response = requests.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=sk-4f366943ca1b47dea2975faf3c9aa1e5")
        
        if response.status_code == 200:
            news_data = response.json()
            articles = news_data["articles"]
            
            # Loop through the top 5 articles and read their titles
            for article in articles[:5]:
                speak(article["title"])  # Assuming 'speak' is a function you have for text-to-speech
        else:
            speak("Sorry, I couldn't fetch the news.")

if __name__ == "__main__":
    speak("Initializing Jarvis......")
    while True:
        r = sr.Recognizer()
        
        # Try to recognize the speech
        try:
            with sr.Microphone() as source:
                print("Listening...")
                audio = r.listen(source, timeout=2, phrase_time_limit=1)

            # Adjust for ambient noise and record audio
            word = r.recognize_google(audio)
            if word.lower() == "sameer":
                speak("Yes?")
                # Listen for command
                with sr.Microphone() as source:
                    print("Jarvis Active...")
                    audio = r.listen(source)
                    command = r.recognize_google(audio)
                    processcommand(command)

        except Exception as e:
            print(f"Error: {e}")
