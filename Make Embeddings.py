import os
import openai
import sys
sys.path.append('../..')

from dotenv import load_dotenv, find_dotenv
_ = load_dotenv(find_dotenv()) # read local .env file

openai.api_key  = os.environ['OPENAI_API_KEY']

from langchain.document_loaders import PyPDFDirectoryLoader

from langchain.text_splitter import RecursiveCharacterTextSplitter

from langchain.embeddings.openai import OpenAIEmbeddings

from langchain.vectorstores import Chroma


folder_names = ["ACE", "Assured Wealth", "Diabetic Care", "e-touch", "Goal Assure"]

# Base directory where the folders are located
base_directory = "C:/Users/ddhar/Desktop/Bajaj HackRx/Bajaj/"

for folder_name in folder_names:
    folder_path = os.path.join(base_directory, folder_name)
    
    loaders = PyPDFDirectoryLoader(folder_path)
    
    pdfs = loaders.load()

    text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200, separators=["\n\n", "\n", "(?<=\.)", " ", ], )
    
    docs = text_splitter.split_documents(pdfs)

    embedding = OpenAIEmbeddings()

    embeddings_directory = f"./pickled_policy_embeddings/{os.path.basename(folder_path)}"
    vectordb = Chroma.from_documents(
        documents=docs,
        embedding=embedding,
        persist_directory=embeddings_directory,
    )
