sent_data=[float(x) for x in request.form.get("data")]
    print('here',sent_data)
    data=[np.array(sent_data)]