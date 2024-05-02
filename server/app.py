from flask import request, make_response, jsonify, Flask, session
from flask_restful import Resource
from flask_cors import CORS
# from flask_bcrypt import Bcrypt

from flask_jwt_extended import create_access_token
from werkzeug.security import check_password_hash

# bcrypt = Bcrypt(app)


# Local imports
from config import app, db, api
# Add your model imports
from models import Product, Review, User, Wishlist_Item

app.secret_key = b'\xc3\xd3\x9eo\xa4\xe6\xd9\xf1\xe4[L\xb8\x1d\xb6\xc0\x08'
# products!
class AllProducts(Resource):
    def get(self):
        products = Product.query.all()
        product_data = [product.to_dict(only=('id', 'name', 'brand', 'category', 'image')) for product in products]
        return product_data, 200

api.add_resource(AllProducts, '/products')

# reviews!
class AllReviews(Resource):
    def get(self):
        reviews = Review.query.all()
        review_data = [review.to_dict(only=('id', 'rating', 'text', 'product_id', 'user_id')) for review in reviews]
        return review_data, 200
    
    def post(self):
        try:
            pass
        except:
            pass

api.add_resource(AllReviews, '/reviews')

# users!
class AllUsers(Resource):
    def get(self):
        users = User.query.all()
        user_data = [user.to_dict(only=('id', 'name', 'username', 'password_hash')) for user in users]
        return user_data, 200

api.add_resource(AllUsers, '/users')

# wishlist_items!
class AllWishlist_Items(Resource):
    def get(self):
        wishlist_items = Wishlist_Item.query.all()
        wishlist_item_data = []
        for wishlist_item in wishlist_items:
            wishlist_item_dict = {
                'id': wishlist_item.id,
                'product_id': wishlist_item.product_id,
                'user_id': wishlist_item.user_id,
                'product_name': wishlist_item.product.name,
                'product_image': wishlist_item.product.image
            }
            wishlist_item_data.append(wishlist_item_dict)
        return wishlist_item_data, 200

api.add_resource(AllWishlist_Items, '/wishlist_items')

class Login(Resource):
    def post(self):
        username = request.json.get('username')

        # Query the User model to find the user by username
        user = User.query.filter(User.username == username).first()

        return make_response({"id": user.id, "name": user.name, "username": user.username}, 201) if user else make_response({"error": "User not found!"}, 401)


api.add_resource(Login, '/login')



if __name__ == '__main__':
    app.run(port=5555, debug=True)

