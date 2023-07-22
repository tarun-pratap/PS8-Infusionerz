import pytesseract
import uvicorn
from PIL import Image
import re
from fastapi import FastAPI, HTTPException, Header
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['http://localhost:3000'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

pytesseract.pytesseract.tesseract_cmd = "C:\\Program Files\\Tesseract-OCR\\tesseract.exe"



@app.post("/read_image")
def read_image(img_name: str = Header(...)):
    try:
        image = Image.open(img_name)
        text = pytesseract.pytesseract.image_to_string(image)
        result = extract_info([text])
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


def extract_info(text):
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

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=4000)
