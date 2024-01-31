from flask import Flask, request, jsonify
import pandas as pd
from first import func

file = r'C:\Users\navne\Desktop\TSEC\backend\uploads\test.pdf'

app = Flask(__name__)

@app.route('/get_data', methods=['GET', 'POST'])
def get_data():
    # return 'Hello world'
    if request.method == 'POST':
        data = request.get_json()
        # print(data)
        # print(data)
        file = data['filepath']
        res = func(file)
        return jsonify(res)
    return 'Hello World'
    
if __name__ == '__main__':
    app.run(debug=True, port=5001)
    # t = func(file)
    # print(t)