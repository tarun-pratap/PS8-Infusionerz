# from flask import Flask, jsonify, request
# from flask_cors import CORS
# from PyPDF2 import PdfReader
# from langchain.embeddings.openai import OpenAIEmbeddings
# from langchain.text_splitter import CharacterTextSplitter
# from langchain.vectorstores import FAISS
# from langchain.chains.question_answering import load_qa_chain
# from langchain.llms import OpenAI
# import os

# # Set the OpenAI API key
# os.environ["OPENAI_API_KEY"] = "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"

# # Initialize the necessary components
# pdfreader = PdfReader('finalcheck.pdf')

# raw_text = ''
# for i, page in enumerate(pdfreader.pages):
#     content = page.extract_text()
#     if content:
#         raw_text += content

# text_splitter = CharacterTextSplitter(
#     separator="\n",
#     chunk_size=800,
#     chunk_overlap=200,
#     length_function=len,
# )
# texts = text_splitter.split_text(raw_text)

# embeddings = OpenAIEmbeddings()
# document_search = FAISS.from_texts(texts, embeddings)

# chain = load_qa_chain(OpenAI(), chain_type="stuff")

# app = Flask(__name__)
# CORS(app)

# @app.route('/api/ask', methods=['POST'])
# def ask_question():
#     data = request.get_json()
#     query = data.get('query')
    
#     # Perform the question-answering process
#     docs = document_search.similarity_search(query)
#     answer = chain.run(input_documents=docs, question=query)
    
    
#     return jsonify({'answer': answer})

# if __name__ == '__main__':
#     app.run(port=3000, debug=True)


from flask import Flask, jsonify, request
from flask_cors import CORS
from PyPDF2 import PdfReader
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.text_splitter import CharacterTextSplitter
from langchain.vectorstores import FAISS
from langchain.chains.question_answering import load_qa_chain
from langchain.llms import OpenAI
import os

# Set the OpenAI API key
os.environ["OPENAI_API_KEY"] = "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"

# Initialize the necessary components
pdfreader = PdfReader('finalcheck.pdf')

raw_text = ''
for i, page in enumerate(pdfreader.pages):
    content = page.extract_text()
    if content:
        raw_text += content

text_splitter = CharacterTextSplitter(
    separator="\n",
    chunk_size=800,
    chunk_overlap=200,
    length_function=len,
)
texts = text_splitter.split_text(raw_text)

embeddings = OpenAIEmbeddings()
document_search = FAISS.from_texts(texts, embeddings)

chain = load_qa_chain(OpenAI(), chain_type="stuff")

app = Flask(__name__)
CORS(app)

@app.route('/api/ask', methods=['POST'])
def ask_question():
    try:
        data = request.get_json()
        query = data.get('query')
        if not query:
            return jsonify({'error': 'Query field is missing'}), 400
        
        # Perform the question-answering process
        docs = document_search.similarity_search(query)
        answer = chain.run(input_documents=docs, question=query)
        
        return jsonify({'answer': answer})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(port=3000, debug=True)
