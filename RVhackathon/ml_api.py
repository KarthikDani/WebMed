from flask import Flask,request,render_template, make_response
import numpy as np
import pickle
from flask_cors import CORS
import json as json


app=Flask(__name__)
CORS(app)
model= pickle.load(open(r'RVhackathon/model.pkl','rb'))

@app.route('/')
def home():
    return 'hi'


@app.route('/predict',methods=['POST','GET'])
def predict():
    #print(request.json)
    sent_data=[float(x) for x in request.json['data']]
    #print('here',sent_data)
    data=np.array(sent_data).reshape(1,-1)
    pred={'prediction':str(model.predict(data)[0])}
    resp = make_response(json.dumps(pred))
    resp.headers["Content-Type"] = "application/json"

    return resp

if __name__=="__main__":
    app.run(port=8000)