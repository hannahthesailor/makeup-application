from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

from config import db

# Models go here!
class Product(db.Model, SerializerMixin):
    __tablename__ = 'products' 

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    brand = db.Column(db.String, nullable=False)
    category = db.Columb(db.String, nullable=False)
    image = db.Column(db.String, nullable=False)
    # wishlish_items_id = db.Column(db.Integer, db.ForgeinKey('wishlist_items.id))


# class Review(db.Model, SerializerMixin):
#     __tablename__ = 'reviews'

    # id = db.Column(db.Integer, primary_key=True)
    # rating = db.Column(db.Integer)
    # purchase_date = db.Column(db.String, nullable=False)
    # text = db.Column(db.String, nullable=False)
    # product_id = db.Column(db.Integer, db.ForeignKey('products.id))
    # user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    # product_id = db.Column(db.Integer, db.ForeignKey('products.id'))
    # product = db.relationship('Products', back_populates='reviews')
    

# class User(db.Model, SerializerMixin):
#     __tablename__ = 'users'

    # id = db.Column(db.Integer, primary_key=True)
    # name = db.Column(db.String, nullable=False)
    # age = db.Column(db.Integer)
    # gender = db.Column(db.String, nullable=False)
    # username = db.Column(db.String, unique=True)
    # _password_hash = db.Column(db.String, nullable=False)


# class  Wishlist_item(db.Model, SerializerMixin):
#     __tablename__ = 'wishlist_items'

    # id = db.Column(db.Integer, primary_key=True)
    # user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    # product_id = db.Column(db.Integer, db.ForeignKey('products.id'))
    