# server.py
from flask import Flask, request, jsonify
from flask_cors import CORS
from tensorflow.keras.models import load_model
import numpy as np
from PIL import Image
from io import BytesIO
import base64
import os

app = Flask(__name__)
CORS(app)  # อนุญาตให้ React ยิง request

MODEL_PATH = os.path.join(os.path.dirname(__file__), "mango_cnn.h5")
model = load_model(MODEL_PATH)
CLASS_NAMES = ["overripe mango", "ripe mango", "unripe mango"]

@app.route("/", methods=["GET"])
def home():
    return jsonify({"message": "API is running"}), 200

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    if "image_base64" not in data:
        return jsonify({"error": "No image provided"}), 400

    try:
        # แปลง base64 -> Image
        image_data = data["image_base64"].split(",")[1]  # ตัด prefix
        img = Image.open(BytesIO(base64.b64decode(image_data)))

        # Preprocess
        img = img.resize((128, 128))
        img = np.array(img) / 255.0
        if img.ndim == 2:  # grayscale → stack 3 channels
            img = np.stack([img]*3, axis=-1)
        img = np.expand_dims(img, axis=0)

        # Predict
        preds = model.predict(img)
        class_index = int(np.argmax(preds[0]))
        confidence = float(np.max(preds[0]))

        return jsonify({
            "class": CLASS_NAMES[class_index],
            "confidence": confidence
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
