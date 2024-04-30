from flask import request, make_response, jsonify, Flask
from flask_restful import Resource
from flask_cors import CORS

# Local imports
from config import app, db, api
# Add your model imports
from models import Product

# Views go here!
class AllProducts(Resource):
    def get(self):
        products = Product.query.all()
        product_data = [product.to_dict(only=('id', 'name', 'brand', 'category', 'image')) for product in products]
        return product_data, 200

api.add_resource(AllProducts, '/products')

if __name__ == '__main__':
    app.run(port=5555, debug=True)

