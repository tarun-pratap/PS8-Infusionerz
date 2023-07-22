from flask import Flask
import pytesseract
from PIL import Image

app = Flask(__name__)

@app.route("/home")
def home():
    return "Hi"

@app.route("/{img_name}")
def read_image(img_name):
    image = Image.open(img_name)
    text = pytesseract.pytesseract.image_to_string(image)
    resul


app.run(debug=True)