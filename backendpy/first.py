import tabula
import json
import pandas as pd

# Replace with the path to your PDF file
pdf_path = 'test2.pdf'

def filter_medical_reports(data):
    filtered_data = []
    current_test = {}

    for obj in data:
        if "Test Name" in obj:
            current_test["Test Name"] = obj["Test Name"]

        if "Results" in obj:
            current_test["Results"] = obj["Results"]
            current_test["Units"] = obj.get("Units", "")
            current_test["Bio. Ref. Interval"] = obj.get("Bio. Ref. Interval", "")

            if current_test["Results"] is not None:
                filtered_data.append(current_test.copy())
                # Reset current_test for the next test
                current_test = {}

    return filtered_data

def func(pdf_path):
    # Extract tables from the PDF
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
        # new = filter_medical_reports(filtered_table_json)
        # print(new)
    # f = open('data.txt', 'w')
    # f.write(json.dumps(json_data))
    # f.close()

    # Print JSON data
    for i in json_data:
        for j in i:
            for k in i[j]:
                print(k)
    # return json_data

if __name__ == '__main__':
    func(pdf_path)