#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, Product, User, Review, Wishlist_Item

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        Product.query.delete()
        User.query.delete()
        Review.query.delete()
        Wishlist_Item.query.delete()


        print("Starting seed...")

        print("Seeding complete!")

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

        user1 = User(name='Sara Johnson', username='skincaresara', password_hash='1234')
        user2 = User(name='Erika Smith', username='erikaloveslipstick', password_hash='1234')
        user3 = User(name='Savannah Sanders', username='apizzaroll', password_hash='1234')
        user4 = User(name='Mellisa Henderson', username='melskinfulencer', password_hash='1234')

        db.session.add_all([user1, user2, user3, user4])
        db.session.commit()

        review1 = Review(rating='5', text='Wow, this mascara is amazing! It lengthens and volumizes my lashes without clumping', product=product2, user=user4)
        review2 = Review(rating='2', text='Masks felt dry right out the package, really disappointed.', product=product12, user=user3)
        review3 = Review(rating='5', text="Absolutely love this scent! It's fresh, floral, and long-lasting. Gets me compliments every time I wear it!", product=product10, user=user2)
        review4 = Review(rating='3', text="Meh, this lip gloss is just average. It's a bit sticky and doesn't stay on very long. The color is nice, but I've used better.", product=product3, user=user2)
        review5 = Review(rating='4', text="This perfume is quite nice! It has a pleasant scent that's not too overpowering. I've received a few compliments when wearing it.", product=product9, user=user1)
        review6 = Review(rating='1', text='This night cream is terrible! It broke me out like crazy and left my skin feeling stripped and dry.', product=product15, user=user4)
        review7 = Review(rating='5', text= "This body lotion is fantastic! It's lightweight, absorbs quickly, and leaves my skin feeling incredibly soft and moisturized. Love the subtle scent, too!", product=product6, user=user4)
        review8 = Review(rating='2', text="This night cream is alright. It feels hydrating, but I haven't seen any noticeable results. It's just okay for me.", product=product1, user=user3)
        review9 = Review(rating='4', text="This lip gloss is my new go-to! It's not sticky, adds a subtle shine, and feels super hydrating on my lips.", product=product1, user=user2)
        review10 = Review(rating='5', text="Obsessed with this lotion! It's ultra-moisturizing and absorbs quickly into the skin. Leaves me feeling hydrated and smelling fantastic", product=product6, user=user1)

        db.session.add_all([review1, review2, review3, review4, review4, review5, review6, review7, review8, review9, review10])
        db.session.commit()

        wishlist_item1 = Wishlist_Item(product=product12, user=user3)
        wishlist_item2 = Wishlist_Item(product=product3, user=user2)
        wishlist_item3 = Wishlist_Item(product=product1, user=user1)
        wishlist_item4 = Wishlist_Item(product=product1, user=user2)
        wishlist_item5 = Wishlist_Item(product=product5, user=user4)
        wishlist_item6 = Wishlist_Item(product=product9, user=user3)
        wishlist_item7 = Wishlist_Item(product=product8, user=user2)
        wishlist_item8 = Wishlist_Item(product=product10, user=user1)
        wishlist_item9 = Wishlist_Item(product=product15, user=user4)
        wishlist_item10 = Wishlist_Item(product=product6, user=user3)
        wishlist_item11 = Wishlist_Item(product=product4, user=user2)
        wishlist_item12 = Wishlist_Item(product=product7, user=user1)
        wishlist_item13 = Wishlist_Item(product=product11, user=user4)
        wishlist_item14 = Wishlist_Item(product=product14, user=user3)
        wishlist_item15 = Wishlist_Item(product=product13, user=user2)
        wishlist_item16 = Wishlist_Item(product=product2, user=user1)
        wishlist_item17 = Wishlist_Item(product=product3, user=user4)
        wishlist_item18 = Wishlist_Item(product=product5, user=user3)
        wishlist_item19 = Wishlist_Item(product=product8, user=user2)
        wishlist_item20 = Wishlist_Item(product=product7, user=user1)
        wishlist_item21 = Wishlist_Item(product=product12, user=user3)
        wishlist_item22 = Wishlist_Item(product=product3, user=user2)
        wishlist_item23 = Wishlist_Item(product=product1, user=user1)
        wishlist_item24 = Wishlist_Item(product=product1, user=user2)
        wishlist_item25 = Wishlist_Item(product=product5, user=user4)
        wishlist_item26 = Wishlist_Item(product=product9, user=user3)
        wishlist_item27 = Wishlist_Item(product=product8, user=user2)
        wishlist_item28 = Wishlist_Item(product=product10, user=user1)
        wishlist_item29 = Wishlist_Item(product=product15, user=user4)
        wishlist_item30 = Wishlist_Item(product=product6, user=user3)
        wishlist_item31 = Wishlist_Item(product=product4, user=user2)
        wishlist_item32 = Wishlist_Item(product=product7, user=user1)
        wishlist_item33 = Wishlist_Item(product=product11, user=user4)
        wishlist_item34 = Wishlist_Item(product=product14, user=user3)
        wishlist_item35 = Wishlist_Item(product=product13, user=user2)
        wishlist_item36 = Wishlist_Item(product=product2, user=user1)
        wishlist_item37 = Wishlist_Item(product=product3, user=user4)
        wishlist_item38 = Wishlist_Item(product=product5, user=user3)
        wishlist_item39 = Wishlist_Item(product=product8, user=user2)
        wishlist_item40 = Wishlist_Item(product=product7, user=user1)

        db.session.add_all([wishlist_item1, wishlist_item2, wishlist_item3, wishlist_item4, wishlist_item5, wishlist_item6, wishlist_item7, wishlist_item8, wishlist_item9, wishlist_item10, wishlist_item11, wishlist_item12, wishlist_item13, wishlist_item14, wishlist_item15, wishlist_item16, wishlist_item17, wishlist_item18, wishlist_item19, wishlist_item20, wishlist_item21, wishlist_item22, wishlist_item23, wishlist_item24, wishlist_item25, wishlist_item26, wishlist_item27, wishlist_item28, wishlist_item29, wishlist_item30, wishlist_item31, wishlist_item32, wishlist_item33, wishlist_item34, wishlist_item35, wishlist_item36, wishlist_item37, wishlist_item38, wishlist_item39, wishlist_item40])
        db.session.commit()
