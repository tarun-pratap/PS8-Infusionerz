import pyttsx3
import speech_recognition as sr
from fastapi import FastAPI, HTTPException, Header
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['http://localhost:3000'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def text_to_speech(prompt: str, rate: int = 150):
    engine = pyttsx3.init()
    engine.setProperty('rate', rate)  
    engine.say(prompt)
    engine.runAndWait()

def speech_to_text():
    recognizer = sr.Recognizer()
    with sr.Microphone() as source:
        recognizer.adjust_for_ambient_noise(source)
        print("Listening...")
        audio = recognizer.listen(source)

    try:
        recognized_text = recognizer.recognize_google(audio)
        return recognized_text
    except sr.UnknownValueError:
        raise HTTPException(status_code=422, detail="Speech not recognized. Please try again.")
    except sr.RequestError as e:
        raise HTTPException(status_code=500, detail=f"Could not request results from Google Speech Recognition service: {str(e)}")

@app.post("/speak")
def speak(prompt: str = Header(None)):
    try:
        if prompt is None or prompt.strip() == "":
            raise HTTPException(status_code=422, detail="Invalid request. 'prompt' header must not be empty.")
    
        rate = 150
        engine = pyttsx3.init()
        engine.setProperty('rate', rate)  
        engine.say(prompt)
        engine.runAndWait()

        return {"message": "Speech played successfully."}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/listen")
def listen():
    
        recognizer = sr.Recognizer()
        with sr.Microphone() as source:
                recognizer.adjust_for_ambient_noise(source)
                print("Listening...")
                audio = recognizer.listen(source)

        try:
            recognized_text = recognizer.recognize_google(audio)
            return {"recognized_text":recognized_text}
        except sr.UnknownValueError:
            raise HTTPException(status_code=422, detail="Speech not recognized. Please try again.")
        except sr.RequestError as e:
            raise HTTPException(status_code=500, detail=f"Could not request results from Google Speech Recognition service: {str(e)}")
        # recognized_text = speech_to_text()
        # if "stop" in recognized_text.lower():
        #         return  "Stop"

        # return {"recognized_text":recognized_text}

   

if __name__ == "__main__":
    uvicorn.run(app, host="localhost", port=8000)