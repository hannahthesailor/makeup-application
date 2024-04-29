#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, Product, User, Review, Wishlist_item

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        Product.query.delete()
        # User.query.delete()
        # Review.query.delete()
        # Wishlist_item.query.delete()


        print("Starting seed...")

        product1 = Product(name='Lip Injection', brand='Too Faced', category='makeup', image='https://media.ulta.com/i/ulta/2254207?w=480&$ProductCardNeutralBGLight$&fmt=auto')
        product2 = Product(name='Smokey Eye Mascara', brand='Bobbi Brown', category='makeup', image='https://media.ulta.com/i/ulta/2583680?w=480&$ProductCardNeutralBGLight$&fmt=auto')
        product3 = Product(name='Butter Gloss', brand='NYX', category='makeup', image='https://media.ulta.com/i/ulta/2268533?w=480&$ProductCardNeutralBGLight$&fmt=auto')
        product4 = Product(name='Tropic Glow Body Butter', brand='Tree Hut', category='body care', image='https://media.ulta.com/i/ulta/2577311?w=480&$ProductCardNeutralBGLight$&fmt=auto')
        product5 = Product(name='Power Grip Primer', brand='Elf', category='makeup', image='https://media.ulta.com/i/ulta/2591795?w=480&$ProductCardNeutralBGLight$&fmt=auto')
        product6 = Product(name='Brazilian Bum Bum Body Cream', brand='Sol de Juneiro', category='body care', image='https://media.ulta.com/i/ulta/2618129?w=480&$ProductCardNeutralBGLight$&fmt=auto')
        product7 = Product(name='Tanning', brand='Tanologist', category='body care', image='https://media.ulta.com/i/ulta/2560923?w=480&$ProductCardNeutralBGLight$&fmt=auto')
        product8 = Product(name='Sweet Like Candy', brand='Ariana Grande', category='perfume', image='https://media.ulta.com/i/ulta/2306622?w=480&$ProductCardNeutralBGLight$&fmt=auto')
        product9 = Product(name='Born In Roma', brand='Valentino', category='perfume', image='https://media.ulta.com/i/ulta/2568843?w=480&$ProductCardNeutralBGLight$&fmt=auto')
        product10 = Product(name='No5', brand='CHANEL', category='perfume', image='https://media.ulta.com/i/ulta/2273197?w=480&$ProductCardNeutralBGLight$&fmt=auto')
        product11 = Product(name='Brit For Her', brand='Burberry', category='perfume', image='https://media.ulta.com/i/ulta/2106009?w=480&$ProductCardNeutralBGLight$&fmt=auto')
        product12 = Product(name='Love To Mask', brand='Freeman', category='skin care', image='https://media.ulta.com/i/ulta/2566481?w=480&$ProductCardNeutralBGLight$&fmt=auto')
        product13 = Product(name='Hydrating Face Cream', brand='Bobbi Brown', category='skin care', image='https://media.ulta.com/i/ulta/2583622?w=480&$ProductCardNeutralBGLight$&fmt=auto')
        product14 = Product(name='Hyaluronic Acid 2%', brand='The Ordinary', category='skin care', image='https://media.ulta.com/i/ulta/2618749?w=480&$ProductCardNeutralBGLight$&fmt=auto')
        product15 = Product(name='Seaweed Night Cream', brand='Mario Badescu', category='skin care', image='https://media.ulta.com/i/ulta/2209856?w=480&$ProductCardNeutralBGLight$&fmt=auto')



        db.session.add_all([product1, product2, product3, product4, product5, product6, product7, product8, product9, product10, product11, product12, product13, product14, product15])
        db.session.commit()

        print("Seeding complete!")
        # Seed code goes here!
