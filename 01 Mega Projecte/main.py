# need to be install these things by using python

import speech_recognition as sr
import pyttsx3
import webbrowser
import musicLibaray

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
        webbrowser.open("httpsL//youtube.com")

    elif "open facebook" in c.lower():
        webbrowser.open("https://facebook.com")

    elif "open instagram" in c.lower():
        webbrowser.open("https://instagram.com")

    elif c.lower().startswith("play"):
        song = c.lower().split(" ")[1]
        link = musicLibaray.music[song]
        webbrowser.open(link)

    
    

if __name__ == "__main__":
    speak("Initializing jarvis......")
    while True:

        r = sr.Recognizer()
        
        
    # Try to recognize the speech
        try:
            with sr.Microphone() as source:
                print(" listening..")
                audio = r.listen(source,timeout=2,phrase_time_limit=1)

        # Adjust for ambient noise and record audio
            word = r.recognize_google(audio)
            if(word.lower()) =="sameer":
                speak("yaa")
                # Listen for command

                with sr.Microphone() as source:
                    print("Jarvis Active...")
                    audio = r.listen(source)
                    command = r.recognize_google(audio)

                    processcommand(command)


        except Exception as e:
            print("error; {0}" .format(e))

