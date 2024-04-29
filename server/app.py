from flask import request, make_response, jsonify, Flask
from flask_restful import Resource
from flask_cors import CORS

# Local imports
from config import app, db, api
# Add your model imports
from models import Product, User, Review, Wishlist_item

# Views go here!
class AllProducts(Resource):

    def get(self):
        response_body = [product.to.dict(only=('id', 'name', 'brand', 'category', 'image')) for product in Product.query.all()]
        return make_response(response_body, 200)

api.add_resource(AllProducts, '/products')


@app.route('/')
def index():
    return '<h1>Project Server</h1>'


if __name__ == '__main__':
    app.run(port=5555, debug=True)

