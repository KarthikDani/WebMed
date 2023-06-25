import random
import json
import torch
import numpy as np
from flask_cors import CORS
from flask import Flask,request,render_template, make_response
from model import neuralnetwork
from nltk_untilities import bag_of_words, tokenize

app=Flask(__name__)
CORS(app)

device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

with open('RVhackathon\chat_bot\intension.json', 'r') as json_data:
    intension = json.load(json_data)

FILE = "./RVhackathon/chat_bot/data.pth"
data = torch.load(FILE)

input_size = data["input_size"]
hidden_size = data["hidden_size"]
output_size = data["output_size"]
all_words = data['all_words']
tags = data['tags']
model_state = data["model_state"]

model = neuralnetwork(input_size, hidden_size, output_size).to(device)
model.load_state_dict(model_state)#copies all the parameters from the argument provided, into the object that calls this function
model.eval()

botname = "med bot"

@app.route('/response',methods=['POST'])
def get_response():
    res=''
    msg=request.json['message']
    sentence = tokenize(msg)
    X = bag_of_words(sentence, all_words)
    X = X.reshape(1, X.shape[0])
    X = torch.from_numpy(X).to(device)

    output = model(X)
    _, predicted = torch.max(output, dim=1)

    tag = tags[predicted.item()]

    probilities = torch.softmax(output, dim=1)
    probility = probilities[0][predicted.item()]
    if probility.item() > 0.75:
        for intent in intension['intension']:
            if tag == intent["tag"]:
                res= random.choice(intent['responses'])
    else:
        res="I do not understand..."
    
    res={'response':res}
    resp = make_response(json.dumps(res))
    resp.headers["Content-Type"] = "application/json"

    return resp


if __name__ == "__main__":
    """ print("Let's chat! (type 'quit' to exit)")
    while True:
        sentence = input("You: ")
        if sentence == "quit":
            break

        resp = get_response(sentence)
        print(resp) """
    app.run(port=9000)

