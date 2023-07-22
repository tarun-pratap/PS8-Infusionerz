import pytesseract
from PIL import Image
import re
from fastapi import FastAPI
pytesseract.pytesseract.tesseract_cmd = "C:\\Program Files\\Tesseract-OCR\\tesseract.exe"
from fastapi import FastAPI
app = FastAPI()


@app.post("/{img_name}")
def read_image(img_name):
    image = Image.open(img_name)
    text = pytesseract.pytesseract.image_to_string(image)    
    result = extract_info([text])  
    return result

def extract_info(text):
    print(text)
    info_dict = {}
    key_value_patterns = {
        "Name:": r"Name:\s*(.*)",
        "Date of Birth:": r"Date of Birth:\s*(\d{2}-\d{2}-\d{4})",
        "Blood Group:": r"Blood Group:\s*(\w+[+-]?\s*\w+)",
        "Organ Donor:": r"Organ Donor:\s*(\w)",
        "Address:": r"Address:\s*(.*)",
    }
    joined_text = " ".join(text)

    for key, pattern in key_value_patterns.items():
        match = re.search(pattern, joined_text)
        if match:
            info_dict[key] = match.group(1).strip()

    return info_dict