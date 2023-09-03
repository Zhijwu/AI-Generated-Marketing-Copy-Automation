import re
from datetime import datetime
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from config import OPEN_API_KEY
import re
import openai

app = Flask(__name__)
CORS(app)
openai.api_key = OPEN_API_KEY

def extraction_output(output_text):

    output_dict = {}

    # 按"Step"关键字分割文本
    steps = re.split("Step|step", output_text)

    # 跳過第一個空元素
    for step in steps[1:]:

        step_content = step.strip()
        lines = step_content.split("\n")
        
        step_dict = {}
        current_key = ""
        for line in lines:
            if line.strip() == "":
                continue
            if "：" in line or ":" in line and len(line) > 3:
                split_line = re.split("\:|\：", line)
                if len(split_line) < 2:
                    continue
                key, value = split_line
                #print(key, value)
                current_key = key.strip()
                step_dict[current_key] = value.strip()
            else:
                #拼裝Main_list
                if current_key:
                    step_dict[current_key] += " " + line.strip()

        # 獲取Step
        step_number = "Step " + re.split("\:|\：", step)[0].strip()
        step_number = step_number.replace("_", "")
        # 字典包字典
        output_dict[step_number] = step_dict
        
        for step in output_dict:
            if 'Preferential' in output_dict[step]:
                output_dict[step]['Preferential'] = output_dict[step]['Preferential'].replace("—————-", "")
            if "Extra information" in output_dict[step]:
                output_dict[step]['Extra information'] = output_dict[step]['Extra information'].replace("—————-", "")
    return output_dict


@app.route('/get_answer', methods=['POST'])
def process_input1():
    prompt_query = request.get_json()['inputtext']

    message=[{"role": "user", "content": prompt_query}]
    response = openai.ChatCompletion.create(
        model="gpt-4-0613",
        messages = message,
        temperature=0.7,
        max_tokens=5000,
        frequency_penalty=0.0
    )

    output = response["choices"][0]["message"]["content"]
    print(output)
    final_answer = extraction_output(output)
    print(final_answer)
    return jsonify({'response': final_answer})

@app.route('/')
def index():
    return render_template('home.html')

@app.route('/output.html')
def page1():
    return render_template('output.html')

@app.route('/style.html')
def pasoutput():
    return render_template('style.html')

@app.route('/editable.html')
def edit():
    return render_template('editable.html')


#. .venv/bin/activate  
#python -m flask run
if __name__ == '__main__': 
    app.run(port=5000)