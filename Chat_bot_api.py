import os
import sys
import openai

from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.chat_models import ChatOpenAI

sys.path.append('../..')

from dotenv import load_dotenv, find_dotenv
_ = load_dotenv(find_dotenv()) # read local .env file

openai.api_key  = os.environ['OPENAI_API_KEY']

# Open AI Embeddings
embedding = OpenAIEmbeddings()
chatllm = ChatOpenAI(model="gpt-3.5-turbo", temperature=0)