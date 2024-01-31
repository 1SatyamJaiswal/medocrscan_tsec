import regex as re
from PyPDF2 import PdfReader

from langchain import HuggingFaceHub
llm = HuggingFaceHub(repo_id="google/flan-t5-xxl",model_kwargs={"temperature":0.4,"max_length":600}, huggingfacehub_api_token="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")
from langchain import PromptTemplate, LLMChain

pdf_path = 'test2.pdf'

def func():
    text = ""
    pdf_reader = PdfReader(file_path)
    for page in pdf_reader.pages:
        text += page.extract_text()

    index_of_test_name = text.find("Test Name")
    pattern = text[:index_of_test_name]

    new_template = """
    You are an artificial intelligence assistant work in healthcare. You are asked to answer questions. The assistant gives helpful, detailed, and polite answers to the user's questions.
    {context}

    ### Input: {question}
    ### Response:
    """

    prompt = PromptTemplate(template=new_template, input_variables=["context", "question"])
    llm_chain = LLMChain(prompt=prompt, llm=llm)

    return llm_chain.run({"context": pattern, "question":'Extract name, gender and age from the above text'})

if __name__ == '__main__':
    func(pdf_path)