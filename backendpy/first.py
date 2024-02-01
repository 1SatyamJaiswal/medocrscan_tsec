import tabula
import json
import pandas as pd
import math
import nltk
nltk.download('averaged_perceptron_tagger')
from PyPDF2 import PdfReader
# Replace with the path to your PDF file
pdf_path = 'test2.pdf'

def filter_medical_reports(data):
    filtered_data = []
    for row in data:
        # print(row)
        if 'COMPLETE BLOOD COUNT;CBC' in list(row.keys()):
            # change name of key if key is Bio. Ref. Interval
            if 'Bio. Ref. Interval' in list(row.keys()):
                row['Range'] = row.pop('Bio. Ref. Interval')
            filtered_data.append(row)
        elif 'Test Name' in list(row.keys()):
            if 'Bio. Ref. Interval' in list(row.keys()):
                row['Range'] = row.pop('Bio. Ref. Interval')
            filtered_data.append(row)
        if 'URINE EXAMINATION, ROUTINE; URINE, R/E' in list(row.values()):
            row['Test Name'] = 'URINE'
            if 'Bio. Ref. Interval' in list(row.keys()):
                row['Range'] = row.pop('Bio. Ref. Interval')
            filtered_data.append(row)
        # for key in list(row.values()):
        #     print(key, end = ' ')
            # if row[key] and row[key] == None:
            #     row[key] = ''
        # remove nan values
        # elif not None in row.values() and not None in row.values():
        #     filtered_data.append(row)

    for row in filtered_data:
        for key in list(row.keys()):
            # print(row[key])
            if pd.isna(row[key]):
                row[key] = ''

    return filtered_data

def func(pdf_path):
    # Extract tables from the PDF
    text = ""
    pdf_reader = PdfReader(pdf_path)
    for page in pdf_reader.pages:
        text += page.extract_text()
    index_of_test_name = text.find("Test Name")
    pattern = text[:index_of_test_name]
    sentences = nltk.sent_tokenize(pattern)
    nouns = []
    for sentence in sentences:
        for word,pos in nltk.pos_tag(nltk.word_tokenize(str(sentence))):
            if (pos == 'NNP'):
                nouns.append(word)
    # print(nouns[-1:-3:-1])
    name = ''
    for i in nouns[-1:-3:-1][::-1]:
        name += i + ' '
    # print(name)

    tables = tabula.read_pdf(pdf_path, pages='all', multiple_tables=True)

    # Convert tables to JSON format
    json_data = []
    table_names = []

    for i, table in enumerate(tables):
        table_json = table.to_dict(orient='records')
        filtered_table_json = [
            {
                'value' if key == 'Unnamed: 0' else 'Units' if key == 'Unnamed: 1' else 'Range' if key == 'Unnamed: 2' else key: val
                for key, val in row.items() if not (pd.isna(val) and 'Unnamed' in key)
            }
            for row in table_json
        ]

        # Rename 'Unnamed: 1' to 'Units' and 'Unnamed: 2' to 'Range'
        for row in filtered_table_json:
            if 'Unnamed: 1' in row:
                row['Units'] = row.pop('Unnamed: 1')
            if 'Unnamed: 2' in row:
                row['Range'] = row.pop('Unnamed: 2')

        # Rename 'Unnamed: 3' to 'Unnamed: 2' and 'Unnamed: 4' to 'Unnamed: 3'
        for row in filtered_table_json:
            if 'Unnamed: 3' in row:
                row['Unnamed: 2'] = row.pop('Unnamed: 3')
            if 'Unnamed: 4' in row:
                row['Unnamed: 3'] = row.pop('Unnamed: 4')

        # Replace all new 'Unnamed: 2' with 'Units' and 'Unnamed: 3' with 'Range'
        for row in filtered_table_json:
            if 'Unnamed: 2' in row:
                row['Units'] = row.pop('Unnamed: 2')
            if 'Unnamed: 3' in row:
                row['Range'] = row.pop('Unnamed: 3')

        filtered_data = filter_medical_reports(filtered_table_json)
        json_data.append({f"table_{i + 1}": filtered_data})
        table_names.append(f"table_{i + 1}")
    
    json_data.append({'name': name})
    # Print JSON data
    # for i in json_data:
    #     for j in i:
    #         for k in i[j]:
    #             print(k)
    print(json_data)
    return json_data

if __name__ == '__main__':
    func(pdf_path)