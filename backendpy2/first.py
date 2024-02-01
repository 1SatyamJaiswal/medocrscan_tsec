import regex as re
from PyPDF2 import PdfReader

from langchain import HuggingFaceHub


from langchain.llms import GooglePalm

api_key = "AIzaSyAVV4jTchLUVOoUyfOiRMGfExB7GjRBU4k"
llm = GooglePalm(google_api_key=api_key, temperature=0.2)
from langchain import PromptTemplate, LLMChain

pdf_path = "test2.pdf"


def func(file_path):
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

    prompt = PromptTemplate(
        template=new_template, input_variables=["context", "question"]
    )
    llm_chain = LLMChain(prompt=prompt, llm=llm)

    resa = llm_chain.run(
        {
            "context": pattern,
            "question": "Give me the name, age, gender, test name and Received date of the report of the patient in json format",
        }
    )
    print(resa)
    return resa


if __name__ == "__main__":
    func(pdf_path)
