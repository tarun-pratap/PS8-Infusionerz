import os
import sys
import openai

from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.chat_models import ChatOpenAI
from langchain.chains import ConversationalRetrievalChain
from langchain.memory import ConversationBufferMemory

from langchain.vectorstores import Chroma

sys.path.append('../..')

from dotenv import load_dotenv, find_dotenv
_ = load_dotenv(find_dotenv()) # read local .env file

openai.api_key  = os.environ['OPENAI_API_KEY']

# Open AI Embeddings
embedding = OpenAIEmbeddings()
chatllm = ChatOpenAI(model="gpt-3.5-turbo", temperature=0)

# Define the directories for policy embeddings
policy_embeddings_directories = {
    "Goal Assure": "./pickled_policy_embeddings/Goal Assure",
    "ACE": "./pickled_policy_embeddings/ACE",
    "Diabetic Care": "./pickled_policy_embeddings/Diabetic Care",
    "E Touch": "./pickled_policy_embeddings/e-touch",
    "Assured Wealth": "./pickled_policy_embeddings/Assured Wealth"
}

# Initialize the policy retrievers
policy_retrievers = {}
for policy_name, embeddings_directory in policy_embeddings_directories.items():
    policy_db = Chroma(
        persist_directory=embeddings_directory,
        embedding_function=embedding
    )
    policy_retriever = policy_db.as_retriever(search_type="similarity", search_kwargs={"k": 3})
    policy_retrievers[policy_name] = policy_retriever

memory = ConversationBufferMemory(
    memory_key="chat_history",
    return_messages=True
)

# Initialize the conversational AI bots for each policy
policy_ai_bots = {}
for policy_name, policy_retriever in policy_retrievers.items():
    policy_ai_bot = ConversationalRetrievalChain.from_llm(
        chatllm,
        retriever=policy_retriever,
        memory=memory,
    )
    policy_ai_bots[policy_name] = policy_ai_bot

def ask_question(policy_ai_bot, question):
    result = policy_ai_bot({"question": question})
    answer = result["answer"]
    return answer

from fastapi import FastAPI, Header

from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/bajaj/ai_bot/")
def get_policy_response(policy_name: str = Header(...), question: str = Header(...)):
    print(policy_name, question)
    if policy_name in policy_ai_bots:
        policy_ai_bot = policy_ai_bots[policy_name]
        return ask_question(policy_ai_bot, question)
    else:
        return "Invalid policy name"
