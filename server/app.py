from flask import request, make_response, jsonify, Flask, session
from flask_restful import Resource
from flask_cors import CORS



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
            data = request.json
            
            new_review = Review(
                rating=data.get('rating'),
                text=data.get('text'),
                product_id=data.get('product_id'),
                user_id=data.get('user_id')
            )
            
            db.session.add(new_review)
            db.session.commit()
            
            return new_review.to_dict(only=('id', 'rating', 'text', 'product_id', 'user_id')), 201
        except Exception as e:
            return {'error': str(e)}, 500
        
api.add_resource(AllReviews, '/reviews')

class ReviewById(Resource):
    def delete(self, review_id):
        review = Review.query.get(review_id)
        if not review:
            return {'error': 'Review not found'}, 404
        db.session.delete(review)
        db.session.commit()
        return {}, 204

    def patch(self, review_id):
        review = Review.query.get(review_id)
        try:
            review = Review.query.get(review_id)
            if not review:
                return {'error': 'Review not found'}, 404

            data = request.json
            if 'rating' in data:
                # Check if the 'rating' value is an integer
                if not isinstance(data['rating'], int):
                    return {'error': 'Rating must be an integer'}, 400

                review.rating = data['rating']
            if 'text' in data:
                review.text = data['text']

            db.session.commit()
            return review.to_dict(only=('id', 'rating', 'text', 'product_id', 'user_id')), 200

        except Exception as e:
            return {'error': str(e)}, 500

api.add_resource(ReviewById, '/reviews/<int:review_id>')



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

        user = User.query.filter(User.username == username).first()

        return make_response({"id": user.id, "name": user.name, "username": user.username}, 201) if user else make_response({"error": "User not found!"}, 401)


api.add_resource(Login, '/login')



if __name__ == '__main__':
    app.run(port=5555, debug=True)

