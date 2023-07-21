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
    "Goal Assure": "./pickled policy embeddings/Goal Assure",
    "ACE": "./pickled policy embeddings/ACE",
    "Diabetic Care": "./pickled policy embeddings/Diabetic Care",
    "E Touch": "./pickled policy embeddings/e-touch",
    "Assured Wealth": "./pickled policy embeddings/Assured Wealth"
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
    
# Initialize the conversational AI bots for each policy
policy_ai_bots = {}
chat_memories={}
for policy_name, policy_retriever in policy_retrievers.items():
    memory = ConversationBufferMemory(
        memory_key=policy_name,
        return_messages=True
    )
    chat_memories[policy_name]=memory
    policy_ai_bot = ConversationalRetrievalChain.from_llm(
        chatllm,
        retriever=policy_retriever,
        memory=chat_memories[policy_name]
    )
    policy_ai_bots[policy_name] = policy_ai_bot