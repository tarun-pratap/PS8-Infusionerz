from fastapi import FastAPI, Header

from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/get_user_details")
def get_user_details():
    user_details = {
        "full_name":"Hardik Dharmani",
        "email": "ddharmani99@gmail.com",
        "DOB": "09-05-2003",
        "phone_number": "9426175881",
    }
    
    return user_details
    