from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.orm import validates

from config import db

# Models go here!
class Product(db.Model, SerializerMixin):
    __tablename__ = 'products' 

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    brand = db.Column(db.String, nullable=False)
    category = db.Column(db.String, nullable=False)
    image = db.Column(db.String, nullable=False)


    reviews = db.relationship('Review', back_populates='product')

    wishlist_items = db.relationship('Wishlist_Item', back_populates='product')

    @validates('name', 'brand', 'category', 'image')
    def validate_product_fields(self, key, value):
        if not value.strip():
            raise ValueError(f"{key} cannot be empty.")
        return value


class Review(db.Model, SerializerMixin):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    rating = db.Column(db.Integer)
    text = db.Column(db.String, nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))


    product = db.relationship('Product', back_populates='reviews')
    
    user = db.relationship('User', back_populates='reviews')

    @validates('rating')
    def validate_rating(self, key, rating):
        if not isinstance(rating, int):
            raise ValueError("Rating must be an integer")
        if rating < 1 or rating > 5:
            raise ValueError("Rating must be between 1 and 5")
        return rating 

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    username = db.Column(db.String(25), unique=True)
    password_hash = db.Column(db.String, nullable=False)


    reviews = db.relationship('Review', back_populates='user')

    wishlist_items = db.relationship('Wishlist_Item', back_populates='user')

    @validates('username')
    def validate_username(self, key, username):
        if len(username) > 25:
            raise ValueError("Username cannot be longer than 25 characters.")
        return username


class  Wishlist_Item(db.Model, SerializerMixin):
    __tablename__ = 'wishlist_items'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'))


    product = db.relationship('Product', back_populates='wishlist_items')

    user = db.relationship('User', back_populates='wishlist_items')

    @validates('user_id', 'product_id')
    def validate_user_id_and_product_id(self, attr, value):
        if not (isinstance(value, int)):
            raise ValueError(f"{attr} must be an integer!")
        else:
            return value

    
    