from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

from config import db

# Models go here!
class Product(db.Model, SerializerMixin):
    __tablename__ = 'products' 

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    brand = db.Column(db.String, nullable=False)
    category = db.Column(db.String, nullable=False)
    image = db.Column(db.String, nullable=False)


    reviews = db.relationship('Review', back_poplates='product')

    wishlist_item = db.relationship('Wishlist_Item', back_populates='product')


class Review(db.Model, SerializerMixin):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    rating = db.Column(db.Integer)
    text = db.Column(db.String, nullable=False)
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))


    product = db.relationship('Product', back_populates='reviews')
    
    user = db.relationship('User', back_populates='reviews')

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    username = db.Column(db.String(25), unique=True)
    password_hash = db.Column(db.String, nullable=False)
    

    reviews = db.relationship('Review', back_poplates='user')

    wishlist_items = db.relationship('Wishlist_Item', back_populates='user')


class  Wishlist_Item(db.Model, SerializerMixin):
    __tablename__ = 'wishlist_items'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    product_id = db.Column(db.Integer, db.ForeignKey('products.id'))


    product = db.relationship('Product', back_populates='wishlist_items')

    user = db.relationship('User', back_populates='wishlist_items')
    